<?php
// Initialize variables for form values and messages
$name = $email = $message = "";
$error = $success = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Sanitize inputs
$name = strip_tags(trim($_POST["name"] ?? ''));
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"] ?? '');
// Validate inputs
if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
$error = "Please fill in all fields with valid information.";
} else {
$to = "aaronmalana88@gmail.com";
$subject = "New Contact Message from $name";
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";
$headers = "From: $name <$email>";
// Try sending email
if (mail($to, $subject, $email_content, $headers)) {
$success = " Thank you for reaching out to us! We'll get back to you shortly.";
// Clear form fields on success
$name = $email = $message = "";
} else {
$error = "Oops! Something went wrong and we couldn't send your message.";
}
}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Contact Us - EON Coffee Shop</title>

<link
href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
rel="stylesheet" />
<script src="https://kit.fontawesome.com/a076d05399.js"
crossorigin="anonymous"></script>
<style>
/* Your original styles here */
body {
margin: 0;
font-family: 'Poppins', sans-serif;
background-color: #1a1a1a;
color: white;
}
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
.contact-hero {
background:
url('https://images.adsttc.com/media/images/632d/9d4a/422f/0701/6e1f/64ae/newsletter/

paisagismo-em-cafeterias-10-projetos-que-integram-o-verde-a-
arquitetura_2.jpg?1663933782') center/cover no-repeat;

height: 300px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-color: rgba(0, 0, 0, 0.5);
background-blend-mode: darken;
}
.contact-hero h2 {
font-size: 2.8rem;
color: #ffb84d;
max-width: 800px;
}
.contact-section {
max-width: 1200px;
margin: auto;
padding: 50px 20px;
display: flex;
gap: 50px;
flex-wrap: wrap;
}
.contact-info {
flex: 1;
}
.contact-info h3 {
color: #ffb84d;
margin-bottom: 15px;
}
.contact-info p {
margin: 8px 0;

font-size: 1.1rem;
}
.social-icons a {
color: white;
font-size: 1.5rem;
margin: 0 10px;
transition: color 0.3s;
}
.social-icons a:hover {
color: #ffb84d;
}
.contact-form {
flex: 1;
background: #262626;
padding: 25px;
border-radius: 12px;
box-shadow: 0 0 15px rgba(255, 184, 77, 0.2);
}
.contact-form h3 {
color: #ffb84d;
margin-bottom: 20px;
}
.contact-form input,
.contact-form textarea {
width: 100%;
padding: 12px;
margin: 8px 0;
border: none;
border-radius: 6px;
background: #1a1a1a;
color: white;
font-size: 1rem;
}
.contact-form input:focus,
.contact-form textarea:focus {
outline: 2px solid #ffb84d;
}

.contact-form button {
background: #ffb84d;
border: none;
padding: 12px 20px;
font-size: 1.1rem;
font-weight: 600;
color: black;
border-radius: 6px;
cursor: pointer;
transition: background 0.3s;
}
.contact-form button:hover {
background: #e6a834;
}
.map-container {
margin-top: 40px;
border-radius: 12px;
overflow: hidden;
box-shadow: 0 0 15px rgba(255, 184, 77, 0.2);
}
footer {
text-align: center;
padding: 20px;
background: #111;
margin-top: 40px;
}
/* Success and error message styling */
.message {
margin-bottom: 20px;
padding: 15px;
border-radius: 8px;
font-weight: 600;
}
.success {
background-color: #4CAF50;
color: white;
}
.error {

background-color: #f44336;
color: white;
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
<a href="free-wall.php">Free Wall</a>
</nav>
</header>
<!-- Hero Section -->
<section class="contact-hero">
<h2>Let’s Brew Up a Conversation</h2>
</section>
<!-- Contact Info & Form -->
<section class="contact-section">
<div class="contact-info">
<h3>Get in Touch</h3>
<p><i class="fas fa-envelope"></i> Email: <a
href="mailto:aaronmalana88@gmail.com"
style="color:#ffb84d;">aaronmalana88@gmail.com</a></p>
<p><i class="fas fa-phone"></i> Phone: +63 912 345 6789</p>
<p><i class="fas fa-map-marker-alt"></i> Location: Purok 3 Mamatid Cabuyao
Laguna</p>
<div class="social-icons">
<a href="#"><i class="fab fa-facebook-f"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
</div>
</div>
<div class="contact-form">
<h3>Send Us a Message</h3>

<!-- Show success or error messages -->
<?php if (!empty($success)): ?>
<div class="message success"><?= htmlspecialchars($success) ?></div>
<?php endif; ?>
<?php if (!empty($error)): ?>
<div class="message error"><?= htmlspecialchars($error) ?></div>
<?php endif; ?>
<form id="contactForm" method="POST" action="contact.php">
<input type="text" name="name" placeholder="Your Name" required value="<?=
htmlspecialchars($name) ?>">
<input type="email" name="email" placeholder="Your Email" required value="<?=
htmlspecialchars($email) ?>">
<textarea name="message" placeholder="Your Message" rows="5" required><?=
htmlspecialchars($message) ?></textarea>
<button type="submit">Send Message</button>
</form>
</div>
</section>
<!-- Map -->
<section class="map-container" style="max-width: 1200px; margin: 40px auto; padding: 0
20px;">
<iframe width="100%" height="350" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.19380526
8935!2d120.98421961535478!3d14.599512980497826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
4f13.1!3m3!1m2!1s0x3397c9c7e1f32cdb%3A0x88f2a21d890d8a8c!2sManila%2C%20Philippi
nes!5e0!3m2!1sen!2sph!4v1691581592000!5m2!1sen!2sph"
allowfullscreen>
</iframe>
</section>
<!-- Footer -->
<footer>
<p>© 2025 EON Coffee Shop | Designed for coffee lovers & dreamers</p>
</footer>
</body>
</html>