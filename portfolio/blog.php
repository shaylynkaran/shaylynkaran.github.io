<?php
    // Define variables used in the HTML header for this page.
    $title = 'Shaylyn Karan | Blog' ;
    $description = 'Blog post for portfolio' ;
    $author = 'Shaylyn Karan' ;

    // Display the header which uses the above variables.
    include 'includes/header.php' ;
?>
<main>
    <h1>Blog</h1>
    <article>
    <h2>Tips for Effective Website Visualiations using Highcharts</h2>
    <p>By Shaylyn Karan on <time datetime="2018-10-28">10/28/18</time></p>
        <div id="content">
            <ol>
                <li>Purpose</li>
                    <p>The first key is to think about the purpose of the visualiazaion. Is the purpose to educate your audience? Then perhaps simply displaying relevant data and letting the numbers speak for themselves could be enough. Maybe you want to influence your audience? For this, you might want to compare data sets and show your audience the "why." Or are you encouraging your audience to take action? The best idea would be to wrap your visualizations with a story that contains clear points and conclusions.</p>
                <li>Audience</li>
                    <p>Your visualizations should be customized to the need, interest, level of expertise on subject matter, and analytical ability. It is important to know your audience so you can tailor your visualizations accordingly.</p>
                <li>Data Ethics</li>
                    <p>Data can easily mislead your audience, intentionally or not, if the data is either unreliable or outdated. It is the responsibility of the person creating the visualizations to make sure the information used or created is reliable for the audience and to make sure nothing comes back to bite you in the butt.</p>
                <li>Representation of Data</li>
                    <p>Now that you have identified your purpose, audience, and message it is important to figure out how to tie in the visuals. This could be creating a chart, dashboard, or infograph. It can be rather tempting to go for a bold and striking visual but be sure to check ambitions against the needs of your audience. Questions to ask yourself: are there any user problems to consider and what devices is the user most likely to view the data.</p>
            </ol>
        </div>

    </article>


<?php
    // Display the footer.
    include 'includes/footer.php' ;
?>