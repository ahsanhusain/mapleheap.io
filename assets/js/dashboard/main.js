$(document).ready(function() {
    var table = $('#example').DataTable({
        "pagingType": "full_numbers",
        "pageLength": 5,
        "language": {
            "lengthMenu": "MID Reporting",
            "search": "",
            "info": "",
            "paginate": {
                "previous": "",
                "next": ""
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table"
        },
        "scrollX": true,
        "columnDefs": [
            {
                "targets": "_all",
                "className": "dt-nowrap"
            }
        ]
    });
    var $searchInput = $('div.dataTables_filter input');
    $searchInput.attr("placeholder", "Search");
    var $addTitleButton = $('<button id="add-title-button" class="tableBtn">Add Title <i class="fa fa-plus"></i></button>');

    $searchInput.after($addTitleButton);

    // Add the search icon to the input field
    $searchInput.css('background-image', 'url("assets/images/dashboard/search.png")');
    $searchInput.css('background-position', '98% 50%');
    $searchInput.css('background-repeat', 'no-repeat');
    $searchInput.css('padding', '0.375rem 0.75rem');
    $searchInput.css('line-height', '1.8');

    $('.dataTable tr th').css('text-align', 'left');
    $('.dataTable th').css('color', '#A8A8BD');
    $('.dataTable th').css('font-weight', 'normal');
    $('.dataTable td').css('padding', '10px');
    $('.dataTable td').css('color', '#4B4B4D');

    table.cells().nodes().to$().addClass('custom-bg-color');
    function updatePagination() {
        var paginationControls = $('.dataTables_paginate').clone();
        $('.dataTables_paginate').css('display', 'none');
        $('#paging-number').empty().append(paginationControls);
    }

    updatePagination();

    table.off('draw.dt');

    table.on('draw.dt', function () {
        updatePagination();
    });

    function attachCustomPaginationHandlers() {
        $('#custom-previous').on('click', function() {
            table.page('previous').draw('page');
        });

        $('#custom-next').on('click', function() {
            table.page('next').draw('page');
        });
    }
    
    attachCustomPaginationHandlers();

        // Attach a click event to the 3-dot menu icon in the action column
    $('#example tbody').on('click', '.three-dots', function (e) {
      e.stopPropagation(); // Prevent row selection when clicking the menu icon

      // Get the corresponding DataTable row
      var row = table.row($(this).closest('tr'));

      // Find the menu within the row
      var menu = row.node().querySelector('.menu-action');

      // Hide all other menus and toggle the visibility of the menu
      $('.menu-action').not(menu).hide();
      $(menu).toggle();
    });

    // Close the menu when clicking outside of it
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.menu-action').length) {
        $('.menu-action').hide();
      }
    });
});
$(document).on('click', '#add-title-button', function() {
    alert('Add Title button clicked');
});