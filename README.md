✅ Here's your fully updated `README.md` with everything we've added:

* Google Analytics integration
* Route-based page view tracking
* Firebase GitHub Action setup
* Firebase Hosting auto-deploy

---

### 📄 Updated `README.md`

````markdown
# Profolio Website 2025

Welcome to the **Profolio Website 2025** project. This is a personal portfolio site showcasing my video direction and photography work. Built with **React**, **Tailwind CSS**, **React Router**, and **Firebase**.

Repository: [https://github.com/internetkid2001/2025-profolio-website.git](https://github.com/internetkid2001/2025-profolio-website.git)

---

## 🔹 Website Overview

- **Landing Page:**  
  Fullscreen autoplay video background with smooth entry animation.

- **Direction (Video) Page:**  
  Vertical scrolling showcase of video projects and music videos.

- **Photography Page:**  
  Scrollable mosaic of photography work.

- **Photo Projects Albums:**  
  List of photography albums. Clicking an album loads a fullscreen album viewer, with keyboard navigation (left/right arrows).

- **Contact Page:**  
  Video background with a contact form submitting directly to Firebase.

---

## 🔹 Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Backend / Database:** Firebase (Firestore for contact form submissions)
- **Hosting:** Firebase Hosting
- **Analytics:** Google Analytics (via gtag.js)

---

## 🔹 Project Structure

```bash
/
├── public/
│   ├── photos/          # Photo gallery assets
│   ├── videos/          # Video assets for landing page + others
│   ├── favicon.ico      # Website icon
│   └── index.html       # Main HTML shell (includes gtag.js script)
│
├── src/
│   ├── assets/          # Images, audio, and video imports
│   ├── components/      # Reusable UI components (Navbar, etc.)
│   ├── Views/           # Main pages (LandingPage, DirectionPage, etc.)
│   ├── App.css          # Global styles
│   ├── App.jsx          # Routing, layout, and page view tracking
│   ├── firebase.js      # Firebase config setup
│   ├── index.css        # Tailwind CSS imports
│   └── index.js         # React entry point
│
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml         # Deploys on merge to main
│       └── firebase-hosting-pull-request.yml  # Previews on PRs
│
├── .gitignore           # Files and folders to ignore in Git
├── firebase.json        # Firebase hosting configuration
├── .firebaserc          # Firebase project alias
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
````

---

## 🔹 Local Setup

1. **Clone the repository:**

```bash
git clone https://github.com/internetkid2001/2025-profolio-website.git
cd 2025-profolio-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm start
```

4. **Firebase Environment Variables:**

Create a `.env.local` file in the root folder:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

---

## 🔹 Analytics Setup

Google Analytics is integrated using the global `gtag.js` snippet placed in `public/index.html`.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6HB9S6L7P0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6HB9S6L7P0');
</script>
```

Page views are automatically tracked on route changes using a `useEffect` hook in `App.jsx` with React Router.

---

## 🔹 Deployment

This project is automatically deployed to Firebase Hosting whenever a change is pushed to the `main` branch, using GitHub Actions.

Deployment automation was configured using:

```bash
firebase init hosting:github
```

This setup:

* Creates a service account for GitHub Actions
* Stores it securely as a GitHub secret
* Writes CI workflows to `.github/workflows/`
* Runs `npm ci && npm run build` before each deploy
* Deploys to Firebase Hosting live channel on merge to `main`

---

## 🔹 Future Enhancements

* Add animations with Framer Motion
* Improve mobile responsiveness and accessibility
* Add SEO meta tags and OpenGraph data for better sharing
* Track video interactions and form submissions via custom analytics events

---

## 🔹 License

This project is open-source and free to use. Attribution appreciated!

---

> Designed and developed by **Victor Grisson**.

```

---

Let me know if you'd like this committed and pushed — I’ll give you the exact `git` commands next.
```
