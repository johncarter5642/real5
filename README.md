# Real Estate Lead Management Dashboard

A modern, full-stack real estate dashboard for managing leads, appointments, and conversion analytics.

## Features

- **Real-time Lead Tracking** - Monitor qualified and incoming leads with status indicators (Hot, Warm, Cold)
- **Appointment Management** - Track upcoming appointments with detailed information
- **Analytics Dashboard** - Visualize lead distribution, location analytics, and conversion metrics
- **Data Export** - Export leads and appointments to CSV format
- **Dark Mode Support** - Toggle between light and dark themes
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for fast builds and development
- Tailwind CSS for styling
- Shadcn/ui component library
- Chart.js for data visualization
- TanStack Query for data management

**Backend:**
- Express.js server
- Node.js runtime
- RESTful API architecture

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the configuration and deploy

The project includes `vercel.json` for seamless deployment.

### Deploy to Other Platforms

The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS
- Digital Ocean

## Configuration

The dashboard fetches data from an external webhook endpoint. The endpoint is configured in `client/src/hooks/useDashboardData.ts`.

## Development

```bash
# Run development server
npm run dev

# Type checking
npm run check

# Build production bundle
npm run build
```

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utility functions
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
└── api/                 # Serverless API functions
```

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
