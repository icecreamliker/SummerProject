$(document).ready(function() {

	/**
	 * 获取屏幕的实际宽度和高度
	 **/
	var clientHeight = $(document).height();
	var clientWidth = $(document).width();
	
	/**
	 * 390px为缩略图的宽度，80px为缩略图的高度和menu高度之和，30px为menu的高度
	 **/
	var OFFVERTICAL = 80, OFFHORIZONTAL = 390, MENU = 30, IsAbout = false, IsContact = false, IsCategory = false;
	var CATEGORY = ['Wedding day', 'Pre-wedding', 'Oversea Wedding', 'Baby', 'Landscape', 'City Snap', 'Travel Portraits', 'Commercial', 'Portraits'];
	var CATEGORY_INDEX = 0;//category hover的高亮当前是第几个
	var SMALL_PICS = [14, 59, 104, 149, 194, 239, 284, 329];
	/**
	 * 初始化相关页面节点属性（如高度\宽度\分类\图片信息等。。。）
	 **/
	$('#BackgroundImg').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#Mask').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#J_Pop').height(clientHeight-MENU-1);
	$('#Thumbnail').draggable({ containment: [0, 0, clientWidth-OFFHORIZONTAL, clientHeight-OFFVERTICAL], cancel:'.move_cancle' });
	//添加category的menu dom节点 && 计算每一个hover的高度
	var CATEGORY_LEN = new Array();
	for(var loop = 0, len = CATEGORY.length; loop < len; loop++){
		$('#CategoryMenu > ul').append('<li>'+CATEGORY[loop]+'</li>');
		CATEGORY_LEN.push(5+32*loop);
	}
	$('#J_Big_Hover').css('top',CATEGORY_LEN[0]);
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
	 * 给小图做滑动效果
	**/
	 //首先要计算所有的图片的宽度,并且初始化thumbnail相关信息
	var my_len = 0;
	$('#Tumbnail_Con > li').each(function(index) {
		my_len += $(this).outerWidth(true);
	});
	$('#Tumbnail_Con').css('width', my_len);
	//$('#Thumbnail_Wrapper').scrollLeft(45);
	$('#Thumbnail_Right').click(function(){
		$('#Thumbnail_Wrapper').animate({'scrollLeft': '+=45'}, 400, function(){
		
		});
	});
	$('#Thumbnail_Left').click(function(){
		$('#Thumbnail_Wrapper').animate({'scrollLeft': '-=45'}, 400, function(){
			$('#BackgroundImg').toggle('slide', {direction:'right'}, 700);
		});
	});

});