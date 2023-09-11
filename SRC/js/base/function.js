//tooltips
$('[data-toggle="tooltip"]').tooltip();
$('.toast').toast();


// фиксируем header
function FixHeader() {
	var
		top_pos = 250;

	if($(this).scrollTop() > top_pos) {
		$('.headersticky').addClass('visible');
	} else {
		$('.headersticky').removeClass('visible')
	}
}
$(window).scroll(function () {	FixHeader(); });



// гибкая фотогалерея
$('.flex-images').flexImages({rowHeight: 360});



//закрытие меню при вызове модального окна Регион
$('.info__region').click(function () {
	$('#id_cataloguemenu').modal('hide');
})



//переключение иконок accordion
function toggleIcon(e) {
	$(e.target)
		.prev('.accordion-hdr')
		.find('.i--up')
		.toggleClass('i--down');
}
$('#id_filter').on('hidden.bs.collapse', toggleIcon);
$('#id_filter').on('shown.bs.collapse', toggleIcon);




// слайдер коллажа
$('#id_collage').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000
});

// слайдер категории
$('#id_category-popular').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: false,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

// слайдер товара
$('.productlist__item-pics_slide').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 0,
	arrows: false,
	dots: true,
	infinite: true,
	autoplay: false
});
$('.productlist__item').hover(function() {
	let itemId = '#' + $(this).attr("id");
	$(itemId+' .hoverbar1').hover(function () {
			$(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 0);
		}, function () {}
	);
	$(itemId+' .hoverbar2').hover(function () {
			$(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 1);
		}, function () {}
	);
	$(itemId+' .hoverbar3').hover(function () {
			$(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 2);
		}, function () {}
	);
	$(itemId+' .hoverbar4').hover(function () {
			$(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 3);
		}, function () {}
	);
});


// слайдер популярных товаров
$('#id_productlist-popular').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

// слайдер товаров распродаж
$('#id_productlist-sale').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

// слайдер товаров уцененных
$('#id_productlist-discounted').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

// слайдер наши работы
$('#id_ourwork').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

// слайдер продукта
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	centerPadding: '30px',
	focusOnSelect: true
});

// слайдер товаров уцененных
$('#id_productlist-recommend').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});


// слайдеры фильтров

//длина
$('#id_inputslider-l').slider({
	min: 50,
	max: 800,
	values: [300, 700],
	range: true,
	stop: function(event, ui) {
		$('input#id_inputval-l1').val($(this).slider('values', 0));
		$('input#id_inputval-l2').val($(this).slider('values', 1));
	},
	slide: function(event, ui){
		$('input#id_inputval-l1').val($(this).slider('values', 0));
		$('input#id_inputval-l2').val($(this).slider('values', 1));
	}
});
$('input#id_inputval-l1').change(function(){
	var value1=$(this).val();
	var value2=$('input#id_inputval-l2').val();
	if(parseInt(value1) < 50) {value1 = 50;}
	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$(this).val(value1);
	}
	$('#id_inputslider-l').slider('values', 0, value1);
});
$('input#id_inputval-l2').change(function(){
	var value1=$('input#id_inputval-l1').val();
	var value2=$(this).val();
	if (value2 > 700) {value2 = 700;}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$(this).val(value2);
	}
	$('#id_inputslider-l').slider('values', 1, value2);
});

//ширина
$('#id_inputslider-w').slider({
	min: 50,
	max: 250,
	values: [70, 120],
	range: true,
	stop: function(event, ui) {
		$('input#id_inputval-w1').val($(this).slider('values', 0));
		$('input#id_inputval-w2').val($(this).slider('values', 1));
	},
	slide: function(event, ui){
		$('input#id_inputval-w1').val($(this).slider('values', 0));
		$('input#id_inputval-w2').val($(this).slider('values', 1));
	}
});
$('input#id_inputval-w1').change(function(){
	var value1=$(this).val();
	var value2=$('input#id_inputval-w2').val();
	if(parseInt(value1) < 50) {value1 = 50;}
	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$(this).val(value1);
	}
	$('#id_inputslider-w').slider('values', 0, value1);
});
$('input#id_inputval-w2').change(function(){
	var value1=$('input#id_inputval-w1').val();
	var value2=$(this).val();
	if (value2 > 250) {value2 = 250;}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$(this).val(value2);
	}
	$('#id_inputslider-w').slider('values', 1, value2);
});

