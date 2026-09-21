# AutoŁódź — Professional Auto Service Landing Page

A responsive and highly interactive modern landing page for a local auto repair and maintenance service based in Łódź, Poland. Built with a mobile-first approach, focusing on clean architecture, semantic HTML, and dynamic JavaScript logic.

🚀 **Live Demo:** [https://steady-granita-47cf8d.netlify.app](https://steady-granita-47cf8d.netlify.app)

---

## 🛠️ Features & Functionality

* **Dynamic Service Cost Calculator:** An interactive calculator using standard checkbox inputs. It automatically renders chosen services into a digital invoice list, handles real-time total sum calculation, and applies a **10% discount** when 4 or more services are selected.
* **Persistent User State (`localStorage`):** The calculator preserves the user's selected services. If the page is refreshed or reloaded, the user's choices, dynamic pricing, and applied discounts are completely restored.
* **Event Delegation UI:** Users can dynamically remove items straight from the invoice list using `❌` buttons powered by efficient JavaScript event delegation.
* **Custom Touch-Enabled Slider:** A built-in, responsive reviews slider that supports standard desktop navigation buttons as well as mobile **swipe gestures** (`touchstart`/`touchend` coordinates analysis).
* **Interactive Leaflet Map Integration:** A localized map centered on Łódź with custom markers. Features optimized UX configurations (disabled scroll wheel zoom and optimized single-finger mobile dragging) to ensure smooth page scrolling.
* **Responsive & Cross-Browser Layout:** Optimized for desktop, mobile, and tablet viewports (custom CSS grid/flex media queries for 768px-992px break points). Patched for cross-browser consistency across Chromium engines and Mozilla Firefox.

---

## 💻 Tech Stack

* **HTML5:** Semantic markup, data-* attributes.
* **CSS3:** Flexbox, Grid layout, Mobile-First Media Queries.
* **JavaScript (ES6+):** DOM Manipulation, Event Listeners, LocalStorage API, JSON handling.
* **Leaflet.js:** Open-source JavaScript library for mobile-friendly interactive maps.

---

## 🔧 Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/egorozavrus/auto-service-website.git](https://github.com/egorozavrus/auto-service-website.git)
