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
        index = 1;
    var timer;

    // 下标
    function lookOn(j){
        for(var i=0; i<imgsLenght; i++){
            controlNub.removeClass('activeon');
        }
        controlNub.eq(j).addClass('activeon');
    }
    // 上一张
    function prevPlay(){
        // 大于图片长度。
        if(index == 1 ){
            bannarItems.css({
                'transition-duration':'1ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translatex(-'+ widthimg*imgsLenght + 'px, 0, 0)',
            });
            console.log(index, bannarItems[0]);

            index = imgsLenght;
            lookOn(imgsLenght);
            // bannarItems[0].style.cssText = "transition-duration: 500ms;transition-timing-function: ease-out;transform: translatex(-"+   widthimg+ "px)";
        }                
        else{
            bannarItems.css({
                'transition-duration':'500ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translatex(-' +(index-1)*1293 +'px, 0, 0)',
            });
            console.log(index, bannarItems[0]);
        }
    }
    // 下一张
    function nextPlay(){
        if(index == imgsLenght ){
            bannarItems.css({
                'transition-duration':'1ms',
                'transition-timing-function': 'ease-out' ,
                'transform': 'translate3d(-' + 0 + 'px, 0, 0)'
            });
            // bannarItems[0].style.cssText = "width:1800%; transition-duration: 500ms;transition-timing-function: ease-out; transform: translateX(-"+ -widthimg + "px)";
            console.log(index, bannarItems[0]);
            index = 1;
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

    // 点击上一张
    prev.on('click', function(){
        index -= 1;
        prevPlay();
        lookOn(index);
    });
    // 下一张
    next.on('click', function(){
        index += 1;
        nextPlay();
        lookOn(index);
    });  
    
    // 动态添加底部原点数量
    for(var i=0; i<imgsLenght; i++){
        controlNub.append($('<li><a href="javascript:;"></a></li>'))
    }

    // rs = setInterval('nextPlay()', 1);
    // clearInterval(rs);

    // 自动播放
    // function animationPaly(){
    //     index +=1;
    //     timer = setInterval(function(){
    //         next.onclick;
    //     },3000)        
    // }

    // bannar.on({
    //     mouseover:function(){
    //         clearInterval(timer);
    //     },
    //     mouseout:function(){
    //         animationPaly();
    //     }
    // });
      
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
        tabLi = $('.rank > ul')
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

// 软件下载
$(function(){
    var tab = $('.sellmore-items'),
        tabLi = $('.sellmore-items > a')
        tabBody = $('.softdown > .tab-body');

    tab.on('mouseover', 'a', function(e){
        e.preventDefault();
        var self = $(this),
            index = self.index();
        for(var i =0; i<tabLi.length; i++){
            tabLi[i].className = '';
            $(tabBody[i]).css('display', 'none');
        }
        self.addClass('activetitle');
        $(tabBody[index]).css('display', 'block');
    });

    tabBody.on('click', 'div', function(e){
        $(this).parent().css('min-height', '560px');
        console($(tabBody).child());
        $(tabBody).child().attr('display', 'list-item');
        $(this).html('<span>收起</span><i class="iconfont">&#xe731;</i>');
    })
    
});









