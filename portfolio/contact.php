<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Contact | Shaylyn Karan></title>
    <meta name="description" content="Personal Portfolio">
    <meta name="author" content="Shaylyn Karan">

    <!-- link to external CSS file -->
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
<header class="header">
  <a href="index.php" class="logo">Shaylyn's Portfolio</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>

  <?php include 'includes/nav.php'; ?>
</header>
<main>
    <h1>Contact Me!</h1>
    <p>Use the form below for any inquiries.</p>
    <form action="mailto:shaylynskaran@gmail.com" method="post" enctype="text/plain">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Jane Doe"><br>
    
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" placeholder="janedoe@example.com"><br>
    
    <label for="message">Message: </label>
    <input type="text" id="message" name="comment" placeholder="Insert your message here." size="50"><br><br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
    </form>
</main>
<footer>
    <a href="https://github.com/shaylynkaran" class="fa fa-github" style="font-size:36px"></a>
    <a href="https://codepen.io/shaylynkaran/" class="fa fa-codepen" style="font-size:36px"></a>
    <a href="https://linkedin.com/in/shaylynkaran" class="fa fa-linkedin-square" style="font-size:36px"></a>
    <p>&copy; 2018 Shaylyn Karan</p>
</footer>
</body>
</html>