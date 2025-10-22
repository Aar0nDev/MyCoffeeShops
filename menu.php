<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>EON Coffee Shop - Menu</title>
<link rel="stylesheet" href="style.css" />
<link
href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
rel="stylesheet" />
<script src="https://kit.fontawesome.com/a076d05399.js"
crossorigin="anonymous"></script>
<style>
body {
background-color: #1a1a1a;
color: white;
font-family: 'Poppins', sans-serif;
margin: 0;
padding: 0;
}
/* Header */
header {
background-color: white;
padding: 15px 30px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
header h1 {
color: #1a1a1a;
font-size: 1.8rem;
margin: 0 0 10px;
font-family: 'Pacifico', cursive;
}
nav {

display: flex;
gap: 25px;
}
nav a {
color: #1a1a1a;
text-decoration: none;
font-weight: 500;
font-size: 1rem;
transition: color 0.3s;
}
nav a:hover {
color: #ffb84d;
}
.section-title {
text-align: center;
color: #ffb84d;
margin: 30px 0;
font-size: 2rem;
}
.category-bar {
display: flex;
justify-content: center;
gap: 20px;
margin-bottom: 30px;
flex-wrap: wrap;
}
.category {
background: #262626;
padding: 10px 20px;
border-radius: 20px;
color: #ffb84d;
font-weight: bold;
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
transition: background 0.3s;
}

.category:hover {
background: #ffb84d;
color: #1a1a1a;
}
.menu-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 25px;
padding: 0 50px;
}
.menu-card {
background-color: #262626;
border-radius: 12px;
overflow: hidden;
text-align: center;
box-shadow: 0 4px 10px rgba(255, 184, 77, 0.1);
transition: transform 0.3s ease;
}
.menu-card:hover {
transform: translateY(-5px);
}
.menu-card img {
width: 100%;
height: 200px;
object-fit: cover;
}
.menu-card h3 {
margin: 10px 0 5px;
}
.menu-card p {
color: #ffb84d;
font-weight: bold;
margin: 0 0 10px;
}
.order-btn {
background: #ffb84d;
color: #1a1a1a;

padding: 8px 16px;
border-radius: 20px;
font-weight: bold;
cursor: pointer;
border: none;
margin-bottom: 15px;
transition: background 0.3s;
}
.order-btn:hover {
background: #ffc966;
}
footer {
text-align: center;
padding: 20px;
background: #111;
color: white;
margin-top: 30px;
}
@media (max-width: 900px) {
.menu-grid {
grid-template-columns: repeat(2, 1fr);
padding: 0 20px;
}
}
@media (max-width: 600px) {
.menu-grid {
grid-template-columns: 1fr;
}
}
/* Modal overlay */
.modal-overlay {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
display: none;
justify-content: center;

align-items: center;
z-index: 9999;
transition: opacity 0.2s ease;
}
/* Fade out effect */
.modal-overlay.fade-out {
opacity: 0;
}
/* Modal content */
.modal-content {
background: white;
padding: 25px 30px;
border-radius: 10px;
width: 320px;
max-width: 90%;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
text-align: center;
font-family: 'Poppins', sans-serif;
color: #333;
outline: none;
}
.modal-buttons {
margin-top: 20px;
display: flex;
justify-content: flex-end;
gap: 12px;
}
.modal-buttons button {
padding: 10px 18px;
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 6px;
cursor: pointer;
transition: background-color 0.25s ease, color 0.25s ease;
}
#orderCancel {
background-color: #e0e0e0;
color: #555;

}
#orderCancel:hover {
background-color: #cfcfcf;
}
#orderConfirm {
background-color: #ffb84d;
color: #000;
}
#orderConfirm:hover {
background-color: #e6a834;
}
/* Rotating coffee icon */
.rotating-icon {
animation: rotate360 3s linear infinite;
display: inline-block;
color: #ffb84d;
}
@keyframes rotate360 {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
</style>
</head>
<body>
<?php
// Example PHP: You can add any PHP code here for dynamic content or session handling
?>
<!-- Header -->
<header>
<h1>EON Coffee Shop</h1>
<nav>
<a href="index.php">Home</a>

<a href="menu.php">Menu</a>
<a href="about.php">About Us</a>
<a href="contact.php">Contact</a>
<a href="free-wall.php">Free Wall</a>
</nav>
</header>
<!-- Page Title -->
<section>
<h2 class="section-title">Our Premium Menu</h2>
<!-- Category Bar -->
<div class="category-bar">
<div class="category"><i class="fas fa-mug-hot"></i> Hot Drinks</div>
<div class="category"><i class="fas fa-ice-cube"></i> Cold Drinks</div>
<div class="category"><i class="fas fa-birthday-cake"></i> Pastries</div>
</div>
<!-- Menu Items Grid -->
<div class="menu-grid">
<div class="menu-card">
<img src="https://images.unsplash.com/photo-1510707577719-
ae7c14805e3a?fm=jpg&q=60&w=3000" alt="Espresso" />
<h3>Espresso</h3>
<p>₱180</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">

<img src="https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-
milk-and-ice-cubes-in-glass.jpg?s=612x612&w=0&k=20&c=ZJRnsNhnEwHPvt6-

EsU2dJmNhi2hmdFq-_w56YbR648=" alt="Cold Brew" />
<h3>Cold Brew</h3>
<p>₱210</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">
<img src="https://img.freepik.com/free-photo/view-3d-coffee-cup_23-2151083700.jpg"
alt="Caramel Latte" />
<h3>Caramel Latte</h3>
<p>₱230</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>

<div class="menu-card">

<img src="https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-
sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80" alt="Mocha Frappe" />

<h3>Mocha Frappe</h3>
<p>₱250</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">
<img

src="https://static.vecteezy.com/system/resources/previews/023/010/472/non_2x/the-glass-
of-ice-americano-coffee-in-the-black-background-with-ai-generated-free-photo.jpg" alt="Iced

Americano" />
<h3>Iced Americano</h3>
<p>₱190</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">
<img src="https://images.unsplash.com/photo-1515823064-

d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-
4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8

fDA%3D" alt="Matcha Latte" />
<h3>Matcha Latte</h3>
<p>₱240</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">

<img src="https://images.pexels.com/photos/3892469/pexels-photo-
3892469.jpeg?cs=srgb&dl=pexels-elkady-3892469.jpg&fm=jpg" alt="Croissant" />

<h3>Croissant</h3>
<p>₱90</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
<div class="menu-card">

<img src="https://www.shutterstock.com/image-photo/blueberry-muffins-blueberries-
on-top-600nw-2492319609.jpg" alt="Blueberry Muffin" />

<h3>Blueberry Muffin</h3>
<p>₱120</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>

<div class="menu-card">
<img
src="https://static.vecteezy.com/system/resources/thumbnails/026/349/563/small/indulgent
-chocolate-cake-slice-on-wooden-plate-generated-by-ai-free-photo.jpg" alt="Chocolate Cake"
/>
<h3>Chocolate Cake</h3>
<p>₱150</p>
<button class="order-btn" onclick="processOrder(this)">Order Now</button>
</div>
</div>
</section>
<!-- Footer -->
<footer>
<p>© 2025 EON Coffee Shop | All Rights Reserved</p>
</footer>
<!-- Modal HTML -->

<div id="orderModal" class="modal-overlay" aria-hidden="true" role="dialog" aria-
modal="true" aria-labelledby="modalTitle">

<div class="modal-content" tabindex="-1">
<div class="rotating-icon" aria-hidden="true" style="font-size: 40px; margin-bottom:
15px;">
<svg id="coffeeCup" width="40" height="60" viewBox="0 0 40 60"
xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
<rect x="10" y="10" width="20" height="44" rx="8" ry="8" fill="#b2693f"
stroke="#6e411c" stroke-width="3" />
<rect id="coffeeFill" class="coffee-fill" x="12" y="54" width="16" height="0"
fill="#6e411c" rx="6" ry="6" />
<circle cx="30" cy="32" r="8" stroke="#6e411c" stroke-width="3" fill="none" />
</svg>
</div>
<p id="modalTitle">Are you sure you want to order this coffee?</p>
<div class="modal-buttons">
<button id="orderCancel" type="button">Cancel</button>
<button id="orderConfirm" type="button">Order</button>
</div>
</div>
</div>
<script>
const orderModal = document.getElementById('orderModal');
const orderCancelBtn = document.getElementById('orderCancel');

const orderConfirmBtn = document.getElementById('orderConfirm');
const modalContent = orderModal.querySelector('.modal-content');
const coffeeFill = document.getElementById('coffeeFill');
const coffeeCupRect = document.querySelector('#coffeeCup rect');
let currentOrderButton = null; // To remember which button triggered modal
function processOrder(button) {
currentOrderButton = button;
orderModal.style.display = 'flex';
orderModal.setAttribute('aria-hidden', 'false');
modalContent.focus(); // Focus modal content for accessibility
// Reset coffee fill and button states on modal open
coffeeFill.style.height = '0';
coffeeFill.style.y = '54';
coffeeFill.setAttribute('fill', '#6e411c'); // brown coffee color
coffeeCupRect.setAttribute('fill', '#b2693f'); // original cup brown color
orderConfirmBtn.textContent = 'Order';
orderConfirmBtn.disabled = false;
orderCancelBtn.disabled = false;
}
// Close modal with fade-out effect
function closeModal() {
orderModal.classList.add('fade-out');
orderModal.setAttribute('aria-hidden', 'true');
setTimeout(() => {
orderModal.style.display = 'none';
orderModal.classList.remove('fade-out');
}, 200);
}
orderCancelBtn.addEventListener('click', closeModal);
orderConfirmBtn.addEventListener('click', () => {
// Animate coffee fill rising and cup color change on order confirmation
let fillHeight = 0;
let fillY = 54;
orderConfirmBtn.disabled = true;
orderCancelBtn.disabled = true;
const fillInterval = setInterval(() => {

if (fillHeight >= 40) {
clearInterval(fillInterval);
orderConfirmBtn.textContent = 'Ordered!';
// Change cup color to brighter brown on order success
coffeeCupRect.setAttribute('fill', '#9c5524');
setTimeout(closeModal, 1500);
return;
}
fillHeight += 1;
fillY -= 1;
coffeeFill.style.height = fillHeight + 'px';
coffeeFill.style.y = fillY + 'px';
}, 25);
});
// Close modal when clicking outside modal content
orderModal.addEventListener('click', (e) => {
if (e.target === orderModal) {
closeModal();
}
});
// Accessibility: close modal on ESC key
window.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && orderModal.style.display === 'flex') {
closeModal();
}
});
</script>
</body>
</html>