$(document).ready(function() {
	/**
	 * 获取屏幕的实际宽度和高度
	 **/
	var clientHeight = $(document).height();
	var clientWidth = $(document).width();
	/**
	 * 162px为缩略图的宽度，72px为缩略图的高度和menu高度之和，30px为menu的高度
	 **/
	var OFFVERTICAL = 72, OFFHORIZONTAL = 162, MENU = 30;
	/**
	 * 初始化相关页面节点属性（如高度宽度等。。。）
	 **/
	$('#BackgroundImg').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#Mask').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	$('#J_Pop').height(clientHeight-MENU-1);
	$('#J_Pop').width(clientWidth/2);
	$('#Thumbnail').draggable({ containment: [0, 0, clientWidth-162, clientHeight-OFFVERTICAL] });
	$('#J_Pop_About').css('opacity', 0);
	$('#J_Pop_Contact').css('opacity', 0);
	
	/**
	 * 给Category添加监听事件
	 **/
	$('#Category').mouseenter(function() {
		alert(1);
	});
	
	/**
	 * 给About添加监听事件
	 **/
	$('#About').click(function() {
		alert(2);
	});
	
	/**
	 * 给Contact添加监听事件
	 **/
	$('#Contact').click(function() {
		//highlight
		$(this).children('.bg').css('opacity',0.85);
		$('#J_Pop').toggle( 'slide', {direction:'up'}, 1000,function(){
			$('#J_Pop_Contact').fadeTo(800, 1);	
		});
		
	});
	
	/**
	 * about和contact显示功能
	 **/
});