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
	
	$('#BackgroundImg').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');

	$('#Thumbnail').draggable({ containment: [0, 0, clientWidth-162, clientHeight-OFFVERTICAL] });
	$('#yaoli').height(clientHeight-MENU-1);
	$('#yaoli').width(clientWidth/2);
	$('#yaoli').effect( 'slide', {direction:'up'}, 1000);
});