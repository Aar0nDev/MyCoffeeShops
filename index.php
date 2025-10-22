<?php
session_start();
// Database connection function for reuse
function getDBConnection() {
$conn = new mysqli('localhost', 'root', '', 'eon_coffee_shop');
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
return $conn;
}
$login_message = '';
$register_message = '';
// Handle Logout

if (isset($_GET['action']) && $_GET['action'] === 'logout') {
session_destroy();
header("Location: index.php");
exit;
}
// Handle Login POST
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['form_type']) &&
$_POST['form_type'] === 'login') {
$conn = getDBConnection();
$username = htmlspecialchars($_POST['username']);
$password = $_POST['password'];
$stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows === 1) {
$stmt->bind_result($id, $hashed_password);
$stmt->fetch();
if (password_verify($password, $hashed_password)) {
$_SESSION['user_id'] = $id;
$_SESSION['username'] = $username;
$login_message = "<span style='color:green;'>Login successful!</span>";
} else {
$login_message = "Invalid password.";
}
} else {
$login_message = "User not found.";
}
$conn->close();
}
// Handle Register POST
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['form_type']) &&
$_POST['form_type'] === 'register') {
$conn = getDBConnection();
$username = htmlspecialchars($_POST['username']);

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
// Check if username already exists
$checkStmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
$checkStmt->bind_param("s", $username);
$checkStmt->execute();
$checkStmt->store_result();
if ($checkStmt->num_rows > 0) {
$register_message = "Username already taken.";
} else {
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);
if ($stmt->execute()) {
$register_message = "<span style='color:green;'>Registration successful! You can now
login.</span>";
} else {
$register_message = "Error: " . $stmt->error;
}
}
$checkStmt->close();
$conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>EON Coffee Shop - Home</title>
<link rel="stylesheet" href="style.css" />
<style>
/* Popup modal background */
.modal {
display: none;
position: fixed;
z-index: 1000;
left: 0; top: 0; width: 100%; height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.5);

}
/* Modal content box */
.modal-content {
background: #fff;
margin: 10% auto;
padding: 30px;
border-radius: 8px;
box-shadow: 0 0 15px rgba(0,0,0,0.1);
max-width: 400px;
position: relative;
}
/* Close button */
.close-btn {
position: absolute;
right: 15px;
top: 10px;
font-size: 28px;
font-weight: bold;
color: #5a3e1b;
cursor: pointer;
}
/* Shared form styles (reuse from your login/register styles) */
.modal-content h2 {
text-align: center;
margin-bottom: 25px;
color: #5a3e1b;
}
.modal-content label {
font-weight: bold;
display: block;
margin-top: 15px;
color: #5a3e1b;
}
.modal-content input[type="text"],
.modal-content input[type="password"] {
width: 100%;
padding: 10px;
margin-top: 5px;
border: 1px solid #ccc;

border-radius: 4px;
font-size: 1rem;
}
.modal-content button {
width: 100%;
margin-top: 25px;
padding: 12px;
background-color: #5a3e1b;
border: none;
color: white;
font-size: 1.1rem;
cursor: pointer;
border-radius: 4px;
transition: background-color 0.3s ease;
}
.modal-content button:hover {
background-color: #7a5626;
}
.message {
margin-top: 15px;
text-align: center;
color: #b22222;
}
.message span {
color: green;
}
.message a {
color: #5a3e1b;
text-decoration: underline;
}
/* Responsive */
@media (max-width: 480px) {
.modal-content {
margin: 20% auto;
padding: 20px;
}
}

/* Header button style overrides for logout */
.btn.logout-btn {
background-color: #b22222;
color: white;
border-radius: 4px;
padding: 8px 15px;
text-decoration: none;
font-weight: bold;
}
.btn.logout-btn:hover {
background-color: #7a0000;
}
</style>
</head>
<body>
<!-- Header -->
<header>
<h1>EON Coffee Shop</h1>
<nav>
<a href="index.php">Home</a>
<a href="menu.php">Menu</a>
<a href="about.php">About Us</a>
<a href="contact.php">Contact</a>
<a href="registration.php">Registration</a>
<a href="free-wall.php">Free Wall</a>
<?php if (isset($_SESSION['username'])): ?>
<span style="color:#5a3e1b; font-weight:bold; margin-right:10px;">
Welcome, <?= htmlspecialchars($_SESSION['username']) ?>
</span>
<a href="index.php?action=logout" class="btn logout-btn">Logout</a>
<?php else: ?>
<a href="#" id="loginBtn" class="btn">Login</a>
<a href="#" id="registerBtn" class="btn">Register</a>
<?php endif; ?>
</nav>
</header>
<!-- Hero -->
<div class="hero">
<div>
<h2>Brewing Happiness, One Cup at a Time</h2>

