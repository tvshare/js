function changeActionn(){
var url = document.getElementById('search_fromm').value;
    $("#search").attr("action", url);
}
function submit12(){
	var str = document.getElementById('wd').value;
		if (str==""||str==null){
			alert("请输入影片关键词")
		}else{
			var s=$('#wd').val();
			var ss=$('#search').attr("action");
            s=s.replace(/\s/g,"");
			window.location.href=""+ss+"-"+s+".html";

		}
}
 $(document).ready(function(){
        $(".up-ul1 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul1 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        });  
	        $(".up-ul2 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul2 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        }); 
	        $(".up-ul3 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul3 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        }); 
       $(".up-ul4 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul4 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        }); 
		$(".up-ul5 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul5 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        });
		$(".up-ul6 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul6 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        });
		$(".up-ul7 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul7 a").removeClass("fed-text-green");
                $this.addClass("fed-text-green");  
            }  
        });
    });