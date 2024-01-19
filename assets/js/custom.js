// $(document).ready(function () {
// 	"use strict";

// 	// 1. Scroll To Top
// 	$(window).on('scroll', function () {
// 		if ($(this).scrollTop() > 600) {
// 			$('.return-to-top').fadeIn();
// 		} else {
// 			$('.return-to-top').fadeOut();
// 		}
// 	});
// 	$('.return-to-top').on('click', function () {
// 		$('html, body').animate({
// 			scrollTop: 0
// 		}, 1500);
// 		return false;
// 	});


// 	// 2. slick carousel
// 	$(".testimonial-carousel").slick({
// 		infinite: true,
// 		centerMode: true,
// 		autoplay: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 3,
// 		autoplaySpeed: 1500,
// 		// the magic
// 		responsive: [
// 			{

// 				breakpoint: 1440,
// 				settings: {
// 					slidesToShow: 3
// 				}

// 			},
// 			{

// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 2,

// 				}

// 			},
// 			{

// 				breakpoint: 991,
// 				settings: {
// 					slidesToShow: 2,
// 					centerMode: false,
// 				}

// 			},
// 			{

// 				breakpoint: 767,
// 				settings: {
// 					slidesToShow: 1,
// 				}

// 			}
// 		]
// 	});



// 	// 3. welcome animation support

// 	$(window).load(function () {
// 		$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
// 		$(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({ 'opacity': '0' });
// 	});

// 	$(window).load(function () {
// 		$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({ 'opacity': '0' });
// 		$(".welcome-hero-serch-box").addClass("animated fadeInDown").css({ 'opacity': '0' });
// 	});

// 	// 4. feather icon

// 	feather.replace();

// 	// 5. counter
// 	$(window).on('load', function () {
// 		$('.counter').counterUp({
// 			delay: 10,
// 			time: 3000
// 		});
// 	});

// 	// Dialog
// 	$(document).ready(function () {
// 		const modal = $("#modal");
// 		const openModal = $(".open-modal");

// 		openModal.on('click', function () {
// 			modal.modal('show');
// 		});
// 	});

// });

// // let slideIndex = 1;
// // showSlides(slideIndex);

// // // Next/previous controls
// // function plusSlides(n) {
// // 	showSlides(slideIndex += n);
// // }

// // // Thumbnail image controls
// // function currentSlide(n) {
// // 	showSlides(slideIndex = n);
// // }

// // function showSlides(n) {
// // 	let slides = $(".mySlides");
// // 	let dots = $(".dot");

// // 	if (n > slides.length) {
// // 		slideIndex = 1;
// // 	}
// // 	if (n < 1) {
// // 		slideIndex = slides.length;
// // 	}

// // 	slides.css("display", "none");
// // 	dots.removeClass("active");

// // 	slides.eq(slideIndex - 1).css("display", "block");
// // 	dots.eq(slideIndex - 1).addClass("active");
// // }


document.addEventListener('DOMContentLoaded', function () {
	"use strict";

	// 1. Scroll To Top
	window.addEventListener('scroll', function () {
		var returnToTop = document.querySelector('.return-to-top');
		if (window.scrollY > 600) {
			returnToTop.style.display = 'block';
		} else {
			returnToTop.style.display = 'none';
		}
	});

	var returnToTopButton = document.querySelector('.return-to-top');
	returnToTopButton.addEventListener('click', function () {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	});

	// 2. slick carousel
	var testimonialCarousel = document.querySelector('.testimonial-carousel');
	if (testimonialCarousel) {
		new Glide(testimonialCarousel, {
			type: 'carousel',
			perView: 5,
			autoplay: 1500,
			breakpoints: {
				1440: { perView: 3 },
				1024: { perView: 2 },
				991: { perView: 2, focusAt: 'center' },
				767: { perView: 1 }
			}
		}).mount();
	}

	// 3. welcome animation support
	window.addEventListener('load', function () {
		var welcomeHeroText = document.querySelectorAll('.welcome-hero-txt h2, .welcome-hero-txt p');
		var welcomeHeroSearchBox = document.querySelector('.welcome-hero-serch-box');

		welcomeHeroText.forEach(function (element) {
			element.classList.remove('animated', 'fadeInUp');
			element.style.opacity = '0';
		});

		welcomeHeroSearchBox.classList.remove('animated', 'fadeInDown');
		welcomeHeroSearchBox.style.opacity = '0';
	});

	window.addEventListener('load', function () {
		var welcomeHeroText = document.querySelectorAll('.welcome-hero-txt h2, .welcome-hero-txt p');
		var welcomeHeroSearchBox = document.querySelector('.welcome-hero-serch-box');

		welcomeHeroText.forEach(function (element) {
			element.classList.add('animated', 'fadeInUp');
			element.style.opacity = '0';
		});

		welcomeHeroSearchBox.classList.add('animated', 'fadeInDown');
		welcomeHeroSearchBox.style.opacity = '0';
	});

	// 4. feather icon
	feather.replace();

	// 5. counter
	window.addEventListener('load', function () {
		var counters = document.querySelectorAll('.counter');
		counters.forEach(function (counter) {
			var delay = 10;
			var time = 3000;
			var value = parseInt(counter.innerText);
			var step = value / (time / delay);
			var current = 0;

			var timer = setInterval(function () {
				current += step;
				counter.innerText = Math.round(current);

				if (current >= value) {
					counter.innerText = value;
					clearInterval(timer);
				}
			}, delay);
		});
	});

	// Dialog
	const modal = document.getElementById("carousel-example-generic1");
	const openModal = document.querySelector("button.close-btn.open-btn.open-modal");

	openModal.addEventListener('click', () => {
		modal.showModal();
	})
});