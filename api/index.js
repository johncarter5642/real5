// Vercel serverless function handler
// This file is required for Vercel deployment but the app
// fetches data directly from the n8n webhook in the frontend

export default function handler(req, res) {
  // Health check endpoint
  if (req.url === '/api/health') {
    return res.status(200).json({ status: 'ok', message: 'API is running' });
  }
  
  // Default response for any API calls
  return res.status(404).json({ message: 'No API routes configured. This app fetches data directly from external webhook.' });
}
