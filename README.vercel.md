# Vercel Deployment Instructions

This Real Estate Dashboard is now configured for Vercel deployment.

## Prerequisites

1. A Vercel account (free tier works fine)
2. Vercel CLI installed (optional, for CLI deployment)

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import this repository from GitHub
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Configuration Details

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Framework**: None (custom Vite + Express setup)

## Environment Variables

No environment variables are required for this deployment as the dashboard fetches data directly from the n8n webhook endpoint.

## How It Works

1. Vercel runs `npm run build` which:
   - Builds the React frontend with Vite
   - Bundles the Express server (though it's not used in production on Vercel)
   - Outputs static files to `dist/public`

2. Vercel serves the static files from `dist/public`
3. The React app fetches data directly from the external n8n webhook
4. Client-side routing is handled by the routing configuration in `vercel.json`

## Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check that Node.js version is compatible (18.x or higher recommended)

### 404 Errors on Routes
- Verify `vercel.json` routing configuration
- Make sure client-side routing is properly configured

### Data Not Loading
- Check that the n8n webhook endpoint is accessible
- Verify CORS settings on the webhook if needed

## Post-Deployment

After successful deployment:
1. Vercel will provide you with a deployment URL (e.g., `your-project.vercel.app`)
2. You can configure a custom domain in Vercel settings
3. The app will automatically redeploy on every push to your connected Git repository

## Support

For Vercel-specific issues, consult the [Vercel Documentation](https://vercel.com/docs).
