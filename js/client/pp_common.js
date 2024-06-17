
// header
function headerStyle(){

	// 공통
	var windowWidth = $(window).outerWidth();
	var windowHeight = $(window).outerHeight();

	$('.bg_dim').click(function(e) {
		e.stopImmediatePropagation();
		$('.content_wrap').removeClass('on');
		$(this).removeClass('on');
		$('.header_wrap').removeClass('on');
		$('.popup-layer').removeClass('on');
		$('.popup-layer').removeClass('of');
		$('.transform_txtwrap').removeClass('on');
		$('.chat-layer').removeClass('on');
		$('.floating_area').show();
	});

}

// 윈도우 resize 시 :
var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {
	// header
	headerStyle();
}

//swiper 메인 메뉴 이동
function swiperSlide1() {

	var swiper = new Swiper('.bizstock_container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoHeight: true,
		pagination: {
			el: '.bizstock_container .pagination',
			clickable : true,
		},
		navigation: {
			nextEl: ".bizstock_container .swiper-button-next",
			prevEl: ".bizstock_container .swiper-button-prev",
		},
		on: {
			slideChange: function() {
				var page = $('.bizstock_container .pagination');
				var pageOn = page.find('.swiper-pagination-bullet-active');
				pageOn.prevAll('span').addClass('on');
				pageOn.nextAll('span').removeClass('on');
			}
		}
	});

	$('.bizstock_container .pagination span:nth-child(1)').html('<i>기업탐방</i>');
	$('.bizstock_container .pagination span:nth-child(2)').html('<i>해외투자</i>');
	$('.bizstock_container .pagination span:nth-child(3)').html('<i>투자자문사</i>');

}

//메인 - 해외투자 첫화면
function swiperSlide1_2() {

	var swiper = new Swiper('.bizstock_container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoHeight: true,
		pagination: {
			el: '.bizstock_container .pagination',
			clickable : true,
		},
		navigation: {
			nextEl: ".bizstock_container .swiper-button-next",
			prevEl: ".bizstock_container .swiper-button-prev",
		},
		on: {
			slideChange: function() {
				var page = $('.bizstock_container .pagination');
				var pageOn = page.find('.swiper-pagination-bullet-active');
				pageOn.prevAll('span').addClass('on');
				pageOn.nextAll('span').removeClass('on');
			}
		},
		initialSlide: 1,
	});

	var pageOn = $('.swiper-pagination-bullet-active');
	pageOn.prevAll('span').addClass('on');

	$('.bizstock_container .pagination span:nth-child(1)').html('<i>기업탐방</i>');
	$('.bizstock_container .pagination span:nth-child(2)').html('<i>해외투자</i>');
	$('.bizstock_container .pagination span:nth-child(3)').html('<i>투자자문사</i>');

}

//메인 - 투자자문 첫화면
function swiperSlide1_3() {

	var swiper = new Swiper('.bizstock_container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoHeight: true,
		pagination: {
			el: '.bizstock_container .pagination',
			clickable : true,
		},
		navigation: {
			nextEl: ".bizstock_container .swiper-button-next",
			prevEl: ".bizstock_container .swiper-button-prev",
		},
		on: {
			slideChange: function() {
				var page = $('.bizstock_container .pagination');
				var pageOn = page.find('.swiper-pagination-bullet-active');
				pageOn.prevAll('span').addClass('on');
				pageOn.nextAll('span').removeClass('on');
			}
		},
		initialSlide: 2,
	});

	var pageOn = $('.swiper-pagination-bullet-active');
	pageOn.prevAll('span').addClass('on');

	$('.bizstock_container .pagination span:nth-child(1)').html('<i>기업탐방</i>');
	$('.bizstock_container .pagination span:nth-child(2)').html('<i>해외투자</i>');
	$('.bizstock_container .pagination span:nth-child(3)').html('<i>투자자문사</i>');

}

//swiper 리포트 미리보기
function swiperSlide2() {

	var swiper = new Swiper('.report_container', {
		slidesPerView: 1,
		spaceBetween: 15,
		loop: false,
		pagination: {
			el: '.report_container .pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: ".report_container .swiper-button-next",
			prevEl: ".report_container .swiper-button-prev",
		},
	});

}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.accordion_js').each(function(){
		var acd_list = $(this).find('.acd_list_js');

		$('.acd_cnt_js').hide();

		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		acd_list.filter('.on').next('.acd_cnt_js').show();

		acd_list.on('click',function(){
			var thisList = $(this);
			var thisCnt = thisList.next('.acd_cnt_js');
			var notThisList = acd_list.not(thisList);
			var notThisCnt = notThisList.next();

			if(notThisList){
				notThisList.removeClass('on');
				notThisCnt.slideUp(300);
			}

			thisList.toggleClass('on');
			thisCnt.stop().slideToggle(300);
		});
	})
}

