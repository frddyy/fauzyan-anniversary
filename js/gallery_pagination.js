$(document).ready(function() {
  var itemsPerPage = 20;
  var items = $('.gallery-item');
  var numPages = Math.ceil(items.length / itemsPerPage);
  var currentPage = 1;

  items.slice(itemsPerPage).hide();

  // for (var i = 1; i <= numPages; i++) {
  //   $('#pagination-container').append('<a href="#" class="page-number">' + i + '</a>');
  // }

  $('#pagination-container').on('click', '.page-number', function(e) {
    e.preventDefault();
    currentPage = parseInt($(this).text());
    var startItem = (currentPage - 1) * itemsPerPage;
    var endItem = startItem + itemsPerPage;

    items.hide().slice(startItem, endItem).show();
  });

  $('#pagination-container').on('click', '#previous', function(e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      var startItem = (currentPage - 1) * itemsPerPage;
      var endItem = startItem + itemsPerPage;
      items.hide().slice(startItem, endItem).show();
    }
  });

  $('#pagination-container').on('click', '#next', function(e) {
    e.preventDefault();
    if (currentPage < numPages) {
      currentPage++;
      var startItem = (currentPage - 1) * itemsPerPage;
      var endItem = startItem + itemsPerPage;
      items.hide().slice(startItem, endItem).show();
    }
  });

  // $(document).on('keydown', function(e) {
  //   if (e.which === 37) {
  //     $('#previous').click();
  //   }
  //   if (e.which === 39) {
  //     $('#next').click();
  //   }
  // });  
});