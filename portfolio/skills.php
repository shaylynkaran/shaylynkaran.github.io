<?php
    // Define variables used in the HTML header for this page.
    $title = 'Shaylyn Karan Portfolio' ;
    $description = 'Creating a portfolio for final assignment in CSCI 202' ;
    $author = 'Tom Pollard' ;

    // Display the header which uses the above variables.
    include 'includes/header.php' ;
?>
<main>
    <div id="skills">
        <h1>Skills</h1>
        <i class="fa fa-battery-quarter"></i><h2>Currently Learning</h2>
        <ul>
            <li>MySQL</li>
            <li>ReactJS</li>
        </ul>
        <i class="fa fa-battery-half"></i><h2>Some Experience</h2>
        <ul>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>Bootstrap</li>
        </ul>
        <i class="fa fa-battery-full"></i><h2>Proficient</h2>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>Google Data Studio</li>
        </ul>
    </div>
</main>


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>