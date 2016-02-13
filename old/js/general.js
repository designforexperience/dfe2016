// variables to use globally
// var scrollTimeout;
var lastSlide = -1;		// slide previously in view before last check, initialize to no slide
var currentSlide;
var gaInterval;			// Interval used for timing hits on GA
	
function hitGA (pageName, slideName) {
	//console.log("hitting GA with pageName= "+pageName+" and slideName= "+slideName);
	
	ga('send', 'pageview', {
		'page': pageName,
		'title': slideName}
	);
	
	clearInterval(gaInterval);
	
	lastSlide = currentSlide;
}

$(function () {
	// Binds
	$(document).on('click', '.category-list li', function() {
		var index			= $('.category-list li').index($(this));
		var elem			= $(this);
		var offset			= elem.position();
		var currentWidth	= $('.category-detail').outerWidth(true);
		
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.category-detail').css({
				left	: '-5000px'
			});
			$('.category-detail li').removeClass('visible');
		}
		else {
			$('.category-list li').removeClass('active');
			$(this).addClass('active');
			$('.category-detail li').removeClass('visible');
			$('.category-detail li:eq('+index+')').addClass('visible');
	
			var currentHeight	= $('.category-detail li:eq('+index+')').outerHeight(true);
			$('.category-detail').height(currentHeight);
	
			if (offset.left + currentWidth > $('.categories').width()) {
				// Align from the right to prevent the tooltip from filing out the window
				$('.category-detail').css({
					top		: (offset.top + 290) - currentHeight - 50,
					left	: (offset.left - currentWidth) + elem.outerWidth(true) + 20
				});
				$('.category-detail .arrow').css({
					left	: 'auto',
					right	: (elem.outerWidth() / 2)
				});
			}
			else {
				$('.category-detail').css({
					top		: (offset.top + 290) - currentHeight - 50,
					left	: offset.left,
					right	: 'auto'
				});
				$('.category-detail .arrow').css({
					left	: (elem.outerWidth() / 2)
				});
			}
		}
		return false;
	});
	$(document).on('click', function() {
		if (!$(this).is('.category-list li')) {
			$('.category-detail').css({
				left	: '-5000px'
			});
			$('.category-list li').removeClass('active');
			$('.category-detail li').removeClass('visible');
		}
	});
	$(document).on('click', '.registration-form .close', function() {
		$('.registration-form').hide();
		ga('send', 'event', 'formAction', 'close', 'nomForm');
		return false;
	});
	$(document).on('click', '.email-form .close', function() {
		$('.email-form').hide();
		ga('send', 'event', 'formAction', 'close', 'emailForm');
		return false;
	});
	$(document).on('click', '.intent-form .close', function() {
		$('.intent-form').hide();
		ga('send', 'event', 'formAction', 'close', 'intentForm');
		return false;
	});
	$(document).on('click', '.downloads-form .close', function() {
		$('.downloads-form').hide();
		ga('send', 'event', 'formAction', 'close', 'downloadsForm');
		return false;
	});
	$(document).on('click', '.page-footer .first', function() {
		openShadowForm('recommendation');
		return false;
	});
	$(document).on('click', '.page-footer .second', function() {
		openShadowForm('email');
		return false;
	});
	$(document).on('click', '.open-intent-form', function() {
		openShadowForm('intent');
		return false;
	});
	$(document).on('click', '.open-downloads-form', function() {
		openShadowForm('downloads');
		return false;
	});
	$(document).on('click', '.open-recommendation-form', function() {
		openShadowForm('recommendation');
		return false;
	});
	$(document).on('click', '.judge', function() {
		return false;
	});
	$(document).on('click', '.downloadLink', function(eventObject) {
		eURL = eventObject['target'];
		var hiddenIFrameID = 'hiddenDownloader';
        var iframe = document.getElementById(hiddenIFrameID);
		    if (iframe === null) {
		        iframe = document.createElement('iframe');
		        iframe.id = hiddenIFrameID;
		        iframe.style.display = 'none';
		        document.body.appendChild(iframe);
		    }
		iframe.src = eURL;
		
		var ePath = eURL['pathname'];
		
		ga('send', 'pageview', ePath);
		
		return false;
	});
	
	/*$(window).scroll(function() {
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(checkStickySlide, 1000);
	});*/
	
    $('.curtains').curtain({
        scrollSpeed			: 500,
		curtainLinks		: '.curtain-link',
		controls			: '.sidebar-navigation',
		nextSlide			: checkSlide,
    	prevSlide			: checkSlide
    });

	checkSlide();
});

