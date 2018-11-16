<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Shaylyn's Portfolio></title>
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
<body>
	<section id="landing">
		<h1>Welcome to my portfolio!</h1>
	    <img src="img/header.jpg" alt="Personal Header">
	</section>
</body>

<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>
