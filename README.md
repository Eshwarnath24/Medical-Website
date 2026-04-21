# 🏥 Medical-Website

![Static Site](https://img.shields.io/badge/Type-Static%20Website-2ea44f)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-0a66c2)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)
![Status](https://img.shields.io/badge/Project-Prototype-orange)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://medical-website-lyart-two.vercel.app/)

## Live Demo

- https://medical-website-lyart-two.vercel.app/

## ✨ About The Project

Medical-Website is a static, multi-page healthcare web application prototype built with vanilla HTML, CSS, and JavaScript.

From the implemented pages and scripts, the project currently supports:

- 👤 User registration, sign-in, profile editing, and forgot-password OTP flow.
- 🏠 A home dashboard with specialty cards, quick navigation cards, and appointment booking entries.
- 💊 Medicine browsing with add-to-cart and quantity update/delete in cart.
- 🧪 Lab test browsing by category and sub-test booking into a separate lab cart.
- 🩺 Doctor listing/filtering (male/female), consultation booking flow, and consultation room screen.
- 💳 Payment screen and OTP confirmation flow for checkout simulation.

## 🧱 Current Architecture

- 🖥️ Frontend only: all pages are static HTML with module-based JavaScript.
- 💾 State persistence: browser localStorage is used for user/session/cart/appointment/payment data.
- 📂 Data source: static JavaScript data files in Datas, main, Medicine, Lab Test, and met doctor folders.
- 🗃️ Database folder: DBMS Tables contains SQL scripts, but there is no active backend integration in this repository.

## 🔄 Implemented User Flow (Code-Based)

1. 🚪 Landing page: App info/appInfo.html
2. 🔐 Account flow: registration/register.html, sign in/sign in .html, forgot password/forgot.html
3. 📱 Main dashboard: main/appScreenPage.html
4. 🛒 Commerce: Medicine/Medicine.html, cart/cart.html, Lab Test/Lab Test.html, Lab Cart/labCart.html
5. 👨‍⚕️ Consultation: met doctor/metDoctor.html, Fill Appointment/appointment.html, Consult room/Consult.html
6. 💵 Payment: payItems/payment.html, payment OTP/otp.html

## 🧠 Storage Model (localStorage Keys)

The code currently uses keys such as:

- UserData
- logedUser
- webName
- doctorId
- doctorPrice
- formList
- totalPrice
- labTestTotalPrice
- Per-user dynamic keys: cart<userId>, appointment<userId>, labCartTest<userId>

## 🛠️ Tech Stack

- 🌐 HTML5
- 🎨 CSS3
- ⚙️ JavaScript (ES modules)
- ⏰ dayjs (CDN) for date/time formatting in cart/payment pages

## 🗂️ Repository Structure

```text
Medical-Website/
  App info/
  cart/
  Consult room/
  Datas/
  DBMS Tables/
  Fill Appointment/
  forgot password/
  Lab Cart/
  Lab Test/
  main/
  Medicine/
  met doctor/
  payItems/
  payment OTP/
  profile/
  registration/
  sign in/
  style/
  vercel.json
```

## ▶️ Run Locally

Because this project uses JavaScript modules, run it through a local static server instead of opening files directly.

Options:

1. VS Code Live Server extension (recommended for this structure).
2. Any static server from project root.

Suggested starting page:

- App info/appInfo.html

## 📌 Notes

- This is a frontend prototype and does not include server-side authentication, payment gateway integration, or a production database connection.
- OTP and payment confirmations are simulated in client-side JavaScript.
