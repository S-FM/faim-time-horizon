# FAIM - Foundation AI Models for structured data

## Project info

**Live Site**: https://faim.it.com

## How can I edit this code?

**Use your preferred IDE**

You can work locally using your own IDE and push changes to deploy automatically.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project automatically deploys to GitHub Pages when you push changes to the main branch.

1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will build and deploy automatically
4. Your changes will be live at https://faim.it.com in ~2-5 minutes

## Domain Configuration

This project is configured with a custom domain (faim.it.com) pointing to GitHub Pages with automatic HTTPS.
