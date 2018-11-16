<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Experience | Shaylyn Karan></title>
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
    <h1>Work Experience</h1>
    <h2>KCTS 9, Cascade Public Media</h2>
        <h3>Seattle, WA</h3>
        <p>Executing and developing the Annual Report webpage.</p>
        <p>Technologies used: Highcharts, HTML, CSS, JS.</p>
    <h2>Alaska Airlines/Horizon Air</h2>
        <h3>SeaTac, WA</h3>
        <p>Worked in the Chief Pilot Office and assisted with Flight Operation projects as required. Accumulated and analyzed 6-month cancellation data, created PivotTables and data visualizations to be reported to company executives. Initiated the digitalization of pilot data files.</p>
        <p>Technologies used: Mircosoft Excel.</p>
    <h2>Expedia Group</h2>
        <h3>Bellevue, WA</h3>
        <p>Worked with the Transactional Service Operations team to build an internal metrics dashboard. Dashboard was used to determine response time and gain insights about team performance. The metrics were created using Python scripts and Kibana. Collaborated to design the interface with Flask Bootstrap. Developed real-world work experience while evolving programming skills and exploring the technology related career paths.</p>
        <p>Technologies used: JIRA API, Kibana, Python, HTML, JS.</p>
    <h2>University of Washington, Oceanography Dept.</h2>
        <h3>Seattle, WA</h3>
        <p>Collaborated with University of Washington’s oceanographers on laboratory research. Observed the dissolving shells of pterapods in relation to ocean acidification. Performed various lab research and presented collective data and analysis of fieldwork.</p>
        <p>Technologies used: Microsoft PowerPoint, Google Slides, Google Drawings.</p>
</body>


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>