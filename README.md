# Evalnila Designers Website

Women's Clothing Boutique — Pethappampatti, Tiruppur, Tamil Nadu

**Categories:** Kurtis | Maxis | Co-ord Sets | Crop-Skirt | Western Wear | Sarees

📍 Pethappampatti, Udumalpet Taluk, Tiruppur – 642205  
📞 +91 99448 73489  
📸 [@evalnila](https://instagram.com/evalnila)

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (create account if needed)
2. Click the **+** icon → **New repository**
3. Name it: `evalnila-website`
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload Files

**Option A — Using GitHub website (easiest):**
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL files from this folder
3. Make sure to keep the folder structure:
   - `src/App.jsx`
   - `src/main.jsx`
   - `public/logo.jpg`
   - `public/collection1.jpg`
   - `.github/workflows/deploy.yml`
   - `index.html`
   - `package.json`
   - `vite.config.js`
4. Click **Commit changes**

**Option B — Using Git (if you have Git installed):**
```bash
git init
git add .
git commit -m "Initial commit — Evalnila website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/evalnila-website.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 4 — Wait for Deployment

1. Click the **Actions** tab on your repo
2. Watch the workflow run (takes ~2 minutes)
3. Once it shows ✅ green, your site is live!

### Step 5 — Visit Your Live Site

Your website will be at:
```
https://YOUR_USERNAME.github.io/evalnila-website/
```

---

## 💻 Run Locally

```bash
npm install
npm run dev
```
Then open http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
```

---

## 📸 Adding More Product Photos

1. Add your photos to the `public/` folder (e.g. `collection2.jpg`, `collection3.jpg`)
2. In `src/App.jsx`, find the `COLLECTIONS` array and update the `img` paths:
   ```js
   { title: "Maxis", img: "/collection2.jpg", tag: "New", subtitle: "Flowy Elegance" },
   ```
3. Commit and push — site auto-updates!

---

## 📞 Contact Details (already in website)

- Location: Pethappampatti, Udumalpet Taluk, Tiruppur – 642205
- Phone: +91 99448 73489
- Instagram: @evalnila
"# evalnila-website" 
"# evalnila-website" 
