$(document).ready(function() {

	/**
	 * 获取屏幕的实际宽度和高度
	 
	var viewportwidth;
	var viewportheight;
	 
	 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	 
	 if (typeof window.innerWidth != 'undefined')
	 {
		  viewportwidth = window.innerWidth,
		  viewportheight = window.innerHeight
	 }
	 
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

	 else if (typeof document.documentElement != 'undefined'
		 && typeof document.documentElement.clientWidth !=
		 'undefined' && document.documentElement.clientWidth != 0)
	 {
		   viewportwidth = document.documentElement.clientWidth,
		   viewportheight = document.documentElement.clientHeight
	 }
	 **/
	var viewportwidth = $(window).width();
	var viewportheight = $(window).height();
	 
	/**
	 * 390px为缩略图的宽度，80px为缩略图的高度和menu高度之和，30px为menu的高度
	 **/
	var OFFVERTICAL = 80, OFFHORIZONTAL = 390, MENU = 30, IsAbout = false, IsContact = false, IsCategory = false;
	var CATEGORY = ['Wedding day', 'Pre-wedding', 'Oversea Wedding', 'Baby', 'Landscape', 'City Snap', 'Travel Portraits', 'Commercial', 'Portraits'];
	var CATEGORY_PIC = [{category:0, url:'assets/img/bg22.png'},{category:1, url:'assets/img/bg3.jpg'}];
	var CATEGORY_INDEX = 0;//category hover的高亮当前是第几个
	var THUMBNAIL_INDEX = 0;//缩略图 hover的高亮当前是第几个
	var THUMBNAIL_OFF = 0;//缩略图向右偏移的个数
	var THUMBNAIL_NUM = 0;//缩略图的个数
	var SMALL_PICS = [0, 45, 90, 135, 180, 225, 270, 315];
	
	var my_len = 0;//缩略图的总宽度
	var big_len = 0;//背景图的总宽度
	var cur_len = 1600;//当前背景图的总宽度
	/**
	 * 初始化相关页面节点属性（如高度\宽度\分类\图片信息等。。。）
	 **/
	$('#Bg_Wrapper').attr('style','width:' + viewportwidth + 'px;height:' + viewportheight + 'px;');
	$('#Mask').attr('style','width:' + viewportwidth + 'px;height:' + viewportheight + 'px;');
	$('#J_Pop').height(viewportheight-MENU-1);
	$('#Thumbnail').draggable({ containment: [0, 0, viewportwidth-OFFHORIZONTAL, viewportheight-OFFVERTICAL], cancel:'.move_cancle' });
	//添加category的menu dom节点 && 计算每一个hover的高度
	var CATEGORY_LEN = new Array();
	for(var loop = 0, len = CATEGORY.length; loop < len; loop++){
		$('#CategoryMenu > ul').append('<li>'+CATEGORY[loop]+'</li>');
		CATEGORY_LEN.push(5+32*loop);
	}
	$('#J_Big_Hover').css('top',CATEGORY_LEN[0]);
	
	THUMBNAIL_NUM = $('#Tumbnail_Con >li').length;
	/**
	 * 给Category添加监听事件
	 **/
	$('#Category').click(function(ev) {
		ev.preventDefault();
		if(!IsCategory){
			IsCategory = true;
			$(this).addClass('highlight');
			$('#CategoryMenu').toggle( 'slide', {direction:'down'}, 500);
		}else{
			IsCategory =false;
			$(this).removeClass('highlight');
			$('#CategoryMenu').toggle( 'slide', {direction:'down'}, 500);
		}
	});
	

	/**
	 * 给About添加监听事件
	 **/
	$('#About').click(function(ev) {
		ev.preventDefault();
		if(!IsAbout  && !IsContact){
			IsAbout = true;
			$('#About').addClass('highlight');
			$('#J_Pop').toggle( 'slide', {direction:'up'}, 500,function(){
				$('#J_Pop_About').fadeTo(500, 1);	
			});
		}else if(!IsAbout && IsContact){//进入about和contact的切换流程
			IsAbout = true;
			IsContact = false;
			$('#About').addClass('highlight');
			$('#Contact').removeClass('highlight');
			$('#J_Pop_Contact').fadeTo(500, 0 ,function(){
				$('#J_Pop_About').fadeTo(500, 1);
				$(this).css('display','none');
			});
			
			
		}else{
			IsAbout = false;
			$('#About').removeClass('highlight');
			$('#J_Pop_About').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
				$(this).css('display','none');
			});
			
		}
	});
	
	/**
	 * 给Contact添加监听事件
	 **/
	$('#Contact').click(function(ev) {
		ev.preventDefault();
		if(!IsContact && !IsAbout){
			IsContact = true;
			$('#Contact').addClass('highlight');
			$('#J_Pop').toggle( 'slide', {direction:'up'}, 500,function(){
				$('#J_Pop_Contact').fadeTo(500, 1);	
			});
		}else if(!IsContact && IsAbout){//进入contact和about的切换流程
			IsContact = true;
			IsAbout = false;
			$('#Contact').addClass('highlight');
			$('#About').removeClass('highlight');
			$('#J_Pop_About').fadeTo(500, 0 ,function(){
				$('#J_Pop_Contact').fadeTo(500, 1);
				$(this).css('display','none');
			});
		}else{
			IsContact = false;
			$('#Contact').removeClass('highlight');
			$('#J_Pop_Contact').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
				$(this).css('display','none');
			});
		}
		
	});
	
	/**
	 * 给关闭按钮添加关闭事件
	 **/
	$('#J_Pop_Close').click(function(ev) {
		ev.preventDefault();
		if(IsAbout){
			$('#About').removeClass('highlight');
			$('#J_Pop_About').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
				$(this).css('display','none');
			});
		}
		if(IsContact){
			$('#Contact').removeClass('highlight');
			$('#J_Pop_Contact').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
				$(this).css('display','none');
			});
		}
		IsAbout = false;
		IsContact = false;
		
	});
	
	/**
	 * 给category的menu做滑动效果
	 **/
	$('#CategoryMenu > ul > li').mouseenter(function(){
		var current_top = CATEGORY_LEN[$(this).prevAll().length];
		$('#J_Big_Hover').clearQueue();
		$('#J_Big_Hover').animate({top: current_top}, 800,function(){
			
		});
	});
	
	/**
	 * 给category的menu做事件监听
	 **/
	$('#CategoryMenu').mouseleave(function(ev){
		ev.preventDefault();
		var current_top = CATEGORY_LEN[CATEGORY_INDEX];
		$('#J_Big_Hover').clearQueue();
		$('#J_Big_Hover').animate({top: current_top}, 800,function(){
		
		});
		
	});
	
	$('#CategoryMenu > ul > li').click(function(ev){
		ev.preventDefault();
		CATEGORY_INDEX = $(this).prevAll().length;
		//这里用来添加切换图片文件夹的功能
		
	});
	 
	/**
	 * 给小图做滑动效果和大图标滑动效果
	**/
	 //首先要计算所有的图片的宽度,并且初始化thumbnail相关信息

	$('#Tumbnail_Con > li').each(function(index) {
		my_len += $(this).outerWidth(true);
	});
	
	$('#Tumbnail_Con').css('width', my_len);
	
	//计算背景总宽度
	function CalculateBg(){
		big_len = 0;
		$('#Bg > li').each(function(index) {
			big_len += $(this).outerWidth(true);
		});
		$('#Bg').css('width', big_len);
	}

	$('#Thumbnail_Right').click(function(ev){
		ev.preventDefault();
		var flag = false;
		if(THUMBNAIL_OFF < (THUMBNAIL_NUM-8)){
				++THUMBNAIL_OFF;
				flag = true;
		}
		$('#Thumbnail_Wrapper').animate({'scrollLeft': '+=45'}, 400, function(){
			//preload(CATEGORY_PIC[0].url);
			//$('#Bg_Wrapper').animate({'scrollLeft': '+='+cur_len}, 1000, function(){});	
		});
		if(flag){
			$('#J_Small_Hover').animate({'left': '-=45'}, 500,function(){});
		}
	});
	$('#Thumbnail_Left').click(function(ev){
		ev.preventDefault();
		var flag = false;
		if(THUMBNAIL_OFF > 0){
				--THUMBNAIL_OFF;
				flag = true;
		}
		$('#Thumbnail_Wrapper').animate({'scrollLeft': '-=45'}, 400, function(){
			//$('#Bg_Wrapper').animate({'scrollLeft': '-='+cur_len}, 1000, function(){});	
		});
		if(flag){
			$('#J_Small_Hover').animate({'left': '+=45'}, 500,function(){});
		}
	});
	
	//缩略图高亮移动
	function tumbnail_move(){
		$('#Tumbnail_Con > li').mouseenter(function(){
			var list = $(this).prevAll().length;
			list = list * 45;
			list = list - $('#Thumbnail_Wrapper').scrollLeft();
			$('#J_Small_Hover').clearQueue();
			$('#J_Small_Hover').animate({left: list}, 500,function(){});
		});
		$('#Tumbnail_Con > li').click(function(){
			THUMBNAIL_INDEX = $(this).prevAll().length;
			//alert(THUMBNAIL_INDEX);
		});
		$('#Tumbnail_Con > li').mouseleave(function(){
			$('#J_Small_Hover').clearQueue();
			$('#J_Small_Hover').animate({left: (THUMBNAIL_INDEX-THUMBNAIL_OFF)*45}, 500,function(){});
		});
	}
	
	//图片下载功能
	function preload(path){
		var w = 0;
		$('#Loader').css('display','block');
		var loader = new Image();
		loader.onload = loadTarget;
		loader.src = path;
		function loadTarget(){
			cur_len = loader.width;
			$('#Bg').append("<li><img src='"+path+"' /></li>");
			$('#Bg').css('width', CalculateBg());
			$('#Loader').css('display','none');
		}
	}
	
	//初始化动作
	tumbnail_move();

});