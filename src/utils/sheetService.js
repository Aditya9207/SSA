export const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
  'https://script.google.com/macros/s/AKfycbybRrWa1RmcEpt2AwPtOBoZnEVyGCUVcgvaHFd72w_CAxZfdE986H2nP4RK_QwE3u4q/exec';

/**
 * Sends customer lead inquiry data to the Google Sheet webhook.
 * Uses 'no-cors' mode so Google Apps Script redirects do not cause CORS errors in browsers.
 */
export async function sendLeadToSheet({ name, phone, product, branch, message, source, language }) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) return false;

  const payload = {
    name: name || '—',
    phone: phone || '—',
    product: product || '—',
    branch: branch || '—',
    message: message || '—',
    source: source || 'संपर्क फॉर्म',
    language: language || 'मराठी',
  };

  try {
    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (error) {
    console.error('Failed to send lead to Google Sheet:', error);
    return false;
  }
}