$(window).ready(function() {
	// instantiate slide 6 accordion panels
	var defaultAccParams = { collapsible: true,
							 active: false, 
							 heightStyle: "content",
							 beforeActivate: function( event, ui ) {
								if ($(ui.newHeader).hasClass('disabled')) {
									return false;
								}
							 }
							};
	
	var disabledAccParams = { active: false,
							  collapsible: true,
							  disabled: true,
							  beforeActivate: function( event, ui ) {
								if ($(ui.newHeader).hasClass('disabled')) {
									return false;
								}
							 }
							};

   	$('#accCategories').accordion(defaultAccParams);
	$('#accCat1').accordion(disabledAccParams);
	$('#accCat2').accordion(disabledAccParams);
	$('#accCat3').accordion(disabledAccParams);
	$('#accCat4').accordion(disabledAccParams);
	$('#accCat5').accordion(disabledAccParams);
	$('#accCat6').accordion(disabledAccParams);
	$('#accCat7').accordion(disabledAccParams);
	$('#accCat8').accordion(disabledAccParams);
	$('#accCat9').accordion(disabledAccParams);
	$('#accCat10').accordion(disabledAccParams);
	$('#accCat11').accordion(disabledAccParams);
	$('#accCat12').accordion(disabledAccParams);
	$('#accCat13').accordion(disabledAccParams);
	$('#accCat14').accordion(disabledAccParams);
	$('#accCat15').accordion(disabledAccParams);
	$('#accCat16').accordion(disabledAccParams);
	$('#accCat17').accordion(disabledAccParams);
	$('#accCat18').accordion(disabledAccParams);
	$('#accCat19').accordion(disabledAccParams);
	$('#accCat20').accordion(disabledAccParams);
	$('#accCat21').accordion(disabledAccParams);
	$('#accCat22').accordion(disabledAccParams);
	$('#accCat23').accordion(disabledAccParams);
	$('#accCat24').accordion(disabledAccParams);
	$('#accCat25').accordion(disabledAccParams);
	
	$('#accBenefits').accordion({	collapsible: false,
							 		active: 0, 
							 		heightStyle: "auto",
							   });
});

$(window).load(function() {
	//console.log('url hash= ' + window.location.hash);
	var locHash = window.location.hash;
	var gaLabel = false;
	
	if (locHash) {
		switch (locHash) {
			case "#app":			// application form
				//console.log("hash = application form");
				gaLabel = 'appForm';
				openAppForm();
				break;
			case "#e":				// email form
				//console.log("hash = email form");
				gaLabel = 'emailForm';
				openShadowForm('email');
				break;
			case "#qi":				// question/intent form
				//console.log("hash = question/intent form");
				gaLabel = 'intentForm';
				openShadowForm('intent');
				break;
			case "#n":				// recommendation form
				//console.log("hash = recommendation form");
				gaLabel = 'nomForm';
				openShadowForm('recommendation');
				break;
			case "#dl":				// downloads form
				//console.log("hash = dl for downloads form");
				gaLabel = 'downloadsForm';
				openShadowForm('downloads');
				break;
			case "#downloads":		// downloads form again
				//console.log("hash = downloads for downloads form");
				gaLabel = 'downloadsForm';
				openShadowForm('downloads');
				break;
			default:
				console.log("URL anchor (" + locHash + ") doesn't correspond to a form");
		}
		
		if (gaLabel) {
			ga('send', 'event', 'formAction', 'urlHashLoad', gaLabel);
		}
	}		
});

