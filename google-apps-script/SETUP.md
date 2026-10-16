1. Open the wedding Google Sheet:
   https://docs.google.com/spreadsheets/d/1GYsb2XNsJ--J5_APTdjkrbxasExu9CPWIVpZsnXwZqk/edit
2. Open Extensions > Apps Script.
3. Delete everything in Code.gs and paste the code from google-apps-script/code.gs. Save.
4. In the function dropdown pick `setup` and click Run. Approve the permission prompt
   (Advanced > Go to project > Allow). This creates two tabs with headers:
   - RSVP:   Timestamp | Full Name | Guests | Event | Dietary Notes / Message
   - Wishes: Timestamp | Name | Message
5. Click Deploy > New deployment.
6. Select type: Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. Deploy and copy the Web App URL (ends in /exec).
10. Paste it into src/config.ts as GOOGLE_SCRIPT_URL.
11. Restart the Vite dev server / redeploy the site.

Notes:
- If you change the Apps Script code later, use Deploy > Manage deployments > Edit > New version,
  so the URL stays the same.
- Tabs are also created automatically on the first RSVP/wish if you skip step 4.
