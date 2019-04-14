// 轮播图
$(function(){
    var bannar = $('.bannar'),
        bannarItems = $('.bannar-items'),
        bannarimgs = bannarItems.children(),
        imgsLenght = bannarimgs.length,
        widthimg = bannarimgs.children()[0].offsetWidth;
        controlNub = $('.flex-control-nav'),
        prev = $('.flex-nav-prev'),
        next = $('.flex-nav-next'),
        index = 1;  //图片序号
    var timer = null;

    // 下一张
    function nextPlay(){
        // clearInterval(timer)
        if(index > imgsLenght ){
            bannarItems.css({
                'transition-duration':'0',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translate3d(-' + 0 + 'px, 0, 0)'
            });
// bannarItems[0].style.cssText = "width:1800%; transition-duration: 500ms;transition-timing-function: ease-out; transform: translateX(-"+ -widthimg + "px)";
            index = 1;            
            console.log(index, bannarItems[0]);
        }
        else{
            bannarItems.css({
                'transition-duration':'500ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translate3d(-' +(index-1)*widthimg +'px, 0, 0)'
            });
// bannarItems[0].style.cssText = "width:1800%; transition-duration: 500ms;transition-timing-function: ease-out;transform: translateX(-"+ (index-1)*1293+ "px)";
            console.log(index, bannarItems[0], typeof(widthimg));
        }
    }

    // 上一张
    function prevPlay(){
        if(index == 0 ){
            bannarItems.css({
                'transition-duration':'1ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translate3d(-'+ widthimg*(imgsLenght-1) + 'px, 0, 0)',
            });
            console.log(index, bannarItems[0]);
            index = imgsLenght;
            // bannarItems[0].style.cssText = "transition-duration: 500ms;transition-timing-function: ease-out;transform: translatex(-"+   widthimg+ "px)";
        }                
        else{
            bannarItems.css({
                'transition-duration':'500ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translate3d(-' +(index-1)*widthimg +'px, 0, 0)',
            });
            console.log(index, bannarItems[0], typeof(widthimg));
        }
    }

    // 点击上一张
    prev.on('click', function(){
        index = index - 1;
        prevPlay();
        lookOn(parseInt(index));
    });
    // 下一张
    next.on('click', function(){
        index =index + 1;
        nextPlay();
        lookOn(parseInt(index));
    });  

    // 动态添加底部原点数量
    for(var i=0; i<imgsLenght; i++){
        controlNub.append($('<li><a href="javascript:;"></a></li>'))
    }
    var lidot = $('.flex-control-paging > li > a');
    $(lidot[0]).addClass('activeon');

    // 底部圆点
    controlNub.on('mouseover', 'li', function(){
        event.preventDefault;
        var self = $(this),
            indexnub = self.index();
        index = indexnub + 1;
        prevPlay();
        lookOn(parseInt(index));
        bannar.mouseover(function(){
            clearInterval(timer);
        });
    });

    // 下标
    function lookOn(j){
        for(var i=0; i<imgsLenght; i++){
            $(lidot[i]).removeClass('activeon');
        }
        $(lidot[j-1]).addClass('activeon');
    }

    // 自动播放
    timer=setInterval(function(){ //打开定时器
        index++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        if(index > imgsLenght){ //当到达最后一张图的时候，让index赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
            index=1;
        }
        prevPlay();
        lookOn(parseInt(index));
    },2000); //2000为轮播的时间

    bannar.mouseover(function(){
        clearInterval(timer);
    });
    
    bannar.mouseout(function(){
        timer=setInterval(function(){ //打开定时器
            index++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
            if(index > imgsLenght){ //当到达最后一张图的时候，让index赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
                index=1;
            }
            prevPlay();
            lookOn(parseInt(index));
        },3000); //2000为轮播的时间
    })
});


// tab选项卡
$(function(){
    var tabTitle = $('.act'),
        list = $('.act > ul > li'),
        tabBody = $('.act > .tab-body');
    tabTitle.on('mouseover', 'li', function(e){
        e.preventDefault();
        var self = $(this),
            index = self.index();
        for(var i =0; i<list.length; i++){
            list[i].className = '';
            $(tabBody[i]).css('display', 'none');
        }
        self.addClass('active');
        $(tabBody[index]).css('display', 'block');
    }); 
});

$(function(){
    var tabRank = $('.rank'),
        tabLi = $('.rank > ul'),
        list = $('.rank > ul').children(),
        tabBody = $('.rank > .tab-body');

    tabLi.on('mouseover', 'li', function(e){
        e.preventDefault();
        var self = $(this),
            index = self.index();
        for(var i =0; i<list.length; i++){
            list[i].className = '';
            $(tabBody[i]).css('display', 'none');
        }
        self.addClass('active');
        $(tabBody[index]).css('display', 'block');
    });
    
});

// 软件下载tab
$(function(){
    var tab = $('.softwarp .sellmore-items'),
        tabLi = $('.softwarp .sellmore-items > a')
        tabBody = $('.softaskbox > .tab-body');
        
        showLi = true;
    tab.on('mouseover', 'a', function(e){
        e.preventDefault();
        var self = $(this),
            index = self.index();
        for(var i =0; i<tabLi.length-1; i++){
            tabLi[i].className = '';
            $(tabBody[i]).css('display', 'none');
        }
        self.addClass('activetitle');
        $(tabBody[index]).css('display', 'block');
    });

    tabBody.on('click', 'div', function(e){
        var Status = $(this).attr('data-status');
        if(Status == '1'){
            $(this).siblings().children('[style="display: none;"]').css('display',"list-item");
            $(this).html('<span>收起</span><i class="iconfont">&#xe731;</i>').attr('data-status', "0");
        }
        else{
            $(this).siblings().children('[style="display: list-item;"]').css('display',"none");
            $(this).html('<span>展开</span><i class="iconfont">&#xe731;</i>').attr('data-status', "1");
        }
    })
});


// 关闭弹窗
$(function(){
    $('.closepop').on('click',function(e){
        $('.popad').fadeOut(500);
    });
});

// cookie JQ操作需要引入JQ的cookie文件，显得冗杂
function getCookis(){
    // 设置cookis 过期时间
    var date = new Date();
    date.setDate(date.getDate() + 7);
    document.cookie = "username=123; expires=" + date;
    console.log(document.cookie);
}getCookis();


// 滚动事件性能问题
$(window).scroll(function () {
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
        var nav = $('.bannav'),
        scroH = $(document).scrollTop();
        if(scroH > 300){
            $(nav).addClass("totop");
        }
        else if(scroH < 300){
            $(nav).removeClass("totop");
        }
    }, 50);
});





