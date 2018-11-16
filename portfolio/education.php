<?php
    // Define variables used in the HTML header for this page.
    $title = 'Shaylyn Karan | Education' ;
    $description = 'Creating a portfolio for final assignment in CSCI 202' ;
    $author = 'Shaylyn Karan' ;

    // Display the header which uses the above variables.
    include 'includes/header.php' ;
?>
<body>
    <h1>Education</h1>
        <h2>Central Washington University</h2>
            <h3>Degree</h3>
            <p>Bachelor's of Science in Information Technology and Administrative Management, with a specialization in Project Managment</p>
            <h3>Notable Classes</h3>
            <table>
                <tbody>
                <tr>
                    <th>Subject</th>
                    <th>Class Title</th>
                    <th>Quarter Taken</th>
                </tr>
                <tr>
                    <td>BUSN 210</td>
                    <td>Statistical Analysis</td>
                    <td>SPRING 18</td>
                </tr>
                <tr>
                    <td>CSCI 131</td>
                    <td>Introduction to Python</td>
                    <td>SPRING 17</td>
                </tr>
                <tr>
                    <td>CSCI 142</td>
                    <td>Object-Oriented Programming I with Java</td>
                    <td>FALL 17</td>
                </tr>
                </tbody>
            </table>
            <!-- <ul>
                <li>BUSN 210: Statistical Analysis</li>
                <li>CSCI 131: Introduction to Python</li>
                <li>CSCI 142: Object-Oriented Programming I with Java</li>
            </ul> -->
        <h2>Highline College</h2>
            <h3>Degree</h3>
            <p>Associate of Arts in Computer Science</p>
            <h3>Notable Classes</h3>
            <table>
                <tbody>
                <tr>
                    <th>Class #</th>
                    <th>Class Title</th>
                    <th>Quarter Taken</th>
                </tr>
                <tr>
                    <td>ADMG 271</td>
                    <td>Business Math</td>
                    <td>FALL 18</td>
                </tr>
                <tr>
                    <td>ADMG 374</td>
                    <td>Project Management</td>
                    <td>FALL 18</td>
                </tr>
                <tr>
                    <td>IT 238</td>
                    <td>IT 238: Introduction to Cyberwarfare</td>
                    <td>FALL 18</td>
                </tr>
                </tbody>
            </table>
            <!-- <ul>
                <li>ADMG 271: Business Math</li>
                <li>ADMG 374: Project Management</li>
                <li>IT 238: Introduction to Cyberwarfare</li>
            </ul> -->
</body>


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>