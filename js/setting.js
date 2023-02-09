const color = [
    {
        name:'pink',
        code:'#e46176',
        url:'css/skins/pink.css'

    },
    {
        name:'light blue',
        code:' #69a8be',
        url:'css/skins/light-blue.css'
    },
    {
        name:'light green',
        code:'#0dcebd',
        url:'css/skins/light-green.css'
    },
    {
        name:'red',
        code:'#eb5656',
        url:'css/skins/red.css'
    },
    {
        name:'light brown',
        code:'#c78a67',
        url:'css/skins/light-brown.css'
    }
]

$(document).ready(function () {
    setColors();
    function setColors() {
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                span.style.backgroundColor = color[i].code;
                $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href", color[index].url);
    })

    $(".theme-mode").change(function(){
        var footerImage = document.querySelector('.footer img');
        if($(this).val() == 'light'){
            $("body").removeClass("dark");
            footerImage.src = 'img/flower-case.png';
        }else{
            $("body").addClass("dark");
            footerImage.src = 'img/flower-case-white.png';
        }
    })

    //toggle setting box
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})