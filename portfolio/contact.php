<?php
    // Define variables used in the HTML header for this page.
    $title = 'Shaylyn Karan | Contact' ;
    $description = 'Creating a portfolio for final assignment in CSCI 202' ;
    $author = 'Shaylyn Karan' ;

    // Display the header which uses the above variables.
    include 'includes/header.php' ;
?>
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


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>