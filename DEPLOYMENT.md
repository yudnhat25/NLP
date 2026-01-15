# Vietnamese Stock Market Sentiment Analysis

## Deploy to Vercel

This is a static website showcasing the Vietnamese Stock Market Sentiment Analysis project.

### Files Structure
```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
└── .vercelignore       # Files to ignore during deployment
```

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update Vercel configuration"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Vercel will automatically detect it as a static site
   - Click "Deploy"

### Troubleshooting

If CSS/JS files don't load:
1. Check that `vercel.json` is properly configured
2. Ensure file paths in `index.html` are relative (not absolute)
3. Clear Vercel cache and redeploy
4. Check browser console for 404 errors

### Local Development

Run a local server:
```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`
