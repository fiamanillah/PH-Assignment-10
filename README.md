# EquiSports

**Your go-to online store for premium sports equipment!**

## Live Site URL

[Visit EquiSports Live](#)

## Project Description

EquiSports is a comprehensive e-commerce platform designed for sports enthusiasts to browse, purchase, and manage sports equipment and accessories. With a focus on responsive design, smooth user experience, and efficient management, the site offers an interactive and secure shopping experience.

## Features

### User Authentication

-   Email/Password authentication and Google login for convenience.
-   Conditional Navbar elements for logged-in and non-logged-in users.

### Product Management

-   Add, update, and delete products seamlessly through a private dashboard.
-   Display all equipment with sorting functionality by price.

### Dynamic Content

-   View detailed product information on a dedicated page.
-   Show equipment added by the logged-in user in a personalized "My Equipment" section.

### Unique Design & Responsiveness

-   Fully responsive design for mobile, tablet, and desktop devices.
-   Light/Dark theme toggle for personalized user experience.

### Interactive UI

-   Integrated React Awesome Reveal for smooth animations.
-   Tooltips for better usability and interaction.

## Technologies Used

-   **Frontend:** React, Tailwind CSS, Firebase Authentication
-   **Backend:** Node.js, Express.js, MongoDB
-   **Hosting:** Firebase (Frontend), Vercel (Backend)

## Environment Variables

To run this project, add the following environment variables to your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_API_URL=your_api_url
```

## Dependencies

### Main Dependencies

```json
{
    "@formspree/react": "^2.5.1",
    "firebase": "^11.0.2",
    "lottie-react": "^2.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-toastify": "^10.0.6",
    "react-tooltip": "^5.28.0",
    "sweetalert2": "^11.6.13",
    "swiper": "^11.1.15"
}
```

### Development Dependencies

```json
{
    "@eslint/js": "^9.15.0",
    "@tailwindcss/typography": "^0.5.15",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"
}
```

## Getting Started

### Prerequisites

Ensure that Node.js is installed on your system.

### Clone the Repository

```sh
git clone https://github.com/yourusername/equisports.git
cd equisports
```

### Install Dependencies

```sh
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add your Firebase and API keys.

### Run the Application

```sh
npm run dev
```

### Open in Browser

Go to: [http://localhost:5173](http://localhost:5173)

## Live Link

You can access the live version of EquiSports here: [Visit EquiSports Live](#)