// 클릭시 클래스 'on' 제어
function toggleOnClick(){
	$('.on_js').on('click',function(){
		$(this).toggleClass('on');
	});
}

// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var target = $(this).children('select'); 
		var targetName = target.children('option:selected').text();
		var label = target.siblings('label');

		target.children('option:selected').attr('selected','selected');
		label.text(targetName);

		target.on('change',function(){
			var thisTarget = $(this).children('select'); 
			var thisTargetName = $(this).children('option:selected').text();
			
			/*target.children('option').removeAttr('selected');*/
			thisTarget.children('option:selected').attr('selected','selected');
			label.text(thisTargetName);
		});
	});
}

// 글자수 표기 1000자 제한
function letterCount1000(){
	var wrapper = $('#letter_count1000');

	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 1000;

		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('댓글은 1000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}	
	});
	wrapper.find('textarea').keyup();
}

// 글자수 표기 2000자 제한
function letterCount2000(){
	var wrapper = $('#letter_count2000');
	
	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 2000;
		
		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('상담 내용은 2000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}	
	});
	wrapper.find('textarea').keyup();
}

// 스크롤 패럴럭스
function setScrollEffect(selector, extra) {
	checkVisibility();
	$(window).on('scroll resize', function() {
		checkVisibility();
	});

	function checkVisibility() {
		$(selector).each(function(){
			var target = $(this);
			var scrollTop = $(document).scrollTop();
			var minShow = target.offset().top - $(window).height() * extra;

			if ( scrollTop >= minShow ){
				target.addClass('on');
			}
		});
	}
}

// 테이블 스크롤 커스텀
function tableScroll() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar("destroy");
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
		}
	}
}

//폰트 크기 변경
function fontProgress() {

	$('.progress').each(function(){
		//구간 클릭
		const progress = $(this);
		const progressBar = progress.find('.progress-bar');
		const spans = progressBar.find('span');
		const textElements = $(this).parents('body').find('.text-show');
		
		const windowWidth = $(window).outerWidth();

		if(windowWidth < 480) {
			const minFontSize = 1.6;
			const maxFontSize = 2.8;
			spans.click(function() {
				const index = $(this).index();
				const fontSize = minFontSize + ((maxFontSize - minFontSize) / (spans.length - 1)) * index;
				const progress = (index / (spans.length - 1)) * 100;
	
				textElements.css('font-size', fontSize + 'rem');
				progressBar.width(progress + '%');
				spans.removeClass('on');
				spans.removeClass('target');
				$(this).addClass('on');
				$(this).addClass('target');
				$(this).prevAll('span').addClass('on');
			});
		}else {
			const minFontSize = 2;
			const maxFontSize = 3.2;
			spans.click(function() {
				const index = $(this).index();
				const fontSize = minFontSize + ((maxFontSize - minFontSize) / (spans.length - 1)) * index;
				const progress = (index / (spans.length - 1)) * 100;
	
				textElements.css('font-size', fontSize + 'rem');
				progressBar.width(progress + '%');
				spans.removeClass('on');
				spans.removeClass('target');
				$(this).addClass('on');
				$(this).addClass('target');
				$(this).prevAll('span').addClass('on');
			});
		}
		
	});
	

	//드래그
	//const progressBar = $('#progress-bar');
	//const progressContainer = $('#progress');
	//const textElement = $('#text-show');
	//let isDragging = false;

	//progressContainer.mousedown(startDrag);
	//progressContainer.mousemove(handleDrag);
	//progressContainer.mouseup(stopDrag);
	//progressContainer.mouseleave(stopDrag);

	//function startDrag(e) {
	//	isDragging = true;
	//	handleDrag(e);
	//}

	//function handleDrag(e) {
	//	if (isDragging) {
	//	const containerWidth = progressContainer.width();
	//	const mouseX = e.pageX - progressContainer.offset().left;
	//	const progress = Math.min(Math.max(mouseX / containerWidth, 0), 1);
	//	updateProgressBar(progress);

	//	const maxFontSize = 32;
	//	const minFontSize = 16;
	//	const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
	//	textElement.css('font-size', fontSize + 'px');
	//	}
	//}

	//function stopDrag() {
	//	isDragging = false;
	//}

	//function updateProgressBar(progress) {
	//	progressBar.width(`${progress * 100}%`);
	//}

}

