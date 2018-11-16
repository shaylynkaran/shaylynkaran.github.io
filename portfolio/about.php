<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>About | Shaylyn Karan></title>
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
    <h1>About Me</h1>
    <h2>Introduction</h2>
    <p>My name is Shaylyn Karan. I was born and raised in Seattle, WA. I am currently a junior enrolled at Central Washington University pursuing Information Technology &amp; Administrative Management with a specialization in Project Management. I am an avid learner passionate about new technology and travel. I recently got a 3-month old Shih Tzu puppy named Gucci. He is just as adventurous as I am and a dedicated foodie as well.</p>
    <h2>More About Me</h2>
        <h3>Hobbies?</h3>
            <p>In my spare time I love reading and learning new languages, strategies, or skills. I am currently learning Scrum and Agile methodologies. I also love finding new local eateries to try out for the weekend!</p>
        <h3>Dream Job?</h3>
            <p>Honestly anything in the tech spectrum. If I had to choose if would be either a web devleoper or data anaylst. I love creating things from scratch and presenting meaningful insights. </p>
        <h3>Favorite Travels?</h3>
            <p>My ongoing list includes: San Francisco, Hawaii, and Fiji.</p>
    <p>You can view my social channels and examples of my works with the links below.</p>
</body>


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>