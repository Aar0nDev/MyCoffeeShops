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
// Fetch all messages ordered by newest first
$sql = "SELECT name, message, created_at FROM free_wall_messages ORDER BY created_at
DESC";
$result = $conn->query($sql);
$messages = [];
if ($result && $result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
$messages[] = $row;

}
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Free-wall | EON Coffee Shop</title>
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
}
header h1 {
font-size: 2.5em;
margin: 0;
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
.message-container {
max-width: 800px;
margin: 30px auto;
padding: 30px;
background-color: #fff;

border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.message {
background-color: #ff8c00;
color: white;
padding: 15px;
margin: 10px 0;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
.message p {
margin: 5px 0 0 0;
white-space: pre-wrap;
}
.timestamp {
font-size: 0.8em;
opacity: 0.7;
margin-top: 5px;
font-style: italic;
}
footer {
background-color: #2a2a2a;
color: #fff;
text-align: center;
padding: 15px;
}
</style>
</head>
<body>
<header>
<h1>Welcome to the Free-Wall</h1>
<nav>
<a href="index.php">Home</a>
<a href="free-wall.php">Post Message</a>
</nav>
</header>
<div class="message-container">
<h2>All Messages</h2>
<?php if (count($messages) > 0): ?>
<?php foreach ($messages as $msg): ?>

<div class="message">
<strong><?php echo htmlspecialchars($msg['name'], ENT_QUOTES, 'UTF-8');

?></strong>:

<p><?php echo nl2br(htmlspecialchars($msg['message'], ENT_QUOTES, 'UTF-8'));

?></p>

<div class="timestamp"><?php echo date('F j, Y, g:i a',

strtotime($msg['created_at'])); ?></div>
</div>
<?php endforeach; ?>
<?php else: ?>
<p>No messages posted yet. Be the first to share!</p>
<?php endif; ?>
</div>
<footer>
<p>&copy; <?php echo date('Y'); ?> EON Coffee Shop | All rights reserved.</p>
</footer>
</body>
</html>