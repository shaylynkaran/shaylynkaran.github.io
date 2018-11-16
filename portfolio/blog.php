<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Blog | Shaylyn Karan></title>
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
<footer>
    <a href="https://github.com/shaylynkaran" class="fa fa-github" style="font-size:36px"></a>
    <a href="https://codepen.io/shaylynkaran/" class="fa fa-codepen" style="font-size:36px"></a>
    <a href="https://linkedin.com/in/shaylynkaran" class="fa fa-linkedin-square" style="font-size:36px"></a>
    <p>&copy; 2018 Shaylyn Karan</p>
</footer>
</body>
</html>