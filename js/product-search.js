/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-02 23:59:32
 * @version $Id$
 */
window.onload=function(){
	/*区域选择*/
    function $(id) {
        return typeof id ==='string'?document.getElementById(id):id;
    }
    //获取鼠标滑过或点击的标签和要切换内容的元素
    var spans=$(letters).getElementsByTagName('span');
    var tabs=$(areapart).getElementsByClassName('tab');
    $(areaSelector).onmouseover=function(){
        $(cselector).style.display='block';
         $(h3).style.borderBottomColor='#fff';
        $(h3).style.borderBottomWidth='3px';
        $(ii).innerHTML='&#xe602;';
    }
    $(areaSelector).onmouseout=function(){
        $(cselector).style.display='none';
         $(h3).style.borderBottomColor='#e5e5e5';
        $(h3).style.borderBottomWidth='1px';
        $(ii).innerHTML='&#xe601;';
    }
    if (spans.length!=tabs.length) 
        return;
    //遍历letter下的所有的span
    for (var i = 0; i < spans.length; i++) {
        spans[i].val=i;
        spans[i].onmouseover=function(){
            //清除所有span上的class
            for (var j = 0; j < spans.length; j++) {
                spans[j].className='';
                tabs[j].style.display='none';
            }
            //设置当前为选中状态
            this.className='active';
            //设置tab 为显示状态
            tabs[this.val].style.display='block';
        }
    }


    /*二级菜单栏*/
    $(shopClass).onmouseover=function(){
        $(shopClass_show).style.display="block";
    }
    $(shopClass).onmouseout=function(){
        $(shopClass_show).style.display="none";
    }  
    
    /*二级隐藏菜单*/
        var Lis=document.getElementsByClassName('shopClass_item');
        for (var i = 0; i < Lis.length; i++) {
            Lis[i].val=i;
            Lis[i].onmouseover=function(){
                this.className="shopClass_item"+" "+"dlhover";
                var h0=this.val*60;
                var y=this.getElementsByTagName("div")[0].offsetHeight;
                var h=this.getElementsByTagName("div")[0].style.top+y;
                 if (h<h0) 
                {
                    this.getElementsByTagName("div")[0].style.top=h0-4+"px";
                }
                if (y>550)
                {
                    this.getElementsByTagName("div")[0].style.top=-35+"px";
                }

            }
            Lis[i].onmouseout=function(){
                this.className="shopClass_item";
            }
        }

    /*商品搜素页s1-tab-trigger*/    
	 var triggers=document.getElementsByClassName('trig-item');
	 var conts=document.getElementsByClassName('s1-tab-cont-item');
	 if (triggers.length!=conts.length) 
	 	return;
    for (var i = 0; i < triggers.length;i++) {
    	triggers[i].val=i;
        triggers[i].onmouseover=function(){
            this.className="trig-active"+" "+"trig-item";
            conts[this.val].style.display='block';
        }
        triggers[i].onmouseout=function(){
            this.className="trig-item";
            conts[this.val].style.display='none';
        }    
    }
    
}	


