# 🎟️ Movie Seat Booking — Responsive Seat Selector (HTML • CSS • JS)

Select seats, see live counts and total price, and enjoy a clean, responsive UI for a movie theatre layout.  
Live Demo: https://tonmoy-nita.github.io/Movie-seat-booking/

---

## 🧪 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=ffffff&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=ffffff&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000&style=for-the-badge)

---

## 📸 Preview

<p align="center">
  <img src="./assets/screenshot.png" alt="Movie Seat Booking screenshot" width="400" style="max-width:48%; vertical-align:top;">
  <img src="./assets/demo.gif" alt="Seat selection demo" width="400" style="max-width:48%; vertical-align:top;">
</p>

---

## ✨ Features

- Click to select/deselect seats with visual feedback (selected/occupied states)
- Real‑time seat count and total fare calculation
- Movie dropdown to change ticket price
- Fully responsive grid layout for mobile, tablet, and desktop
- Clean, accessible markup with keyboard focus and clear contrasts

---

## 🚀 Live

- GitHub Pages: https://tonmoy-nita.github.io/Movie-seat-booking/

---

## 🗂️ Project Structure

Movie-seat-booking/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
├─ screenshot.png
└─ demo.gif

## 🧭 How It Works (Quick Overview)

- The container holds seat rows; each seat has classes like `seat`, `selected`, `occupied`.
- A click handler on the container uses event delegation to toggle `.selected` on valid seats.
- After each interaction, the script recalculates:
  - Number of selected seats
  - Total cost = selectedCount × current movie price

---

## 🛠️ Setup & Run Locally

     https://github.com/Tonmoy-nita/Movie-seat-booking
