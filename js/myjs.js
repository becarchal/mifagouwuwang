/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-27 10:44:57
 * @version $Id$
 */
    /*登陆注册*/
 $(document).ready(function() {
    $('#login').click(function(){
        $('.mifa-popover-mask').fadeIn(100);
        $('.mifa-popover-lg').slideDown(200);
    })
    $('.mifa-poptit .close').click(function(){
        $('.mifa-popover-mask').fadeOut(100);
        $('.mifa-popover-lg').slideUp(200);
    })
     $('#register').click(function(){
        $('.mifa-popover-mask').fadeIn(100);
        $('.mifa-popover-rg').slideDown(200);
    })
      $('.mifa-poptit .close').click(function(){
        $('.mifa-popover-mask').fadeOut(100);
        $('.mifa-popover-rg').slideUp(200);
    })
})
 /*验证表单*/
 $(document).ready(function(){
           validate=$("#loginform").validate({
            rules:{
                username:"required",
                pwd:{required:true,minlength:5}
            },
            messages:{
                username:"请输入用户名",
                pwd:{required:"请输入密码",minlength:"密码长度不能小于5个数字"},
            },
            errorClass:"wrong",
            validClass:"valid",
        });
        $("#registerform").validate({
            rules:{
                username1:"required",
                pwd1:{required:true,minlength:5},
                pwdr1:{required:true,minlength:5,equalTo:"#pwd1"}
            },
            messages:{
                username1:"请输入用户名",
                pwd1:{required:"请输入密码",minlength:"密码长度不能小于5个数字"},
                pwdr1:{required:"请再次输入密码",minlength:"密码长度不能小于5个数字",equalTo:"两次密码输入不一致"},
            },
            errorClass:"wrong",
            validClass:"valid"
        });
 });



window.onload=function(){
   /*区域选择*/
    function FUT(id) {
        return typeof id ==='string'?document.getElementById(id):id;
    }
    //获取鼠标滑过或点击的标签和要切换内容的元素
    var spans=FUT(letters).getElementsByTagName('span');
    var tabs=FUT(areapart).getElementsByClassName('tab');
    FUT(areaSelector).onmouseover=function(){
        FUT(cselector).style.display='block';
         FUT(h3).style.borderBottomColor='#fff';
        FUT(h3).style.borderBottomWidth='3px';
        FUT(ii).innerHTML='&#xe602;';
    }
    FUT(areaSelector).onmouseout=function(){
        FUT(cselector).style.display='none';
         FUT(h3).style.borderBottomColor='#e5e5e5';
        FUT(h3).style.borderBottomWidth='1px';
        FUT(ii).innerHTML='&#xe601';
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
        /*焦点轮播*/
         var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;//位移总时间
                var inteval = 10;//位移间隔时间
                var speed = offset/(time/inteval);//每次位移量
                var left = parseInt(list.style.left) + offset;

                function go(){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-650){
                            list.style.left = -650 * len + 'px';
                        }
                        if(left<(-650 * len)) {
                            list.style.left = -650+'px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-650);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(650);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -650 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

    
}
 

    
$(document).ready(function() {
        // /*定位导航*/
    $(window).scroll(function(){
            var floorlayouts=$("#layout").find('.floorlayout');
            var menu= $("#menu");
            var top= $(document).scrollTop();
            var currendId =" ";
            floorlayouts.each(function() {
                var t=$(this);
                if (top>t.offset().top-200) {
                    currendId= "#" + t.attr("id");
                }else{
                    return false;
                }
            });
            var currentLink = menu.find(".current");
            if (currendId&& currentLink.attr("href")!=currendId) {
                currentLink.removeClass('current');
                menu.find("[href=" + currendId +"]").addClass('current');
            }
    })
});