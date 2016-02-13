<!doctype html>
<html lang="en">
<head>
	<title>Design for Experience Awards</title>
	<meta charset="utf-8">
	<meta property="og:title" content="Design for Experience Awards" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://awards.designforexperience.com" />
	<meta property="og:image" content="http://awards.designforexperience.com/img/dfe-awards-logo-og.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1500" />
	<meta property="og:image:height" content="1500" />
	<meta property="og:description" content="We're excited to kick off this year's Design for Experience (DfE) Awards program, celebrating hte best of experience design, reseearch, strategy, and technology in 2014. This program, operated in partnership with UX Magazine, recognizes people, teams, and companies that have achieved success in the design of user- and customer-centered products or services." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@dfexp" />
	<meta name="twitter:title" content="Design for Experience Awards" />
	<meta name="twitter:description" content="The Design for Experience awards program, presented in partnership with UX Magazine, recognizes people, teams, and companies that achieve success in user- and customer-centered teams, products, or services." />
	<meta name="twitter:image:src" content="http://awards.designforexperience.com/img/dfe-awards-banner-twitter.gif" />
    <meta name="viewport" content="width=1024" />
    <link rel="stylesheet" type="text/css" href="css/screen.css" media="screen, projection">
    <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone-retina.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="touch-icon-ipad-retina.png" />
   	<script src="js/min/modernizr.min.js"></script>
</head>

<body itemscope itemtype="http://schema.org/Organization">
	<meta itemprop="image logo" content="http://awards.designforexperience.com/img/dfe-awards-logo-og.png" />
	<meta itemprop="url" content="http://awards.designforexperience.com" />
	<header class="top-bar">
		<div class="wrapper">
			<a href="#new-awards" class="curtain-link"><h1 itemprop="name">design for experience awards</h1></a>
			<nav>
				<ol>
					<li><a class="curtain-link" href="#new-awards">awards</a></li>
					<li><a class="curtain-link" href="#benefits">benefits</a></li>
					<li><a class="curtain-link" href="#categories">categories</a></li>
					<li><a class="curtain-link" href="#judges">judges</a></li>
					<li><a class="curtain-link" href="#our-philosophy">philosophy</a></li>
					<li><a class="curtain-link" href="#apply">apply</a></li>
					<li><a href="http://awards.designforexperience.com/gallery" target="_blank">2013 gallery</a>
				</ol>
			</nav>
		</div>
	</header>
	
    <?php
		if (isset($this->pageContent)) {
			echo $this->pageContent;
		}
	?>
	
	<footer class="page-footer">
		<div class="wrapper">
			<a class="text-button first" href="#submit-a-recommendation">recommend someone for an award</a>
			<a class="text-button second" href="#subscribe-newsletter">get e-mail updates</a>
			<a class="text-button third curtain-link" href="#apply">apply for an award</a>
		</div>
	</footer>
    
	<script src="js/min/jquery.1.10.2.min.js"></script>
	<script src="js/min/jquery-ui-1.10.3.custom.min.js"></script>
	<script src="js/min/jquery.curtain.min.js"></script>
	<script src="js/min/general.min.js"></script>
	
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		ga('create', 'UA-9439974-4', 'designforexperience.com');
		// ga('send', 'pageview'); // pageview will be handled by checkSlide
	</script>
</body>
</html>