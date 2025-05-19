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

---

## 🔹 Project Structure

```bash
/
├── public/
│   ├── photos/          # Photo gallery assets
│   ├── videos/          # Video assets for landing page + others
│   ├── favicon.ico      # Website icon
│   └── index.html       # Main HTML shell
│
├── src/
│   ├── assets/          # Images, audio, and video imports
│   ├── components/      # Reusable UI components (Navbar, etc.)
│   ├── Views/           # Main pages (LandingPage, DirectionPage, etc.)
│   ├── App.css          # Global styles
│   ├── App.jsx          # Routing and layout
│   ├── firebase.js      # Firebase config setup
│   ├── index.css        # Tailwind CSS imports
│   └── index.js         # React entry point
│
├── .gitignore           # Files and folders to ignore in Git
├── firebase.json        # Firebase hosting configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

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

## 🔹 Future Enhancements

- Add animations with Framer Motion.
- Improve mobile responsiveness and accessibility.
- Add SEO meta tags and OpenGraph data for better sharing.

---

## 🔹 License

This project is open-source and free to use. Attribution appreciated!

---

## 🔹 Deployment

This project is automatically deployed to Firebase Hosting whenever a change is pushed to the `main` branch, using GitHub Actions.

To configure automatic deployment:
- Firebase CLI was used to initialize GitHub integration:
  ```bash
  firebase init hosting:github

> Designed and developed by **Victor Grisson**.

