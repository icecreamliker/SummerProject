$(document).ready(function() {
	/**
	 * 获取屏幕的实际宽度和高度
	 **/
	var clientHeight = $(document).height();
	var clientWidth = $(document).width();
	/**
	 * 162px为缩略图的宽度，72px为缩略图的高度和menu高度之和，30px为menu的高度
	 **/
	var OFFVERTICAL = 72, OFFHORIZONTAL = 162, MENU = 30, IsAbout = false, IsContact = false;
	/**
	 * 初始化相关页面节点属性（如高度宽度等。。。）
	 **/
	$('#BackgroundImg').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#Mask').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#J_Pop').height(clientHeight-MENU-1);
	$('#J_Pop').width(clientWidth * 0.4);
	$('#Thumbnail').draggable({ containment: [0, 0, clientWidth-162, clientHeight-OFFVERTICAL] });
	
	/**
	 * 给Category添加监听事件
	 **/
//	$('#Category').mouseenter(function() {
//		alert(1);
//	});
	
	/**
	 * 给About添加监听事件
	 **/
	$('#About').click(function() {
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
			});
			
		}else{
			IsAbout = false;
			$('#About').removeClass('highlight');
			$('#J_Pop_About').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
			});
		}
	});
	
	/**
	 * 给Contact添加监听事件
	 **/
	$('#Contact').click(function() {
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
			});
		}else{
			IsContact = false;
			$('#Contact').removeClass('highlight');
			$('#J_Pop_Contact').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
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
			});
		}
		if(IsContact){
			$('#Contact').removeClass('highlight');
			$('#J_Pop_Contact').fadeTo(500, 0 ,function(){
				$('#J_Pop').toggle('slide', {direction:'up'}, 500);
			});
		}
		IsAbout = false;
		IsContact = false;
		
	});
	
	/**
	 * about和contact显示功能
	 **/
});