//audio
var audio = $("#myAudio")[0];
audio.autoplay = true;
audio.load();

$(window).on("load", function(){

    // //preloader
    $(".preloader").fadeOut(4000);
    
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        console.log(slideIndex);
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();

    //audio
     audio.oncanplay = function(){
         audio.play();
     }
    
     $(".fa-music").click(function(){
        if($(this).hasClass("pause")){
            audio.play();
        }else{
            audio.pause();
        }
        $(this).toggleClass("pause");
    })
})

$(document).ready(function(){
    //nav toggle
    $(".hamburger-btn").click(function(){
        $("nav").slideToggle();
    })
    $("nav a").click(function(){
        if($(window).width() < 768){
            $("nav").slideToggle();
        }
    })
    //fixed header
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    })

    //scrollIt
    $.scrollIt({
        topOffset: -50
    });

        //gallery popup
        const wHeight = $(window).height();
        $(".gallery-popup .gp-img").css("max-height", wHeight + "px" );

        let gpIndex = 0;
        // const totalGalleryItems = $(".gallery-item").length;
        const totalGalleryItems = 560;

        $(".gallery-item").click(function(){
            itemIndex = $(this).index()
            $(".gallery-popup").addClass("open");
            $("gallery-popup .gp-img").hide();
            gpSlideShow();
        })
        $(".gp-controls .next").click(function(){
            if(itemIndex == totalGalleryItems-1){
                itemIndex = 0;
            }else{
                itemIndex++;
            }
            $(".gallery-popup .gp-img").fadeOut(function(){
                gpSlideShow();
            })
        })

        $(".gp-controls .prev").click(function(){
            if(itemIndex == 0){
                itemIndex = totalGalleryItems-1;
            }else{
                itemIndex--;
            }
            $(".gallery-popup .gp-img").fadeOut(function(){
                gpSlideShow();
            })
        })

        function gpSlideShow() {
            const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
            $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
            $(".gp-counter").text((itemIndex+1) + "/" + totalGalleryItems);
        }

        //hide gallery popup
        $(".gp-close").click(function(){
            $(".gallery-popup").removeClass("open");
        })

        //hide gallery popup when clicked outside of gp-container
        $(".gallery-popup").click(function(event){
            if($(event.target).hasClass("open")){
                $(".gallery-popup").removeClass("open");
            }
        })

        //arrow key control
        document.addEventListener('keydown', (e) => {
            e = e || window.event;
            if (e.key === 'ArrowUp') {
            console.log('up arrow pressed')
            } else if (e.key === 'ArrowDown') {
            console.log('down arrow pressed')
            } else if (e.key === 'ArrowLeft') {
            console.log('left arrow pressed')
                if(itemIndex == 0){
                    itemIndex = totalGalleryItems-1;
                }else{
                    itemIndex--;
                }
                $(".gallery-popup .gp-img").fadeOut(function(){
                    gpSlideShow();
                })
            } else if (e.key === 'ArrowRight') {
            console.log('right arrow pressed')
                if(itemIndex == totalGalleryItems-1){
                    itemIndex = 0;
                }else{
                    itemIndex++;
                }
                $(".gallery-popup .gp-img").fadeOut(function(){
                    gpSlideShow();
                })
            }
        })
})