function checkSlide() {
	var current				= $('.cover.current');
	var slides				= $('.cover');
	currentSlide			= slides.index(current) > 0 ? slides.index(current) : 0;
	var slideClassOrder		= ['home-slide','benefits-slide','categories-slide','judges-slide','philosophy-slide','apply-slide'];
	
	//console.log("checkSlide :: currentSlide= "+currentSlide+", lastSlide= "+lastSlide);
	
	if (currentSlide !== lastSlide) {
		clearInterval(gaInterval);
		var pageName = '/#'+current.attr('id');
		var slideName = 'Slide ' + (currentSlide+1) + ': '+current.attr('id');
		gaInterval = setInterval( function() {hitGA( pageName, slideName );}, 4000 );
	} else {
		clearInterval(gaInterval); // handles for the case where they move to another slide then right back to the previous one before the interval ends
	}

	if (currentSlide == 0) {
		$('.sidebar-navigation a:eq(0)').addClass('hidden');
	}
	else if (currentSlide == 5) {
		$('.sidebar-navigation a:eq(3)').addClass('hidden');
	}
	else {
		$('.sidebar-navigation a:eq(0)').removeClass('hidden');
		$('.sidebar-navigation a:eq(3)').removeClass('hidden');
	}

	$('.top-bar nav ol li a').removeClass('active');
	$('.top-bar nav ol li:eq('+currentSlide+') a').addClass('active');
	
	$('body').removeClass('home-slide categories-slide philosophy-slide benefits-slide judges-slide apply-slide');
	$('body').addClass(slideClassOrder[currentSlide]);
}

function checkStickySlide() {
	// Check if we will glue to a slide
	var gutterSpace		= 175;
	var scrolltop		= $('body').scrollTop();
	if (scrolltop < $('html').scrollTop()) {
		scrolltop = $('html').scrollTop();
	}
	var totalHeight		= 0;
	
	$('.cover').each(function() {
		var elemTop		= $(this).position().top;
		totalHeight    += $(this).outerHeight(true);		
		
		console.log(totalHeight +' of '+scrolltop);
	
		if (Math.abs(scrolltop - totalHeight) < gutterSpace) {
			$('html, body').stop(true, true, false).animate({
				'scrollTop' : totalHeight
			}, 300);
			return false;
		}
	});
}

function openAppForm() {
	var wWidth			= 635;
	var wHeight			= $(window).height() + 25;
	var wX				= $(window).screenX + 20;
	var wY				= $(window).screenY;
	
	window.open('/apply/application.html', '_blank', "width=" + wWidth + ",height=" + wHeight + ",top=" + wY + ",left=" + wX + "menubar=no,toolbar=no,scrollbars=1");
}

function openShadowForm( sForm ) {
	var fClass;
	var gaPage;
	var gaTitle;
	
	switch (sForm) {
		case "recommendation":
			fClass = '.registration-form';
			gaPage = '/#nomForm';
			gaTitle = 'Nomination Shadow Form';
			//console.log("openShadowForm called on recommendation");
			break;
		case "email":
			fClass = '.email-form';
			gaPage = '/#emailForm';
			gaTitle = 'Email Shadow Form';
			//console.log("openShadowForm called on email");
			break;
		case "intent":
			fClass = '.intent-form';
			gaPage = '/#intentForm';
			gaTitle = 'Intent Shadow Form';
			//console.log("openShadowForm called on intent");
			break;
		case "downloads":
			fClass = '.downloads-form';
			gaPage = '/#downloadsForm';
			gaTitle = 'Downloads Shadow Form';
			console.log("openShadowForm called on downloads");
			break;
		default:
			console.log("openShadowForm called with invalid parameter");
	}
	
	fullSelector = fClass + " .form-wrapper";
	
	$(fullSelector).css({
		'max-height' : $(window).height() - 200
	});
	$(fClass).css({
		'top' : $(window).scrollTop() + 120
	}).show();
	ga('send', 'pageview', {
		'page': gaPage,
		'title': gaTitle
	});
	return false;
}