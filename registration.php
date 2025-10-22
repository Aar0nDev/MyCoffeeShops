<?php
$showModal = false;
$errors = [];
// Database credentials - update if necessary
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = ""; // default for XAMPP (empty string)
$dbname = "eon_coffee_shop";
// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
// Process form on POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
// Basic validation
$fullName = trim($_POST['fullName'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$experience = trim($_POST['experience'] ?? '');
$specialty = trim($_POST['specialty'] ?? '');
if ($fullName === '') {
$errors[] = "Full Name is required.";
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
$errors[] = "Valid Email is required.";

}
if ($phone === '') {
$errors[] = "Phone Number is required.";
}
if ($experience === '') {
$errors[] = "Experience is required.";
}
if (empty($errors)) {
// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO baristas (full_name, email, phone, experience,
specialty) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $fullName, $email, $phone, $experience, $specialty);
if ($stmt->execute()) {
$showModal = true;
// Clear POST to reset form inputs
$_POST = [];
} else {
if ($conn->errno === 1062) { // Duplicate email error code
$errors[] = "This email is already registered.";
} else {
$errors[] = "Database error: " . $conn->error;
}
}
$stmt->close();
}
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Barista Registration | EON Coffee Shop</title>
<style>
body {
font-family: 'Arial', sans-serif;
margin: 0; padding: 0;
background-color: #f9f9f9;
color: #333;

}
header {
background-color: #2a2a2a;
color: #fff;
padding: 20px 40px;
text-align: center;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
header h1 {
font-size: 2.5em;
margin: 0;
}
nav {
margin-top: 10px;
text-align: center;
}
nav a {
color: #fff;
text-decoration: none;
margin: 0 15px;
font-size: 1.2em;
transition: color 0.3s ease;
}
nav a:hover {
color: #ff8c00;
}
.container {
max-width: 800px;
margin: 30px auto;
background-color: #fff;
padding: 30px;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.form-group {
margin-bottom: 20px;
}
.form-group label {
display: block;
font-size: 1.1em;
margin-bottom: 5px;
color: #333;
}
.form-group input,

.form-group select,
.form-group textarea {
width: 100%;
padding: 12px;
font-size: 1em;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
}
.form-group input[type="submit"] {
background-color: #ff8c00;
color: white;
border: none;
cursor: pointer;
font-size: 1.1em;
transition: background-color 0.3s ease;
}
.form-group input[type="submit"]:hover {
background-color: #e77f00;
}
footer {
background-color: #2a2a2a;
color: #fff;
text-align: center;
padding: 15px;
margin-top: 30px;
}
/* Modal styles */
.modal {
display: none; /* hidden by default */
position: fixed;
z-index: 1;
left: 0; top: 0;
width: 100%; height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);
padding-top: 60px;
}
.modal-content {
background-color: #fff;
margin: 5% auto;
padding: 20px;
border: 1px solid #888;
width: 80%;

max-width: 400px;
border-radius: 10px;
}
.modal-header {
font-size: 1.5em;
margin-bottom: 10px;
color: #333;
}
.modal-body {
margin-bottom: 20px;
color: #333;
}
.modal-footer {
text-align: right;
}
.close {
color: #aaa;
font-size: 28px;
font-weight: bold;
background-color: transparent;
border: none;
cursor: pointer;
}
.close:hover,
.close:focus {
color: #333;
text-decoration: none;
cursor: pointer;
}
.error-list {
background: #ffdddd;
color: #a00;
border: 1px solid #a00;
padding: 10px;
border-radius: 5px;
margin-bottom: 20px;
}
</style>
</head>
<body>
<header>
<h1>Barista Site</h1>

<nav>
<a href="index.php">Home</a>
<a href="menu.php">Menu</a>
<a href="about.php">About Us</a>
<a href="contact.php">Contact</a>
<a href="free-wall.php">Free Wall</a>
</nav>
</header>
<div class="container">
<h2>Barista Registration Form</h2>
<p>Welcome to the EON Coffee Shop team! Please fill out the form below to register as a
Barista.</p>
<?php if (!empty($errors)): ?>
<div class="error-list">
<ul>
<?php foreach($errors as $error): ?>
<li><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></li>
<?php endforeach; ?>
</ul>
</div>
<?php endif; ?>
<form id="registrationForm" action="" method="POST">
<div class="form-group">
<label for="fullName">Full Name</label>
<input type="text" id="fullName" name="fullName" required value="<?php echo
htmlspecialchars($_POST['fullName'] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
</div>
<div class="form-group">
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required value="<?php echo
htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
</div>
<div class="form-group">
<label for="phone">Phone Number</label>
<input type="text" id="phone" name="phone" required value="<?php echo
htmlspecialchars($_POST['phone'] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
</div>
<div class="form-group">

<label for="experience">Years of Experience</label>
<select id="experience" name="experience" required>
<option value="">Select Experience</option>
<option value="0-1" <?php if (($_POST['experience'] ?? '') === '0-1') echo 'selected';
?>>0-1 year</option>
<option value="1-3" <?php if (($_POST['experience'] ?? '') === '1-3') echo 'selected';
?>>1-3 years</option>
<option value="3-5" <?php if (($_POST['experience'] ?? '') === '3-5') echo 'selected';
?>>3-5 years</option>
<option value="5+" <?php if (($_POST['experience'] ?? '') === '5+') echo 'selected';
?>>5+ years</option>
</select>
</div>
<div class="form-group">
<label for="specialty">Specialty (if any)</label>
<textarea id="specialty" name="specialty" rows="4" placeholder="e.g., Espresso, Latte
Art, etc."><?php echo htmlspecialchars($_POST['specialty'] ?? '', ENT_QUOTES, 'UTF-8');
?></textarea>
</div>
<div class="form-group">
<input type="submit" value="Register">
</div>
</form>
</div>
<!-- Modal for Success Message -->
<div id="successModal" class="modal" <?php if($showModal) echo 'style="display:block;"';
?>>
<div class="modal-content">
<div class="modal-header">
<button class="close" onclick="closeModal()">&times;</button>
<h2>Registration Successful!</h2>
</div>
<div class="modal-body">
<p>Thank you for registering with EON Coffee Shop! We will contact you soon.</p>
</div>
<div class="modal-footer">
<button onclick="closeModal()">Close</button>
</div>
</div>
</div>

<footer>
<p>&copy; 2025 EON Coffee Shop | All rights reserved.</p>
</footer>
<script>
function closeModal() {
document.getElementById('successModal').style.display = 'none';
// Reload page to clear POST data and reset form
window.location.href = window.location.href.split('?')[0];
}
</script>
</body>
</html>