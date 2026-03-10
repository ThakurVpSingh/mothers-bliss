# Mother's Bliss Physiotherapy Clinic Website

A modern, responsive, and dynamic landing page website built for a professional physiotherapy clinic offering clinic sessions and home visits. Features a seamless glassmorphism UI design, scroll animations, appointment booking via FormSubmit, and interactive statistics.

## 🌟 Key Features

### 1. **Modern UI & Aesthetics**
- **Glassmorphism Design:** Semi-transparent, layered elements with blur effects.
- **Premium Color Palette:** Uses vibrant primary teals, calming emerald greens, and warm amber accents.
- **Dynamic Scroll Animations:** Content elegantly fades and slides into view as the user scrolls down the page.
- **Responsive Navigation:** Fixed, blurred navigation bar that transitions smoothly on scroll and scales for mobile viewing.

### 2. **Core Sections**
- **Hero Area:** Engaging introductory section featuring an animated background shape, a clear call-to-action out to the booking form, and a newly implemented **Live Statistics Counter** (e.g., ticking up to "100+ Happy Patients").
- **Facilities Grid:** Informative grid detailing the core treatments provided (Women's Health, Ortho, Neuro, etc.) highlighting custom gradients and hover zoom icons.
- **Doctors Portfolio:** Clean cards showcasing the available specialists, their credentials, and their availability for home or clinic visits.
- **Coming Soon E-commerce:** A visually distinct placeholder section teasing a future physiotherapy equipment store using continuous CSS pulse animations.

### 3. **Integrated Booking System**
- **Sleek Appointment Form:** Includes input fields for Name, Phone Number, Appointment Type (Home vs. Clinic), and Doctor Preference.
- **AJAX Submissions:** The form submits data beautifully in the background via modern JavaScript (`fetch` API). It updates the button to a spinning loading state, followed by a "Request Sent" success message without ever refreshing or redirecting the user's page.
- **Email Delivery via FormSubmit:** Powered by `formsubmit.co`, appointment requests are emailed instantaneously and securely to `Drakash625@gmail.com` cleanly formatted into a HTML table. 
- **Popup Notification:** An automated initial popup sliding in informing visitors that home visits are an available feature.

## 🛠️ Technology Stack

- **HTML5:** Semantic structure and layout.
- **Vanilla CSS3:** Custom styling utilizing CSS variables for theme handling, Flexbox/Grid for layouts, and raw keyframes for the interactive background and pulse behaviors. No CSS frameworks are used to maximize customization and control.
- **Vanilla JavaScript (ES6):**
  - **Intersection Observer API** powers the scroll-trigger fade animations and the number-count up logic.
  - **Fetch API** powers the AJAX submission handling for the form.
  - DOM manipulation handles the mobile menu, popups, and active states.
- **FontAwesome:** Scalable vector icons.
- **Google Fonts:** `Inter` and `Outfit`.

---

## 🚀 Step-by-Step Setup & Running Guide

Since this is a lightweight frontend-only application composed entirely of HTML, CSS, and JS, there are no robust build tools (like Webpack or Node.js) required to run it locally.

### Step 1: Clone or Download the Project
Ensure all three primary files are in the exact same directory:
- `index.html` (The markup)
- `style.css` (The styling)
- `script.js` (The interaction logic)

### Step 2: Open in a Web Browser
You can simply double-click the `index.html` file to open it in Google Chrome, Safari, Firefox, or Edge. 

*Note: For the best development experience and to avoid any CORS (Cross-Origin Resource Sharing) restrictions when forms submit, it is highly recommended to run the project using a local live server.*

### Step 3 (Recommended): Run via Live Server in VS Code
1. Open the project folder (`akash`) in **Visual Studio Code**.
2. Go to the Extensions tab (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for and install the extension **"Live Server"** by Ritwick Dey.
4. Once installed, open `index.html`.
5. Look at the bottom right of the VS Code window and click the **"Go Live"** button. This will start a local server (usually on port `5500`) and automatically open the website in your default browser.
6. As you make changes to the files and save, the browser will automatically refresh.

### Step 4: Activating & Testing the FormSubmit Integration
The contact form is connected to `formsubmit.co` for email delivery.
1. Fill out the "Request an Appointment" form on the webpage with test data.
2. Click **"Send Request"**.
3. *If this is your first time using that email with FormSubmit:* You will need to check the inbox for `Drakash625@gmail.com`. You will find an email from FormSubmit asking you to activate the forms. **Click "Activate form".**
4. Once activated, any further submissions from the website will drop perfectly into your inbox containing the table of the user's booking information.

---

## 📂 Project File Structure
```text
akash/
│
├── index.html     # The main webpage containing semantic structure, section IDs, and form.
├── style.css      # Custom styling, CSS variables, glassmorphism utilities, and keyframe animations.
└── script.js      # Intersection Observers for fade-ins/counters, Popup logic, and AJAX form submission handling.
```

## 👨‍💻 Developed By
**Vaibhav Pratap Singh**  
(See footer for social integrations)
