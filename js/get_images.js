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
    for(let i = 1; i <= qty; i++){
    let div1 = document.createElement("div");
    div1.className = "gallery-item";
    let div2 = document.createElement("div");
    div2.className = "gallery-item-inner";
    let image = document.createElement("img");
    image.src = `img/gallery/thumb/${i}.jpg`;
    // image.src = `img/owner/Salma_Jan22/${i}.webp`;
    image.dataset.large = `img/gallery/large/${i}.jpg`;
    image.alt = "pic gallery";
    // image.dataset.large = `img/owner/Salma_Jan22/${i}.webp`;
    
    container.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(image);
  }
}

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
    div2.appendChild(image);
  }
}
