$(document).ready(function(){var s=$(window).width();var h=$(window).height();var c=s/h;var u=1.7777777778;function n(){var J=0,I=0;var i=c/u;if(i>1){J=h*u;I=h;return[J,I]}else{J=s;I=s/u;return[J,I]}}var y=n();var p=80,H=390,o=30,E=false,C=false,q=false;var k=["Wedding day","Pre-wedding","Oversea Wedding","Baby","Landscape","City Snap","Travel Portraits","Commercial","Portraits"];var e=[{category:0,small:"assets/img/small1.png",url:"assets/img/big1.jpg"},{category:0,small:"assets/img/small2.png",url:"assets/img/big2.jpg"},{category:0,small:"assets/img/small3.png",url:"assets/img/big3.jpg"},{category:0,small:"assets/img/small4.png",url:"assets/img/big4.jpg"},{category:0,small:"assets/img/small5.png",url:"assets/img/big5.jpg"},{category:0,small:"assets/img/small6.png",url:"assets/img/big6.jpg"},{category:0,small:"assets/img/small7.png",url:"assets/img/big7.jpg"},{category:0,small:"assets/img/small1.png",url:"assets/img/big8.jpg"},{category:0,small:"assets/img/small2.png",url:"assets/img/big9.jpg"},{category:0,small:"assets/img/small3.png",url:"assets/img/big10.jpg"},{category:0,small:"assets/img/small4.png",url:"assets/img/big11.jpg"}];var a=0;var j=0;var g=0;var m=0;var z=0;var f=new Array();var r=new Array();var a=0;for(var A=0,v=e.length;A<v;A++){if(e[A].category==a){f.push(e[A].url);r.push(e[A].small)}}z=f.length;$("#Bg").attr("style","width:"+s+"px;height:"+h+"px;");$("#J_Pop").height(h-o-1);$("#Thumbnail").draggable({containment:[0,0,s-H,h-p],cancel:".move_cancle"});var l=new Array();for(var D=0,B=k.length;D<B;D++){$("#CategoryMenu > ul").append("<li>"+k[D]+"</li>");l.push(5+32*D)}$("#J_Big_Hover").css("top",l[0]);$("#J_About_Top").css("marginTop",h-660);$("#J_Contact_Top").css("marginTop",h-520);$("#Bg").append("<li style='position:absolute;left:0;top:0;width:"+s+"px; height:"+h+"px; margin:auto; text-align:center;'><img style='width:"+y[0]+"px;height:"+y[1]+"px;' src='"+f[0]+"' /></li>");$("#Category").click(function(i){i.preventDefault();if(E){E=false;$("#About").removeClass("highlight");$("#J_Pop_About").fadeTo(500,0,function(){$(this).css("display","none");$("#J_Pop").toggle("slide",{direction:"up"},500)})}if(C){C=false;$("#Contact").removeClass("highlight");$("#J_Pop_Contact").fadeTo(500,0,function(){$(this).css("display","none");$("#J_Pop").toggle("slide",{direction:"up"},500)})}if(!q){q=true;$(this).addClass("highlight");$("#CategoryMenu").toggle("slide",{direction:"down"},500)}else{q=false;$(this).removeClass("highlight");$("#CategoryMenu").toggle("slide",{direction:"down"},500)}});$("#About").click(function(i){i.preventDefault();if(q){q=false;$("#Category").removeClass("highlight");$("#CategoryMenu").toggle("slide",{direction:"down"},500)}if(!E&&!C){E=true;$("#About").addClass("highlight");$("#J_Pop").toggle("slide",{direction:"up"},500,function(){$("#J_Pop_About").fadeTo(500,1)})}else{if(!E&&C){E=true;C=false;$("#About").addClass("highlight");$("#Contact").removeClass("highlight");$("#J_Pop_Contact").fadeTo(500,0,function(){$("#J_Pop_About").fadeTo(500,1);$(this).css("display","none")})}else{E=false;$("#About").removeClass("highlight");$("#J_Pop_About").fadeTo(500,0,function(){$("#J_Pop").toggle("slide",{direction:"up"},500);$(this).css("display","none")})}}});$("#Contact").click(function(i){i.preventDefault();if(q){q=false;$("#Category").removeClass("highlight");$("#CategoryMenu").toggle("slide",{direction:"down"},500)}if(!C&&!E){C=true;$("#Contact").addClass("highlight");$("#J_Pop").toggle("slide",{direction:"up"},500,function(){$("#J_Pop_Contact").fadeTo(500,1)})}else{if(!C&&E){C=true;E=false;$("#Contact").addClass("highlight");$("#About").removeClass("highlight");$("#J_Pop_About").fadeTo(500,0,function(){$("#J_Pop_Contact").fadeTo(500,1);$(this).css("display","none")})}else{C=false;$("#Contact").removeClass("highlight");$("#J_Pop_Contact").fadeTo(500,0,function(){$("#J_Pop").toggle("slide",{direction:"up"},500);$(this).css("display","none")})}}});$("#J_Pop_Close").click(function(i){i.preventDefault();if(E){$("#About").removeClass("highlight");$("#J_Pop_About").fadeTo(500,0,function(){$("#J_Pop").toggle("slide",{direction:"up"},500);$(this).css("display","none")})}if(C){$("#Contact").removeClass("highlight");$("#J_Pop_Contact").fadeTo(500,0,function(){$("#J_Pop").toggle("slide",{direction:"up"},500);$(this).css("display","none")})}E=false;C=false});$("#CategoryMenu > ul > li").mouseenter(function(){var i=l[$(this).prevAll().length];$("#J_Big_Hover").clearQueue();$("#J_Big_Hover").animate({top:i},800,function(){})});$("#CategoryMenu").mouseleave(function(i){i.preventDefault();var I=l[a];$("#J_Big_Hover").clearQueue();$("#J_Big_Hover").animate({top:I},800,function(){})});$("#CategoryMenu > ul > li").click(function(K){K.preventDefault();var L=a;a=$(this).prevAll().length;if(L==a){}else{j=0;g=0;m=0;z=0;f=null;f=new Array();r=null;r=new Array();for(var i=0,J=e.length;i<J;i++){if(e[i].category==a){f.push(e[i].url);r.push(e[i].small)}}z=f.length;$("#Tumbnail_Con > li").remove();for(var I=0;I<z;I++){$("#Tumbnail_Con").append("<li><img src='"+r[I]+"' /></li>")}$("#Tumbnail_Con").css("width",z*45);$("#J_Small_Hover").animate({left:0},500);w();G()}});for(var b=0;b<z;b++){$("#Tumbnail_Con").append("<li><img src='"+r[b]+"' /></li>")}$("#Tumbnail_Con").css("width",z*45);function x(){$("#Thumbnail_Right").click(function(I){I.preventDefault();var i=false;if(m<(z-8)){++m;i=true}if(i){$("#Thumbnail_Wrapper").animate({scrollLeft:"+=45"},400,function(){});$("#J_Small_Hover").animate({left:"-=45"},500,function(){})}})}function F(){$("#Thumbnail_Left").click(function(I){I.preventDefault();var i=false;if(m>0){--m;i=true}if(i){$("#Thumbnail_Wrapper").animate({scrollLeft:"-=45"},400,function(){});$("#J_Small_Hover").animate({left:"+=45"},500,function(){})}})}function G(){$("#Tumbnail_Con > li").click(function(){g=j;j=$(this).prevAll().length;if(j<g){t(f[j],0)}else{if(j>g){t(f[j],1)}}})}$("#left_btn").click(function(i){i.preventDefault();if(j>0){g=j;--j;$("#J_Small_Hover").animate({left:"-=45"},500);t(f[j],0)}else{}});$("#right_btn").click(function(i){i.preventDefault();if(j<(z-1)){g=j;++j;$("#J_Small_Hover").animate({left:"+=45"},500);t(f[j],1)}else{}});function w(){$("#Tumbnail_Con > li").mouseenter(function(){var i=$(this).prevAll().length;i=i*45;i=i-$("#Thumbnail_Wrapper").scrollLeft();$("#J_Small_Hover").clearQueue();$("#J_Small_Hover").animate({left:i},500,function(){})});$("#Tumbnail_Con > li").mouseleave(function(){$("#J_Small_Hover").clearQueue();$("#J_Small_Hover").animate({left:(j-m)*45},500,function(){})})}function t(K,J){var I=0;$("#Loader").css("display","block");var i=$(new Image());i.attr("src",K);i.load(function(){$("#Loader").css("display","none");if(J==1){$("#Bg").append("<li style='position:absolute; top:0; left:"+s+"px; width:"+s+"px; margin:auto; text-align:center;'><img style='width:"+y[0]+"px;height:"+y[1]+"px;' src='"+K+"' /></li>");$("#Bg > li").first().animate({left:(-s)},800,function(){$(this).remove()});$("#Bg > li").last().animate({left:0},800)}else{$("#Bg").prepend("<li style='position:absolute; top:0; left:-"+s+"px;width:"+s+"px; margin:auto; text-align:center;'><img style='width:"+y[0]+"px;height:"+y[1]+"px;' src='"+K+"' /></li>");$("#Bg > li").first().animate({left:0},800);$("#Bg > li").last().animate({left:s},800,function(){$(this).remove()})}})}x();F();w();G();var d=new Date();if(d.getDay()!=0){alert("hello")}});