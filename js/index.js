$(function () {
    console.log('Hi! 朋友，感谢您调试我的简历代码。\n' +
        '希望我们能互相学习，共同进步^_^ ');
    $(".welcome-dec").addClass("fade");

    // 点击导航
    var _top;
    $(".navbar-nav li").bind('click',function () {
        var index = $(this).index();
        // console.log(index);
        _top = $('.section').eq(index).offset().top;
        moveTo();
    })
    function moveTo(){
        $('html,body').animate({
            scrollTop:_top
        },500);
    }


    // 技能
    //创建舞台
    var stage = new Konva.Stage({
        container: 'skill_container',
        width: 600,
        height: 700
    });

    //中心点坐标
    var cenX = stage.width() / 3;
    var cenY = stage.height() / 3;

    //创建一个底层的圆

    var innerRadius = 180/2;//背景层的内圆半径
    var outerRadius = 280/2;//背景成的外圆半径

    //创建背景层
    var bgLayer = new Konva.Layer();
    stage.add(bgLayer);

    //绘制背景层内部的线圆
    var innerCircleLine = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: innerRadius,
        dash: [10,4],
        stroke: '#B5B7C6',
        strokeWidth: 2
    });

    bgLayer.add( innerCircleLine);

    //绘制背景层外部的线圆
    var outerCircleLine = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: outerRadius,
        dash: [10,4],
        stroke: '#D8D8D8',
        strokeWidth: 2
    });

    bgLayer.add( outerCircleLine );


    //绘制背景层的中心员
    var centerCircle = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: 60 / 2,
        fill: '#525A82'
    });
    bgLayer.add( centerCircle );

    //绘制中心圆的圆环
    var centerRing = new Konva.Ring({
        x: cenX,
        y: cenY,
        innerRadius: 60/2,
        outerRadius: 80/2,
        fill: '#E1E1E1',
        opacity: .5
    });

    bgLayer.add( centerRing );

    var circleText = new Konva.Text({
        x: cenX -180/2,
        y: cenY-17/2,
        width: 180,
        align: 'center',
        text: 'Web前端',
        fontFamily: '微软雅黑',
        fontSize: 10,
        fontStyle: 'bold',
        fill: '#fff'
    });
    bgLayer.add(circleText);


    bgLayer.draw();



    //创建第二层动画层
    var animateLayer = new Konva.Layer();
    stage.add(animateLayer);

    var groupL2 = new Konva.Group({
        x: cenX,
        y: cenY,
    });
    animateLayer.add( groupL2 );

    var circleTextJs = new CircleText({
        x: 0 + innerRadius * Math.cos(30*Math.PI/180),
        y: 0 + innerRadius * Math.sin(30*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#b5cfcf',
        outerStyle: '#E0E0E0',
        text: 'Js',

    });

    circleTextJs.addToGroupOrLayer( groupL2 );


    var circleTextCss3 = new CircleText({
        x: 0 + innerRadius * Math.cos(90*Math.PI/180),
        y: 0 + innerRadius * Math.sin(90*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#b7a792',
        outerStyle: '#E0E0E0',
        text: 'Css3 ',

    });
    circleTextCss3.addToGroupOrLayer( groupL2 );

    var circleTextJq = new CircleText({
        x: 0 + innerRadius * Math.cos(150*Math.PI/180),
        y: 0 + innerRadius * Math.sin(150*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#e2cd9f',
        outerStyle: '#E0E0E0',
        text: 'Jq',

    });
    circleTextJq.addToGroupOrLayer( groupL2 );

    var circleTextGit = new CircleText({
        x: 0 + innerRadius * Math.cos(210*Math.PI/180),
        y: 0 + innerRadius * Math.sin(210*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#444751',
        outerStyle: '#E0E0E0',
        text: 'Git',

    });
    circleTextGit.addToGroupOrLayer( groupL2 );

    var circleTextAjax = new CircleText({
        x: 0 + innerRadius * Math.cos(270*Math.PI/180),
        y: 0 + innerRadius * Math.sin(270*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#4c919c',
        outerStyle: '#E0E0E0',
        text: 'Ajax',

    });
    circleTextAjax.addToGroupOrLayer( groupL2 );

    var circleTextGulp = new CircleText({
        x: 0 + innerRadius * Math.cos(330*Math.PI/180),
        y: 0 + innerRadius * Math.sin(330*Math.PI/180),
        innerRadius: 20,
        outerRadius: 25,
        innerStyle: '#a97b71',
        outerStyle: '#E0E0E0',
        text: 'Gulp',

    });
    circleTextGulp.addToGroupOrLayer( groupL2 );

    //创建第三层
    var groupL3 = new Konva.Group({
        x: cenX,
        y: cenY
    });
    animateLayer.add( groupL3 );

    var circleTextHtml5 = new CircleText({
        x: outerRadius * Math.cos(170*Math.PI/180),
        y: outerRadius * Math.sin(170*Math.PI/180),
        innerRadius: 25,
        outerRadius: 30,
        innerStyle: '#D863A3',
        outerStyle: '#E0E0E0',
        text: 'Html5',
    });
    circleTextHtml5.addToGroupOrLayer( groupL3 );

    var circleTextWebpack = new CircleText({
        x: outerRadius * Math.cos(290*Math.PI/180),
        y: outerRadius * Math.sin(290*Math.PI/180),
        innerRadius: 25,
        outerRadius: 30,
        innerStyle: '#485467',
        outerStyle: '#E0E0E0',
        text: 'Webpack',
    });
    circleTextWebpack.addToGroupOrLayer( groupL3 );

    var circleTextBootStrap = new CircleText({
        x: outerRadius * Math.cos(50*Math.PI/180),
        y: outerRadius * Math.sin(50*Math.PI/180),
        innerRadius: 25,
        outerRadius: 30,
        innerStyle: '#a97c71',
        outerStyle: '#E0E0E0',
        text: 'BootStrap',
    });
    circleTextBootStrap.addToGroupOrLayer( groupL3 );

    animateLayer.draw();


    var rotateAnglPerSecond = 30;
    var animate = new Konva.Animation(function(frame){
        var angle = rotateAnglPerSecond * frame.timeDiff / 1000;
        groupL2.rotate( angle );
        groupL2.getChildren().each(function(item,index){
            item.rotate( -angle );
        });

        groupL3.rotate( -angle );
        groupL3.getChildren().each(function(item,index){
            item.rotate( angle );
        });
    }, animateLayer);
    animate.start();

    animateLayer.on('mouseover', function() {
        rotateAnglPerSecond = 10;
    });
    animateLayer.on('mouseout', function(){
        rotateAnglPerSecond = 30;
    })

})