<p>Welcome to EON Coffee Shop — where premium beans meet expert brewing in a
cozy, inviting space.</p>
</div>
</div>
<!-- Features -->
<section>
<h2 class="section-title">Why Choose EON Coffee Shop?</h2>
<div class="features">
<div class="feature">
<img src="https://cdn-icons-png.flaticon.com/128/3219/3219300.png" alt="Fresh
Beans">
<h3>Freshly Roasted Beans</h3>
<p>We source the best coffee beans and roast them to perfection for the ultimate
flavor.</p>
</div>
<div class="feature">
<img src="https://cdn-icons-png.flaticon.com/128/6030/6030438.png"
alt="Barista">
<h3>Expert Baristas</h3>
<p>Our skilled baristas craft every cup with precision and passion.</p>
</div>
<div class="feature">
<img src="https://img.icons8.com/ios-filled/100/ffb84d/coffee-table.png"
alt="Ambience">
<h3>Cozy Ambience</h3>
<p>Relax in our warm and welcoming space, perfect for any occasion.</p>
</div>
</div>
</section>
<!-- Gallery -->
<section>
<h2 class="section-title">Our Café in Pictures</h2>
<div class="gallery">
<img src="https://img.freepik.com/free-photo/view-3d-coffee-cup_23-
2151083700.jpg" alt="Coffee Shop Interior">
<img src="https://media.istockphoto.com/id/1325991061/photo/matcha-latte.jpg"
alt="Coffee Cup">
<img src="https://c4.wallpaperflare.com/wallpaper/88/90/455/beans-coffee.jpg"
alt="Cafe Counter">
<img src="https://t3.ftcdn.net/jpg/07/02/26/64/360_F_702266461.jpg" alt="Cold
Brew">
</div>

</section>
<!-- Call to Action -->
<section class="cta">
<h2>Visit Us Today</h2>
<p>Experience the rich aroma and taste of EON Coffee Shop in person or order online for
quick delivery.</p>
<a href="menu.php" class="btn">Order Now</a>
</section>
<!-- Footer -->
<footer>
<p>© 2025 EON Coffee Shop | All Rights Reserved</p>
</footer>
<!-- Login Modal -->
<div id="loginModal" class="modal">
<div class="modal-content">
<span class="close-btn" id="closeLogin">&times;</span>
<h2>Login</h2>
<form method="post" action="index.php">
<input type="hidden" name="form_type" value="login" />
<label for="login_username">Username:</label>
<input type="text" id="login_username" name="username" required />
<label for="login_password">Password:</label>
<input type="password" id="login_password" name="password" required />
<button type="submit">Login</button>
</form>
<?php if (!empty($login_message)): ?>
<p class="message"><?= $login_message ?></p>
<?php endif; ?>
</div>
</div>
<!-- Register Modal -->
<div id="registerModal" class="modal">
<div class="modal-content">
<span class="close-btn" id="closeRegister">&times;</span>
<h2>Register</h2>
<p style="text-align:center; color:#7a5626; font-style: italic;">Create your account and
join the EON Coffee community!</p>
<form method="post" action="index.php">

<input type="hidden" name="form_type" value="register" />
<label for="register_username">Username:</label>
<input type="text" id="register_username" name="username" required />
<label for="register_password">Password:</label>
<input type="password" id="register_password" name="password" required />
<button type="submit">Register</button>
</form>
<?php if (!empty($register_message)): ?>
<p class="message" style="color: #228B22;"><?= $register_message ?></p>
<?php endif; ?>
</div>
</div>
<script>
// Get modal elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
// Get buttons that open modals
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
// Get <span> elements that close modals
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
// Open login modal
if(loginBtn) {
loginBtn.onclick = function(event) {
event.preventDefault();
loginModal.style.display = 'block';
}
}
// Open register modal
if(registerBtn) {
registerBtn.onclick = function(event) {
event.preventDefault();
registerModal.style.display = 'block';
}
}

// Close login modal
closeLogin.onclick = function() {
loginModal.style.display = 'none';
}
// Close register modal
closeRegister.onclick = function() {
registerModal.style.display = 'none';
}
// Close modals on outside click
window.onclick = function(event) {
if (event.target === loginModal) {
loginModal.style.display = 'none';
}
if (event.target === registerModal) {
registerModal.style.display = 'none';
}
}
// Auto-open login modal if there was a login error message
<?php if (!empty($login_message)): ?>
loginModal.style.display = 'block';
<?php endif; ?>
// Auto-open register modal if there was a register message (error or success)
<?php if (!empty($register_message)): ?>
registerModal.style.display = 'block';
<?php endif; ?>
</script>
</body>
</html>