//делаем слайдеры тоучабле
$('#id_inputslider-l').draggable();
$('#id_inputslider-w').draggable();

//выставляем слайдеры по популярным размерам
$('.popval_val').click(function() {
	var vall = $(this).data('vall');
	var valw = $(this).data('valw');
	$('#id_inputslider-l').slider('values', [vall, vall]);
	$('input#id_inputval-l1').val(vall);
	$('input#id_inputval-l2').val(vall);
	$('#id_inputslider-w').slider('values', [valw, valw]);
	$('input#id_inputval-w1').val(valw);
	$('input#id_inputval-w2').val(valw);
});

//подключаем спиннеры ко всем цифровым инпутам
//$("input[type='number']").spinner();


// custom
$('#id_cu-glass_images').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: true,
	infinite: true,
	autoplay: false,
	centerMode: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 813,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});


$('#id_cu-profur__isp_images').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay: true,
	responsive: true
});


$('#id_cu-work_images').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: true,
	infinite: true,
	autoplay: false,
	centerMode: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 813,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
			}
		}
	]
});

$('#id_form-slide').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});



// новый фильтр
var vHiddet = 0;
function CollapseToggle() {
	var def_width = $(document).width();
	if (def_width < 753) {
		if (vHiddet == 0) {
			$('.collapse-cf').collapse('hide');
		}
		$('.hdr-cf').attr('data-toggle', 'collapse');
		vHiddet = 1;
	} else {
		$('#id_form-slide').slick('setPosition', 0);
		$('.collapse-cf').collapse('show');
		$('.hdr-cf[data-toggle]').removeAttr('data-toggle');
		vHiddet = 0;
	}
	if (def_width < 576) {
		$('#id_form-slide').slick('unslick');
	} else {
		$('#id_form-slide').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrows: true,
						slidesToShow: 3,
						slidesToScroll: 1
					}
				}
			]
		});
	}
}
CollapseToggle();
$(window).resize(function() {
	CollapseToggle();
});


// если открылся аккордеон фильтра, перегружаем слайдер
$('#id_filter').on('shown.bs.collapse', function () {
	$('#id_form-slide').slick('setPosition', 0);
})


// мультиселекты
$('.tbthfilter_multiselect').multiselect({
	buttonClass: 'multiselect_btn multiselect_btn-default',
	buttonContainer: '<div class="multiselect_btn-group" />',
	numberDisplayed: 1,
	selectAllText: ' выберите все',
	nonSelectedText: 'любое',
	nSelectedText: 'выбрано',
	allSelectedText: 'все выбрано'
});



// выключаем звук на видео
$('.block-video video').prop('muted', true);

// запуск видео по hover
function hoverVideo(e) {
	$('.video__i-play', this).css('opacity', '0');
	$('video', this).get(0).play();
	$('video', this).get(0).setAttribute('controls','controls');
}
function hideVideo(e) {
	$('.video__i-play', this).css('opacity', '0.5');
	$('video', this).get(0).pause();
	$('video', this).get(0).removeAttribute('controls','controls');
}
$('.block-video').hover(hoverVideo, hideVideo);
$('.block-video').on('touchstart', hoverVideo, function (e) {$('video', this).get(0).pause()});













// ниже удалить когда подключаться cookie
$(document).mouseleave(function(e) {
	if (e.clientY < 10) {
		$("#modal_pageclose").modal('show');
	}
});










