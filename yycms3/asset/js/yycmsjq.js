$(".yycmspf").click(function(){
layer.open({
  type: 1,
  title: false,
  closeBtn: 0,
  shadeClose: true,
  skin: 'yourclass',
        content: '<div class="layui-layer-title" style="cursor: move;">主题颜色</div><div id="color" class="layui-layer-content"><ul class="fed-colo-info fed-part-rows fed-padding fed-back-whits fed-event"><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-black" id="black" onclick="ztys(this)" href="javascript:;">黑色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-golds" id="golds" onclick="ztys(this)" href="javascript:;">黑金</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-colou" id="colou" onclick="ztys(this)" href="javascript:;">彩色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-glass" id="glass" onclick="ztys(this)" href="javascript:;">透明</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-green" id="green" onclick="ztys(this)" href="javascript:;">绿色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-blues" id="blues" onclick="ztys(this)" href="javascript:;">蓝色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-white" id="white" onclick="ztys(this)" href="javascript:;">橙色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-pinks" id="pinks" onclick="ztys(this)" href="javascript:;">粉色</a></li><li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-gules" id="gules" onclick="ztys(this)" href="javascript:;">红色</a></li></ul></div><span class="layui-layer-setwin"><a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a></span><span class="layui-layer-resize"></span>'}); 
});
function ztys(e){var id = e.id;
$.cookie('fed_color', id, { expires: 7 ,path: '/'});layer.msg('皮肤切换成功');location.reload();};
$(".yycmsbfjk").click(function(){$(".yycmsjxjk").toggle();$("#cms_player").hide();});
$(".bflb").click(function(){$("#bflb").show();$("#jqlb").hide();$("#xzlb").hide();
yindex=$("#tabs li").index(this);$("#tabs li").removeClass("fed-text-green").eq(yindex).addClass("fed-text-green");});
$(".jqlb").click(function(){$("#jqlb").show();$("#bflb").hide();$("#xzlb").hide();
yindex=$("#tabs li").index(this);$("#tabs li").removeClass("fed-text-green").eq(yindex).addClass("fed-text-green");});
$(".xzlb").click(function(){$("#xzlb").show();$("#bflb").hide();$("#jqlb").hide();
yindex=$("#tabs li").index(this);$("#tabs li").removeClass("fed-text-green").eq(yindex).addClass("fed-text-green");});
$(".xzxl1").click(function(){$("#actor1").show();$("#actor2").hide();}); 
$(".xzxl2").click(function(){$("#actor2").show();$("#actor1").hide();}); 
$('#tabss li a').click(function(e) {e.preventDefault();yindex=$("#tabss li a").index(this);
$("#tabss li a").removeClass("fed-back-green").eq(yindex).addClass("fed-back-green");
$("#znzdbs div").removeClass("fed-visible");$('#' + $(this).attr('data-toggle')).addClass('fed-visible');});
var dnum = 0
$(".yycmsptkgs").click(function() {
    dnum = dnum + 1;
    if (dnum % 2 != 0) {
	$(".yymcspdkg").addClass("fed-pops-open");
    } else {
	$(".yymcspdkg").removeClass("fed-pops-open");
    }
})
$(".yycms a").click(function(){
var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;  
var vurl = $(this).attr("data-url");
if (w < 767) {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['100%','60%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:vurl
}); 
} else {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['80%','80%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:vurl
}); 
};  
});
$(".ygyycms a").click(function(){
$jx = $('.ygyycms');	
var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;  
var vur1 = $(this).attr("title");
var vur2 = $jx.attr("data-url");
$.ajax({
type: 'POST',
url: ycsq,
data: {'wd': vur1,'yycms': 'ygjx'},
dataType:'json',
cache: false, 
async:true,
success:function(data){
if(data.code=="400"){
layer.msg(data.msg);//此功能需要授权QQ201232694							
}else{
if (w < 767) {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['100%','60%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:vur2+data.msg
}); 
} else {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['80%','80%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:vur2+data.msg
}); 
} 
}	
},
error: function() {
layer.msg('网络连接异常');
}
});
});
$(".yycmszb a").click(function(){//虎牙直播
var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;  
var vurl = $(this).attr("data-url");
var jx = $(".yycmszb").attr("data-jx");
$.ajax({
type: 'POST',
url: ycsq,
data: {'hy_url': vurl,'yycms': 'hyjx'},
dataType:'json',
cache: false, 
async:true,
success:function(data){
if(data.code=="400"){
layer.msg(data.msg);//此功能需要授权QQ201232694							
}else{
if (w < 767) {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['100%','60%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:jx+data.msg
}); 
} else {
layer.open({    
type: 2,    
title: false,    
shadeClose: true, //点击遮罩关闭层   
area:['80%','80%'], 
shade: 0.8,
closeBtn: 2,
shadeClose: true ,
content:jx+data.msg
}); 
} 
}	
},
error: function() {
layer.msg('网络连接异常');
}
});
});
function qwzy(zd){
var xzname = $(".xzname").attr("data-name");
  layer.load();
  setTimeout(function(){
  layer.closeAll('loading');
}, 2000);
	$.ajax({ 
	type: "POST",  
	url:'../sava/qw.php',  
	data: "wd="+xzname+"&yycms=qwzy"+"&laiyuan="+zd, 
	dataType:'json',
    cache: false, 
    async:true,
	success: function(data){ 
	if(data.code == 400){
     layer.msg(data.msg,function(){});				
	}else{
var li = "";
$.each(data.msg, function(index, array) {
li += '<li class="fed-padding fed-col-xs3 fed-col-md2 fed-col-lg1"><a class="fed-btns-info fed-rims-info fed-part-eone btn-play-active" href="javascript:void(0)" id="'+array['id']+'" p_name="'+array['title']+'" target="_self" onclick="bofang(\''+array['url']+'\',\''+array['id']+'\')">'+array['title']+'</a></li>';
});
$("#qwzy"+zd).append(li);
}},
error: function() {
layer.msg('网络连接异常');
}			
});
}
function hqxz(zd){
var xzname = $(".xzname").attr("data-name");
  layer.load();
  setTimeout(function(){
  layer.closeAll('loading');
}, 2000);
	$.ajax({ 
	type: "POST",  
	url:ycsq,  
	data: "wd="+xzname+"&yycms=hqxz"+"&laiyuan="+zd, 
	dataType:'json',
    cache: false, 
    async:true,
	success: function(data){ 
	if(data.code == 400){
     layer.msg(data.msg,function(){});//此功能需要授权QQ201232694					
	}else{
var li = "";
$.each(data.msg, function(index, array) {
li += '<li class="fed-padding fed-col-xs4 fed-col-md2"><a class="fed-btns-info fed-rims-info fed-part-eone" href="'+array['url']+'">'+array['title']+'</a></li>';
});
$("#ysxz"+zd).append(li);
	}},
error: function() {
layer.msg('网络连接异常');
}			
});
}
$(".yycmsdh").click(function(){$(".yycmsdhpd").toggle();})
$(function(){$(document).not($(".fed-menu-info12")).click(function(){$(".yycmsdhpd").hide();})
$(".fed-menu-info").click(function(event){event.stopPropagation();})})

