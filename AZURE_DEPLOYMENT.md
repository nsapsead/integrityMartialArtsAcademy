# Azure Static Web Apps Deployment Guide

## ✅ **Your Next.js App is Ready for Azure Static Web Apps!**

### **What's Configured:**
- ✅ Static export mode enabled (`output: 'export'`)
- ✅ Trailing slashes for Azure compatibility
- ✅ Unoptimized images for static hosting
- ✅ Azure routing configuration (`staticwebapp.config.json`)
- ✅ Static files generated in `/out` directory

### **Deployment Options:**

#### **Option 1: Azure Portal (Easiest)**
1. Go to [Azure Portal](https://portal.azure.com)
2. Create new "Static Web App" resource
3. Choose your subscription and resource group
4. Set source to "Other" (manual upload)
5. Upload the contents of the `/out` folder
6. Your site will be live at `https://your-app-name.azurestaticapps.net`

#### **Option 2: Azure CLI**
```bash
# Install Azure CLI
npm install -g @azure/static-web-apps-cli

# Deploy from the out directory
swa deploy out --deployment-token YOUR_DEPLOYMENT_TOKEN
```

#### **Option 3: GitHub Actions (Automated)**
1. Push your code to GitHub
2. Create Azure Static Web App with GitHub integration
3. Azure will automatically build and deploy on every push

### **Build Commands:**
```bash
# Development
npm run dev

# Production build (generates /out folder)
npm run build

# The /out folder contains all static files for deployment
```

### **File Structure for Deployment:**
```
/out/
├── index.html          # Main page
├── 404.html           # Error page
├── _next/             # Next.js assets
├── staticwebapp.config.json  # Azure routing config
└── [other static files]
```

### **Important Notes:**
- All routing is handled client-side
- No server-side features (perfect for static hosting)
- Images and assets are optimized for static serving
- SEO-friendly with proper meta tags

### **Next Steps:**
1. Choose your deployment method above
2. Upload the `/out` folder contents
3. Your Integrity MMA website will be live!

## 🚀 **Ready to Deploy!**
Your website is fully configured for Azure Static Web Apps deployment.
