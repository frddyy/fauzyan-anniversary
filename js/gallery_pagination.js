// $(document).ready(function() {
//   var itemsPerPage = 20;
//   var items = $('.gallery-item');
//   var numPages = Math.ceil(items.length / itemsPerPage);
//   var currentPage = 1;

//   items.slice(itemsPerPage).hide();

//   // for (var i = 1; i <= numPages; i++) {
//   //   $('#pagination-container').append('<a href="#" class="page-number">' + i + '</a>');
//   // }

//   $('#pagination-container').on('click', '.page-number', function(e) {
//     e.preventDefault();
//     currentPage = parseInt($(this).text());
//     var startItem = (currentPage - 1) * itemsPerPage;
//     var endItem = startItem + itemsPerPage;

//     items.hide().slice(startItem, endItem).show();
//   });

//   $('#pagination-container').on('click', '#previous', function(e) {
//     e.preventDefault();
//     if (currentPage > 1) {
//       currentPage--;
//       var startItem = (currentPage - 1) * itemsPerPage;
//       var endItem = startItem + itemsPerPage;
//       items.hide().slice(startItem, endItem).show();
//     }
//   });

//   $('#pagination-container').on('click', '#next', function(e) {
//     e.preventDefault();
//     if (currentPage < numPages) {
//       currentPage++;
//       var startItem = (currentPage - 1) * itemsPerPage;
//       var endItem = startItem + itemsPerPage;
//       items.hide().slice(startItem, endItem).show();
//     }
//   });

//   // $(document).on('keydown', function(e) {
//   //   if (e.which === 37) {
//   //     $('#previous').click();
//   //   }
//   //   if (e.which === 39) {
//   //     $('#next').click();
//   //   }
//   // });  
// });

let currentPage = 1;
let imagesPerPage = 6;
let totalPages = Math.ceil(qty / imagesPerPage);

// Menampilkan gambar pada halaman saat ini
function showPage(pageNumber) {
  let startIndex = (pageNumber - 1) * imagesPerPage;
  let endIndex = startIndex + imagesPerPage;
  let images = document.querySelectorAll("#img-container img");

  for (let i = 0; i < images.length; i++) {
    if (i >= startIndex && i < endIndex) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
}

// Tampilkan halaman pertama saat memuat halaman
showPage(currentPage);

// Navigasi ke halaman sebelumnya
let previousButton = document.getElementById("previous");
previousButton.addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

// Navigasi ke halaman selanjutnya
let nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});
