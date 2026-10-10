# CampusConnect — Deployment & Infrastructure Guide

This guide details the complete deployment process for **CampusConnect**:
- **Frontend**: Cloudflare Pages (React + Vite)
- **Backend**: Render Web Service (Node.js + Express)
- **Database**: MongoDB Atlas Cluster
- **Connection Architecture**: CORS configuration, environment variables, API routing.

---

## 1. MongoDB Atlas Setup

1. **Cluster Connection String**:
   ```env
   MONGODB_URI=mongodb+srv://saniiaa2012_db_user:ESTIFs8Hv9h2WboV@cluster0.x6souub.mongodb.net/campusconnect?retryWrites=true&w=majority
   ```
2. **Network Access / IP Whitelist**:
   - Go to MongoDB Atlas Console → **Network Access**.
   - Add IP Address: `0.0.0.0/0` (Allow access from anywhere for Render deployment).
3. **Database Access / Users**:
   - Username: `saniiaa2012_db_user`
   - Permissions: Read and write to any database.

---

## 2. Backend Deployment on Render

1. Log in to your [Render Dashboard](https://dashboard.render.com).
2. Click **New +** → **Web Service**.
3. Connect your Git repository containing the project.
4. Configure the service settings:
   - **Name**: `campusconnect-api`
   - **Environment**: `Node`
   - **Region**: Singapore / Frankfurt (Closest to India)
   - **Branch**: `main`
   - **Root Directory**: `.` (or leave empty)
   - **Build Command**: `npm install`
   - **Start Command**: `node server/server.js`
5. **Environment Variables on Render**:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: `mongodb+srv://saniiaa2012_db_user:ESTIFs8Hv9h2WboV@cluster0.x6souub.mongodb.net/campusconnect?retryWrites=true&w=majority`
   - `JWT_SECRET`: `campusconnect_super_secret_jwt_token_key_2026`
   - `CLIENT_URL`: `https://campusconnect.pages.dev` (Your Cloudflare Pages domain)
6. Click **Create Web Service**. Once deployed, copy your Render Service URL (e.g. `https://campusconnect-api.onrender.com`).

---

## 3. Frontend Deployment on Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**.
2. Click **Create Application** → **Pages** → **Connect to Git**.
3. Select your repository and configure build settings:
   - **Project Name**: `campusconnect`
   - **Production Branch**: `main`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. **Environment Variables on Cloudflare Pages**:
   - `VITE_API_URL`: `https://campusconnect-api.onrender.com/api` (Point to your Render backend URL)
5. Click **Save and Deploy**. Your app will be live at `https://campusconnect.pages.dev`.

---

## 4. Connection Points & Interoperability Checklist

- [x] **CORS Middleware**: Express server has `cors()` configured to accept requests from Cloudflare Pages domain and localhost.
- [x] **API Base Path**: Frontend uses `VITE_API_URL` environment variable for all API calls (`/api/opportunities`, `/api/campusfix`, etc.).
- [x] **Graceful Database Fallback**: Server handles database connection retries gracefully so the API stays 100% operational in any environment.
- [x] **SPA Routing**: Single Page Application fallback routes to `index.html` on Cloudflare Pages (add `_redirects` file if needed: `/* /index.html 200`).

---

## 5. Local Testing & Verification Commands

To test both Frontend and Backend concurrently locally:
```bash
# 1. Install dependencies
npm install

# 2. Run both Client (Port 5173) and Express Server (Port 5000) concurrently
npm run dev

# 3. Seed MongoDB Atlas database
npm run seed
```
