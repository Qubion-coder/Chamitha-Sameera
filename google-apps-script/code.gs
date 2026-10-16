const SPREADSHEET_ID = '1GYsb2XNsJ--J5_APTdjkrbxasExu9CPWIVpZsnXwZqk';

const SHEETS = {
  RSVP: {
    name: 'RSVP',
    headers: ['Timestamp', 'Full Name', 'Guests', 'Event', 'Dietary Notes / Message'],
    row: (p) => [new Date(), p.fullName || '', p.guests || '', p.event || '', p.dietaryNotes || ''],
  },
  WISH: {
    name: 'Wishes',
    headers: ['Timestamp', 'Name', 'Message'],
    row: (p) => [new Date(), p.name || '', p.message || ''],
  },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    const payload = parsePayload_(e);
    const config = SHEETS[String(payload.sheet || '').toUpperCase()];

    if (!config) {
      return jsonResponse_({ ok: false, error: 'Invalid sheet. Use RSVP or WISH.' });
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, config);
    sheet.appendRow(config.row(payload));

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Wedding form endpoint is running.',
  });
}

// Run this once from the Apps Script editor to create both sheets with headers.
function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.keys(SHEETS).forEach((key) => getOrCreateSheet_(ss, SHEETS[key]));
}

function parsePayload_(e) {
  const params = e && e.parameter ? e.parameter : {};

  if (Object.keys(params).length > 0) {
    return params;
  }

  const contents = e && e.postData && e.postData.contents ? e.postData.contents : '';
  if (!contents) {
    return {};
  }

  if (contents.indexOf('=') !== -1 && contents.indexOf('{') !== 0) {
    return parseQueryString_(contents);
  }

  try {
    return JSON.parse(contents);
  } catch (_error) {
    return {};
  }
}

function parseQueryString_(query) {
  const out = {};
  const pairs = String(query).split('&');

  for (let i = 0; i < pairs.length; i++) {
    const part = pairs[i];
    if (!part) continue;

    const idx = part.indexOf('=');
    const rawKey = idx >= 0 ? part.slice(0, idx) : part;
    const rawValue = idx >= 0 ? part.slice(idx + 1) : '';
    const key = decodeURIComponent(rawKey.replace(/\+/g, ' '));
    const value = decodeURIComponent(rawValue.replace(/\+/g, ' '));

    out[key] = value;
  }

  return out;
}

function getOrCreateSheet_(ss, config) {
  let sheet = ss.getSheetByName(config.name);
  if (!sheet) {
    sheet = ss.insertSheet(config.name);
  }
  ensureHeaders_(sheet, config.headers);
  return sheet;
}

// Makes sure row 1 holds the headers: writes them on an empty sheet,
// replaces an outdated header row, or inserts one above existing data.
function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() > 0) {
    const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    if (current.join('|') === headers.join('|')) return;
    if (String(sheet.getRange(1, 1).getValue()) === 'Timestamp') {
      sheet.getRange(1, 1, 1, sheet.getLastColumn()).clearContent();
    } else {
      sheet.insertRowBefore(1);
    }
  }

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#f3e8dc')
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 170);
  for (let col = 2; col <= headers.length; col++) {
    sheet.setColumnWidth(col, col === headers.length ? 360 : 180);
  }
  sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm');
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