//리스트 상세 표출
function popupLayer() {
	$('.list-item').click(function() {
		//var htmlToInsert = '<button type="button" class="btn_popupclose">닫기</button>';
		var popup = $(this).siblings('.popup-layer');
		$(this).siblings('.popup-layer').not(popup).removeClass('on');
		$('.content_wrap').addClass('on');
		$('.swiper-container').addClass('ov');
		$(this).parents().find('.bg_dim').addClass('on');
		$(".floating_area").hide();
		popup.addClass('on');
		//$(this).siblings('.popup-layer').before(htmlToInsert);
	});

	$('.list-close').click(function(e) {
		e.stopImmediatePropagation();
		$('.content_wrap').removeClass('on');
		$('.bg_dim').removeClass('on');
		$('.popup-layer').removeClass('on');
	});
}

//오픈채팅 팝업 표출
function chatLayer() {
	$('.chat-item').click(function() {
		var chat = $('.chat-layer');
		chat.addClass('on');
	});
}

//글씨 크기 변경
function transformText() {

	var detail = $('.btn_texttransform').parent().siblings('.transform_txtwrap');

	$('.btn_texttransform').click(function() {
		//$('<div class="bg_dim on"></div>').insertBefore(detail);
		detail.parent('.popup-layer').addClass('of');
		detail.addClass('on');
	});

	$('.transform_txtwrap .btn_round').click(function() {
		//detail.prev('div').remove();
		detail.parent('.popup-layer').removeClass('of');
		detail.removeClass('on');
	});
	
}

//특정태그 높이값 설정
function heightFix() {
	// 특정 태그를 제외한 태그들의 높이 합을 저장할 변수
	var body = $('body').outerHeight(true);
	var scroller = $('.scroll_cnt');
	var dim = $('.bg_dim');
	var minus1 = $('.header_wrap').outerHeight(true);
	var minus2 = $('.scroll_have').outerHeight(true);
	var minus3 = $('.scroll_have2').outerHeight(true);
	var answer0 = body - (minus1);
	var answer1 = body - (minus1 + minus2);
	var answer2 = body - (minus1 + minus2 + minus3);

	scroller.outerHeight(answer0);
	scroller.outerHeight(answer1);
	scroller.outerHeight(answer2);

	var scroller2 = $('.scroll_cnt2');
	var minus2_1 = $('.scroll2_have').outerHeight(true);
	var answer2_1 = body - (minus1 + minus2);
	var answer2_2 = body - (minus1 + minus2 + minus2_1);

	scroller2.outerHeight(answer2_1);
	scroller2.outerHeight(answer2_2);

	var scroller3 = $('.scroll_cnt3');
	var minus3_1 = $('.scroll3_have').outerHeight(true);
	var answer3_1 = body - (minus1 + minus2);
	var answer3_2 = body - (minus1 + minus2 + minus3_1);
	scroller3.outerHeight(answer3_1);
	scroller3.outerHeight(answer3_2);


	dim.css({'top' : 0 - minus1 - minus2 + "px"});
	
}

//채팅내 textarea 높이조절
function textareaHeight() {
	$('.chatinput_box textarea').on('input', function() {
		adjustTextareaHeight($(this));
	});

	$('.chatinput_box textarea').on('keydown', function(e) {
		var chatHeight = $('.chatinput_box').outerHeight(true);
		if (e.keyCode === 13 && e.shiftKey) { // Enter 키를 눌렀을 때 (Shift 키와 조합되지 않은 경우)
			e.preventDefault(); // 기본 동작(개행) 방지
			adjustTextareaHeight($(this));
		}

		$('.scroll_cnt').css('padding-bottom', chatHeight + 10);
	});

	adjustTextareaHeight($('.chatinput_box textarea')); // 초기 높이 설정

	function adjustTextareaHeight($textarea) {
		var text = $textarea.val();

		// 텍스트가 없을 때 초기 높이로 돌아가게 함
		if (text === '') {
			$textarea.css('height', '34px');
			return;
		}

		var lines = text.split('\n').length;
		var lineHeight = parseInt($textarea.css('line-height'));

		// 5줄 이상인 경우 스크롤 생성
		if (lines > 1 && lines < 5) {
			$textarea.css('overflow-y', 'hidden');
			$textarea.css('height', (lines * lineHeight) + 'px');
		} else if (lines >= 5) { // 5줄 이상인 경우 스크롤 생성
			$textarea.css('overflow-y', 'scroll');
			$textarea.css('height', (5 * lineHeight) + 'px');
		} else {
			$textarea.css('overflow-y', 'auto');
			$textarea.css('height', '34px');
		}
	}
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol(){
	$('.check_col_wrapper').each(function(){
		var checkAll = $(this).find('input[name="checkall_col"]');
		var check = $(this).find('input[name="check_col"]');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			check.prop('checked', checkAll.prop('checked'));
		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');

			checkAll.prop('checked',false );

			if(checkSelected.length == checkTotalCnt){
				checkAll.prop('checked',true);
			}
			
		})
	})
}

