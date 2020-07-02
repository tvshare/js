var ishttps = 'https:' == document.location.protocol ? true: false;
var ycurl = 'yycms.saonantv.com/ycjk.php';
if(ishttps){
var ycsq = 'https://' + ycurl;
}else{
var ycsq = 'http://' + ycurl;
}
$(".yycms li a").click(function(){
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
$(".ygyycms li a").click(function(){
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
$(".yycmszb li a").click(function(){//虎牙直播
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
	  $("#gggb").click(function(){//播放公告关闭
    $(".ul1").hide();
  });
    $(function(){//公告旋转
        var num=$(".ul1").find("li").length;
        console.log("直接运行"+num);
        if (num>1) {
            setInterval(function(){ 
            $('.ul1').animate({
                marginTop:"-26px"
            },500,function(){
                $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
            });
        }, 3000);
        }
                
    });
$('#fxsp').click(function(){//用户后台推广链接
    var clipboard = new Clipboard('.fxsp',{ 
       text: function(trigger) { 
		  layer.msg('复制视频链接成功');
          return trigger.getAttribute('data-url'); 
       }
    });
}); 
	$(function(){//用户登陆
		$("body").bind('keyup',function(event) {
			if(event.keyCode==13){ $('#btn_submit').click(); }
		});
		$('#btn_submit').click(function() {
			if ($('#user_name').val()  == '') { alert('请输入用户！'); $("#user_name").focus(); return false; }
			if ($('#user_pwd').val()  == '') { alert('请输入密码！'); $("#user_pwd").focus(); return false; }
			$.ajax({
				url: "../sava/action.php",
				type: "post",
				dataType: "json",
				data : {  
　　　　　　　　user_name : $("#user_name").val(),
　　　　　　　　user_pwd : $("#user_pwd").val(),
                yycms : 'login'
　　　　　　},
			    success: function (r) {
					if(r.code==200){
					layer.msg('登陆成功');
						window.location.replace("/user/index.html"); 
					}
					else{
					layer.msg(r.msg);
					}
				},
				complete: function () {
					$("#btn_submit").css("background","#fa4646").val("立即登录");
				}
			});

		});
		$('#btn_submitreg').click(function() {//注册
	if ($('#user_name').val()  == '') { alert('请输入用户！'); $("#user_name").focus(); return false; }
	if ($('#user_pwd').val()  == '') { alert('请输入密码！'); $("#user_pwd").focus(); return false; }
	if ($('#user_pwd2').val()  == '') { alert('请输入确认密码！'); $("#user_pwd").focus(); return false; }
	var username = $("#user_name").val();
	if(username.trim().length < 6){
	alert('用户名不能少于6位');
		return false;
	}
			$.ajax({
				url: "../sava/action.php",
				type: "post",
				dataType: "json",
				data: $('#fm').serialize(),
			success: function (r) {
					if(r.code==200){
						  layer.msg('注册成功');		
						window.location.replace("/user/login.html"); 
					}
					else{
					 layer.msg(r.msg);
					}
				},
				complete: function () {
					$("#btn_submitreg").css("background","#fa4646").val("立即注册");
				}
			});

		});		
	});
		$('.yhsjhy').click(function(){
			var that=$(this);
			var group_login = $('#login').html();
			var group_name = that.attr('data-name');
			var group_id = that.attr('data-id');
			var points = that.attr('data-points');	
			if(confirm('确定要升级到【'+group_name+'】吗,需要花费【'+points+'】积分')) {
				$.ajax({
					url: "../sava/action.php",
					type: "post",
					dataType: "json",
					data: {zh: group_login,tcts:group_id,tcjf:points,yycms:'hysj'},
					success: function (r) {
						layer.msg(r.msg);
						if (r.code == 200) {
							location.reload();
						}
					},
					complete: function () {
						$("#btn_submit").css("background","#fa4646").val("提交");
					}
				});
			}
		});	
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
$("#ysxz"+zd).html(data.msg);
	}},
error: function() {
layer.msg('网络连接异常');
}			
});
}
function qwzy(zd){
var xzname = $(".xzname").attr("data-name");
  layer.load();
  setTimeout(function(){
  layer.closeAll('loading');
}, 2000);
	$.ajax({ 
	type: "POST",  
	url:ycsq,  
	data: "wd="+xzname+"&yycms=qwzy"+"&laiyuan="+zd, 
	dataType:'json',
    cache: false, 
    async:true,
	success: function(data){ 
	if(data.code == 400){
     layer.msg(data.msg,function(){});				
	}else{
$("#qwzy"+zd).html(data.msg);
	}},
error: function() {
layer.msg('网络连接异常1');
}			
});
}
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
 	function delData(ids){
		if(confirm('确定要删除记录吗')){
			$.post("/sava/action.php",{yycms:'scds',ypid:ids},function(data) {
				if (data.code == '200') {
					alert('删除成功');
					location.reload();
				}else {
					alert('删除失败：' + data.msg);
				}
			}, 'json')
		}
	}