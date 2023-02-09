get_image_gallery(560);
get_image_story("jan22", 10);
get_image_story("feb22", 7);
get_image_story("mar22", 38);
get_image_story("apr22", 54);
get_image_story("may22", 23);
get_image_story("jun22", 53);
get_image_story("jul22", 37);
get_image_story("aug22", 49);
get_image_story("sep22", 76);
get_image_story("oct22", 65);
get_image_story("nov22", 58);
get_image_story("des22", 50);
get_image_story("jan23", 44);

function get_image_gallery(qty) {
  let container = document.getElementById("img-container");
  for (let i = 1; i <= qty; i++) {
    let div1 = document.createElement("div");
    div1.className = "gallery-item";
    let div2 = document.createElement("div");
    div2.className = "gallery-item-inner";
    let image = document.createElement("img");
    image.alt = "pic gallery";
    image.style.opacity = 0;

    container.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(image);

    let isInViewport = function(element) {
      let rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    if (isInViewport(image)) {
      image.src = `img/gallery/thumb/${i}.jpg`;
      image.dataset.large = `img/gallery/large/${i}.jpg`;
    } else {
      image.src = "";
      image.dataset.large = "";
      window.addEventListener("scroll", function() {
        if (isInViewport(image)) {
          image.src = `img/gallery/thumb/${i}.jpg`;
          image.dataset.large = `img/gallery/large/${i}.jpg`;
        }
      });
    }

    image.addEventListener("load", function() {
      image.style.transition = "opacity 1s ease-in-out";
      image.style.opacity = 1;
    });
  }
}



// function get_image_gallery(qty) {
//     let container = document.getElementById("img-container");
//     let startIndex = 1;
//     let endIndex = qty;
    
//     function loadImage() {
//       for (let i = startIndex; i <= endIndex; i++) {
//         let div1 = document.createElement("div");
//         div1.className = "gallery-item";
//         let div2 = document.createElement("div");
//         div2.className = "gallery-item-inner";
//         let image = document.createElement("img");
//         image.src = `img/gallery/thumb/${i}.jpg`;
//         image.dataset.large = `img/gallery/large/${i}.jpg`;
//         image.alt = "pic gallery";
//         image.classList.add("lazy");
//         container.appendChild(div1);
//         div1.appendChild(div2);
//         div2.appendChild(image);
//       }
  
//       startIndex += 20;
//       endIndex += 20;

//       if (endIndex < qty) {
//         endIndex = qty--;
//       }
//     }
  
//     window.addEventListener("scroll", function () {
//     let lastDiv = container.lastElementChild;
//     let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
//     let pageOffset = window.pageYOffset + window.innerHeight;

//     if (pageOffset > lastDivOffset) {
//       loadImage();
//     }
//     });
    
//     loadImage();
//   }

// function get_image_story(month, qty){
//   let container = document.getElementById(month);
//   let div1 = document.createElement("div");
//   div1.className = "story-img-container";
//   let div2 = document.createElement("div");
//   div2.className = "wrapper";
//   container.appendChild(div1);
//   div1.appendChild(div2);
//   for(let i = 1; i <= qty; i++){
//     let image = document.createElement("img");
//     image.src = `img/story/${month}/${i}.jpg`;
//     div2.appendChild(image);
//   }
// }

function get_image_story(month, qty){
  let container = document.getElementById(month);
  let div1 = document.createElement("div");
  div1.className = "story-img-container";
  let div2 = document.createElement("div");
  div2.className = "wrapper";
  container.appendChild(div1);
  div1.appendChild(div2);
  for(let i = 1; i <= qty; i++){
    let image = document.createElement("img");
    image.src = `img/story/${month}/${i}.jpg`;
    image.setAttribute("data-src", image.src);
    image.src = "";
    image.className = "lazy-story";
    div2.appendChild(image);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy-story"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.getAttribute("data-src");
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});