//알림설정
function alertSetting(){
	$('.alert_setting').each(function(){
		var all = $('.alert_setting .all').siblings('.btn_switch');
		var btn = $('.alert_setting li:not(:first-child)').find('.btn_switch');
		var btnTotal = btn.length;

		all.on('click',function(){
			if($(this).hasClass('on')){
				btn.addClass('on');
			}else {
				btn.removeClass('on');
			}
		})

		btn.on('click',function(){
			var btnSelected =  btn.filter('.on');
				all.removeClass('on');

			if(btnSelected.length == btnTotal){
				all.addClass('on');
			}
			
		})

	});
}

// 페이지에 접속했을 때 실행되는 함수
function onPageLoad() {
	// 접속 기기를 확인합니다.
	var device = detectDevice();

	// 접속 기기에 따라 처리를 수행합니다.
	switch (device) {
		case "android":
		// Android 기기에서만 실행할 코드를 작성합니다.
		//console.log("Android 기기로 접속했습니다.");
		$('body').addClass('android');
		break;

		case "ios":
		// iOS 기기에서만 실행할 코드를 작성합니다.
		//console.log("iOS 기기로 접속했습니다.");
		$('body').addClass('ios');
		break;

		default:
		// PC에서만 실행할 코드를 작성합니다.
		//console.log("PC로 접속했습니다.");
		break;
	}

}

  
// 접속 기기를 확인하는 함수
function detectDevice() {
	// 브라우저의 User-Agent를 확인합니다.
	var userAgent = navigator.userAgent;

	// 접속 기기를 식별합니다.
	if (userAgent.match(/Android/i)) {
		return "android";
	} else if (userAgent.match(/iPhone|iPad|iPod/i)) {
		return "ios";
	} else {
		return "pc";
	}
}

// 프로모션 이벤트 탭 영역으로 이동
function gotoin() {
	$('.goto_js').each(function(){
		var gotoTit = $(this).find('a');

		gotoTit.on('click',function(e){
			e.preventDefault();
			var target = $('.caution_list');
			$('.promotion_page').animate({
				scrollTop: $(target).offset().top
			}, 500);
		})
	})
}

//팝업 사라지기
function eventClose() {
	$('.popup_show').click(function (event) {
		if (!$(event.target).closest(".popup_content").length) {
			$('.popup_show').hide();
		}
	});

	$('.popup_show .btn_negative2').click(function () {
		$('.popup_show').hide();
	});
}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {
	
	// header
	headerStyle();

	//swiper 메인 메뉴 이동
	swiperSlide1();

	//swiper 리포트 미리보기
	swiperSlide2();

	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// accordion
	accordion();
	
	// 클릭시 클래스 'on' 제어
	toggleOnClick();

	// selectbox
	selectBox();

	// 글자수 표기
	letterCount1000();
	letterCount2000();
	
	// 스크롤 패럴럭스
	setScrollEffect('.fadeup', 1.1);
	setScrollEffect('.fadein', 1.1);

	//폰트 크기 변경
	fontProgress();

	//리스트 상세 표출
	popupLayer();

	//오픈채팅 팝업 표출
	chatLayer();

	//글씨 크기 변경
	transformText();

	//특정태그 높이값 설정
	heightFix();

	//체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	//알림설정
	alertSetting();

	$(window).on('load', function () {
		//특정태그 높이값 설정
		heightFix();
	});
	
	$(window).on('resize', function () {
		headerStyle();
		heightFix();
	});

	// select2 설정
	$(".sel_search_row select").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		}
	});

	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});

	$('.opengallery').each(function() {
		var $gallery = $(this);
	
		$gallery.magnificPopup({
			delegate: '.gallery_item',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			gallery: {
				enabled: true
			},
			callbacks: {
				resize: changeImgSize,
				imageLoadComplete: changeImgSize,
				change: changeImgSize
			},
			zoom: {
				enabled: true, // 줌 기능 활성화
				duration: 300, // 줌 인/아웃 애니메이션 지속 시간
				easing: 'ease-in-out', // 줌 애니메이션 이징 설정
				opener: function(element) {
					return element.find('img');
				}
			},
		});
	  });

	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}

	// 페이지에 접속했을 때 실행되는 함수
	onPageLoad();

	// 클릭한 영역으로 이동
	gotoin();

	//팝업 사라지기
	eventClose();

});


$(window).on("load", function () {
	tableScroll();
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
	var style_element = d.createElement('STYLE'),
		dom_events = 'addEventListener' in d,
		add_event_listener = function (type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		set_css = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}');
	});
})(document);


