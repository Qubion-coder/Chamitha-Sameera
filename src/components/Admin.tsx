import React, { useState } from 'react';

const PREFIXES = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'];

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [fullMessage, setFullMessage] = useState('');

  const generateLink = () => {
    if (!guestName.trim()) {
      alert('Please enter a guest name');
      return;
    }
    
    const baseUrl = window.location.origin;
    const url = new URL(baseUrl);
    url.searchParams.set('prefix', prefix);
    url.searchParams.set('guest', guestName.trim());
    
    const link = url.toString();
    setGeneratedLink(link);

    const message = `Dear ${prefix} ${guestName.trim()} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${link}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ Chamitha & Sameera`;

    setFullMessage(message);
  };

  const copyToClipboard = async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      alert('Failed to copy');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 sm:p-12 font-sans text-stone-800">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-serif mb-8 text-[#1D3557] border-b border-stone-200 pb-4">Wedding Invitation Link Generator</h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">Prefix</label>
              <select 
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#457B9D]"
              >
                {PREFIXES.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">Guest Name</label>
              <input 
                type="text"
                placeholder="e.g. Sanjaya"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#457B9D]"
              />
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              onClick={generateLink}
              className="bg-[#1D3557] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#2C3E50] transition-colors cursor-pointer"
            >
              Generate Link
            </button>
          </div>

          {generatedLink && (
            <div className="mt-12 pt-8 border-t border-stone-200 space-y-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">Generated Link</label>
                <div className="flex gap-4 items-center">
                  <input 
                    readOnly
                    value={generatedLink}
                    className="flex-1 bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-sm font-mono text-stone-600"
                  />
                  <button 
                    onClick={() => copyToClipboard(generatedLink)}
                    className="bg-stone-200 text-stone-700 px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-stone-300 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Copy Link Only
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">Full Message Preview</label>
                <textarea 
                  readOnly
                  value={fullMessage}
                  className="w-full bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-sm font-serif h-64 resize-none mb-4 outline-none"
                />
                <button 
                  onClick={() => copyToClipboard(fullMessage)}
                  className="bg-[#457B9D] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#1D3557] transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Copy Full Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
