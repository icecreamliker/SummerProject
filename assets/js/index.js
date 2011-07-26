$(document).ready(function() {
	/**
	 * 获取屏幕的实际宽度和高度
	 **/
	var clientHeight = $(document).height();
	var clientWidth = $(document).width();
	$('#BackgroundImg').attr('style','width:' + clientWidth + 'px;height:' + clientHeight + 'px;');
	/**
	* 162px为缩略图的宽度，72px为缩略图的高度和menu高度之和
	**/
	$( "#Thumbnail" ).draggable({ containment: [0, 0, clientWidth-162, clientHeight-72] });
});