$(".yycmsrm").click(function(){$(".yycmsrmss").toggle();})
$(function(){$(document).not($(".fed-navs-form12")).click(function(){$(".yycmsrmss").hide();})
$(".fed-navs-form").click(function(event){event.stopPropagation();})})

$(".yycmsgklskg").click(function(){$(".yycmsgkls").toggle();})
$(function(){$(document).not($(".fed-navs-right12")).click(function(){$(".yycmsgkls").hide();})
$(".fed-navs-right").click(function(event){event.stopPropagation();})})

$(".yycmswd").click(function(){$(".yycmswdkg").toggle();})
$(function(){$(document).not($(".fed-navs-right12")).click(function(){$(".yycmswdkg").hide();})
$(".fed-navs-right").click(function(event){event.stopPropagation();})})
$('#lytj').click(function(){
	if ($('#gbook_content').val()  == '') { layer.msg('请输入留言内容！'); $("#gbook_content").focus(); return false; }
			$.ajax({
				cache: false,
				async: false,
				type: "post",
				url: "./sava/action.php",
				dataType: "json",
				data: $('#form1').serialize(),
			     success: function (r) {
					if(r.code==200){
					layer.msg('留言成功');		
					window.location.reload();
					}else{
					 layer.msg(r.msg);
					}
				},
			});
		});
$('.favorite').click(function(){
	if($.cookie("user_name") == null){ 
	//layer.msg(varstr1);
	layer.tips('请登录账号', '.favorite', {
    tips: [3, '#78BA32']
    });	
	return false;
   }
   $.ajax({
	url: "/sava/action.php",
	type: "post",
	dataType: "json",
	data : {
    sc_user :$.cookie('user_name'),					
　　sc_name :$('.xzname').attr("data-name"),
　　sc_url :$('.xzname').attr("data-link"),
    yycms : 'scyp',									
　　},
	success: function (r) {
	layer.tips(r.msg, '.favorite', {
    tips: [3, '#78BA32']
     });
	},
	});	
   });
 $('#fxsp').click(function(){//用户后台推广链接
    var clipboard = new Clipboard('.fxsp',{ 
       text: function(trigger) { 
		  layer.msg('复制视频链接成功');
          return trigger.getAttribute('data-url'); 
       }
    });
}); 
$(".sskgm").click(function(){
  $(".yycmsssk").hide();
});
$(".fed-icon-lishi").click(function(){
  $(".yycmsgkls").toggle();
});
$(".sskxs").click(function(){
  $(".yycmsssk").show();
});	