<?php
// DB connection parameters
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'eon_coffee_shop';
// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$showMessage = false;
$messageHTML = '';
$animationCSS = '';
function generateKeyframes($direction) {
switch ($direction) {
case 'top-left':
return "

@keyframes moveMessage {
0% { transform: translate(0, 0); opacity: 1; }
50% { transform: translate(-150px, -150px); opacity: 0.7; }
100% { transform: translate(-200px, -200px); opacity: 0; }
}";
case 'top-right':
return "
@keyframes moveMessage {
0% { transform: translate(0, 0); opacity: 1; }
50% { transform: translate(150px, -150px); opacity: 0.7; }
100% { transform: translate(200px, -200px); opacity: 0; }
}";
case 'bottom-left':
return "
@keyframes moveMessage {
0% { transform: translate(0, 0); opacity: 1; }
50% { transform: translate(-150px, 150px); opacity: 0.7; }
100% { transform: translate(-200px, 200px); opacity: 0; }
}";
case 'bottom-right':
return "
@keyframes moveMessage {
0% { transform: translate(0, 0); opacity: 1; }
50% { transform: translate(150px, 150px); opacity: 0.7; }
100% { transform: translate(200px, 200px); opacity: 0; }
}";
default:
return "";
}
}
function getRandomDirection() {
$directions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
return $directions[array_rand($directions)];
}
$safeName = '';
$safeMessage = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$name = trim($_POST['name'] ?? '');
$message = trim($_POST['message'] ?? '');
if ($name !== '' && $message !== '') {

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO free_wall_messages (name, message) VALUES (?,
?)");
$stmt->bind_param("ss", $name, $message);
if ($stmt->execute()) {
$showMessage = true;
// Sanitize output for display
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$direction = getRandomDirection();
$animationCSS = generateKeyframes($direction);
$messageHTML = "<div class='message'><strong>{$safeName}</strong>:
<p>{$safeMessage}</p></div>";
} else {
$error = "Error saving message: " . $stmt->error;
}
$stmt->close();
} else {
$error = "Please fill in both fields.";
}
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Free-wall Form | EON Coffee Shop</title>
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
/* Square-shaped floating message */
.message {
position: fixed;
background-color: #ff69b4; /* Pink color */
color: white;
padding: 20px;
border-radius: 8px; /* Rounded corners for square */
width: 200px;
height: auto;
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
text-align: center;
opacity: 0;
animation: moveMessage 6s ease-in-out forwards;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
flex-direction: column;
}
.message p {
margin: 5px 0 0 0;
font-size: 0.9rem;

word-break: break-word;
}
</style>
<?php if ($showMessage) : ?>
<style><?php echo $animationCSS; ?></style>
<?php endif; ?>
</head>
<body>
<header>
<h1>Free-wall Form</h1>
<nav>
<a href="index.php">Home</a>
<a href="messages.php">Messages</a>
</nav>
</header>
<div class="container">
<h2>Post Your Message</h2>
<p>Want to share your thoughts with the world? Leave a message and it will be
displayed on our Free-wall!</p>
<?php if (!empty($error)): ?>
<p style="color:red; font-weight:bold;"><?php echo htmlspecialchars($error); ?></p>
<?php endif; ?>
<form id="freewallForm" method="POST" action="">
<div class="form-group">
<label for="name">Your Name</label>
<input type="text" id="name" name="name" required value="<?php echo
htmlspecialchars($safeName ?? '', ENT_QUOTES); ?>">
</div>
<div class="form-group">
<label for="message">Your Message</label>
<textarea id="message" name="message" rows="4" required><?php echo
htmlspecialchars($safeMessage ?? '', ENT_QUOTES); ?></textarea>
</div>
<div class="form-group">
<input type="submit" value="Post Message">
</div>
</form>
</div>
<?php if ($showMessage): ?>

<?php echo $messageHTML; ?>
<script>
setTimeout(() => {
const messageDiv = document.querySelector('.message');
if (messageDiv) messageDiv.remove();
}, 6000);
</script>
<?php endif; ?>
<footer>
&copy; <?php echo date('Y'); ?> EON Coffee Shop
</footer>
</body>
</html>