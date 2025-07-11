# Asgardeo React Integration

This project demonstrates how to integrate **Asgardeo** with a **React** application using the [Asgardeo React SDK](https://www.npmjs.com/package/@asgardeo/react).

---

## 🚀 Prerequisites

- Node.js v16+ recommended
- npm, yarn, or pnpm
- An [Asgardeo](https://www.asgardeo.io/) account

---

## 🔧 1. Configure an Application in Asgardeo

1. Sign into the **Asgardeo Console**.
2. Navigate to: `Applications > New Application`.
3. Choose **React** from the available templates.
4. Complete the setup wizard with:
    
    ```
    Name: asgardeo-react
    Authorized redirect URL: http://localhost:5173
    ```

5. Once the application is created, go to the **Guide** tab and note the following:

    - **Client ID** – Unique identifier for the application.
    - **Base URL** – Usually in the format: `https://api.asgardeo.io/t/<your-organization-name>`

      > **ℹ️ Note:** The redirect URL is where users are sent after login. For local development, use `http://localhost:5173`.

---

## ⚛️ 2. Create a React App using Vite

You can scaffold a new React app with Vite:

```bash
npm create vite@latest asgardeo-react -- --template react
cd asgardeo-react
npm install
npm run dev
