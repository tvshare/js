<?php
$id=$_GET['url'];
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta charset="UTF-8">
<title> btjson专属M3U8播放器٩(๑❛ᴗ❛๑)۶ </title>
<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/md5.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/DPlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/p2phls.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/layer.js"></script>
<script src="https://www.coolcoolcloud.com/btjson/js/heiBai.js"></script>
<link rel="stylesheet" type="text/css" href="https://www.coolcoolcloud.com//btjson/css/layer.css?v=3.1.1" />
    <style>
        .btjson-full-icon span svg,.btjson-fulloff-icon span svg{display: none;}
        .btjson-full-icon span,.btjson-fulloff-icon span{background-size:contain!important;float: left;width: 22px;height: 22px;}
        .btjson-full-icon span{background: url(https://www.coolcoolcloud.com/img/full.png) center no-repeat;}
        .btjson-fulloff-icon span{background: url(https://www.coolcoolcloud.com//img/fulloff.webp) center no-repeat;}
        #loading-box {background: #!important;}
        #player_pause .tip{color:#f4f4f4;position:absolute;font-size:14px;background-color:hsla(0,0%,0%,0.42);padding:2px 4px;margin:4px;border-radius:3px;right:0;}#player_pause{position:absolute;z-index:9999;top:50%;left:50%;border-radius:5px;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:80%;max-height:80%;}#player_pause img{width:100%;height:100%;}
        .layui-layer-dialog{text-align: center;font-size: 16px;padding-bottom: 10px;}
        .layui-layer-btn.layui-layer-btn-{padding: 5px 1px 12px 0 !important;text-align: center;}
        .layui-layer-btn a{font-size: 12px;padding: 0 11px !important;}
        .layui-layer-btn a:hover{border-color: #00a1d6 !important;background-color:#00a1d6 !important;color: #fff !important;}
        .layui-layer-title{border-bottom:0px solid #eee;}.layui-layer-btn a{height:28px!important;line-height:28px!important;margin:1px 18px 5px 1px!important;padding:0 15px!important;border:1px solid #222;background-color:#dedede!important;color:#ddd!important;border-radius:3px!important;font-weight:400!important;cursor:pointer!important;text-decoration:none!important;width:48px;background-color:#222!important;}.layui-layer-btn .layui-layer-btn0{border-color:#222!important;}
        .dmrules{right:100px;width:60px;font-size:12px;vertical-align:top;border-radius:12px;cursor:pointer;text-align:center;padding:0 10px;white-space:nowrap;z-index:4;position:relative;height:24px;line-height:24px;}
    </style>
<script>
var css ='<style type="text/css">';
var d, s ;
d = new Date();
s = d.getHours();
if(s<17 || s>23){ 
css+='#loading-box{background: #fff;}';//白天
}else{
css+='#loading-box{background: #000;}';//晚上
}
css+='</style>';
//$('head').append(css).addClass("");
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body>
<div id="player"></div>
<div id="ADplayer"></div>
<div id="ADtip"></div>
<script>
    // 播放器基本设置
    var playlink ="",urlpar ='btjson';var adlink='',adimg='';
    var dmapi = 'https://www.coolcoolcloud.com/v3/',vodurl = '<?php echo $id ?>',vodid="",vodsid="",vodpic="",vodname="",next = "423",REFERER = 'https://www.ppypp.com/m3u8.php?url=<?php echo $id ?>';
    var pic="https://ae01.alicdn.com/kf/H222eb1400c714319a40e62c742cc834bv.jpg";
    var playnext = "https://www.btjson.com/"+next ;
    var user = '',group = "",color = '#ff6429',logo ='',autoplay = true;
    var danmuon = 1,laoding = 1,diyvodid = 0,pause_ad = 0,pause_ad_html="",usernum = "25";;
	var pbgjz = ['草','操','妈','逼','滚','网址','网站','支付宝','企','q','n','o','c','m','e','垃圾','微信','qq','卧槽','影视','测试','测试测试','电影站','电影网','网','尼玛','广告','QQ','qq','cc','net'];
    if(playlink!=''){ }else {var diyvodid = 1;};
    var dmrule = "https://www.ppypp.com/"
    diyid = md5(vodurl),diysid = 1;
    function video_next() {
    	if (parent.MacPlayer.PlayLinkNext != '') {
			top.location.href = parent.MacPlayer.PlayLinkNext;
			} else {
				alert("没有下一集，你这个憨憨⚆_⚆？")		}
    };
heiBai.start()
</script>

<script src="https://cdn.jsdelivr.net/gh/qq8852422/btjson@v1.0.7/p2pbtjson.js"></script>




</body>

</html>