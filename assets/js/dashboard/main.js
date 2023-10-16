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
        "scrollX": true, // Enable horizontal scrolling
        "columnDefs": [
            {
                "targets": "_all", // Apply to all columns
                "className": "dt-nowrap" // Prevent text wrapping
            }
        ]
    });
    // Dynamically add the "Add Title" button to the search input
    var $searchInput = $('div.dataTables_filter input');
    $searchInput.attr("placeholder", "Search");
    var $addTitleButton = $('<button id="add-title-button" class="tableBtn">Add Title <i class="fa fa-plus"></i></button>');

    $searchInput.after($addTitleButton);

    // Add the search icon to the input field
    $searchInput.css('background-image', 'url("assets/images/dashboard/search.png")'); // Replace with the path to your search icon image
    $searchInput.css('background-position', '98% 50%'); // Adjust the position as needed
    $searchInput.css('background-repeat', 'no-repeat');
    $searchInput.css('padding', '0.375rem 0.75rem');
    $searchInput.css('line-height', '1.8');

    $('#example th').css('text-align', 'left');
    $('#example th').css('color', '#A8A8BD');
    $('#example th').css('font-weight', 'normal');
    $('#example td').css('padding', '10px');
    $('#example td').css('color', '#4B4B4D');

    table.on('order.dt', function () {
        // table.cells().nodes().to$().removeClass('sorting_1 even odd');
    });
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
    
    // Attach click event handlers for custom pagination controls
    attachCustomPaginationHandlers();
});
$(document).on('click', '#add-title-button', function() {
    // Add your code to handle the "Add Title" button click event here.
    alert('Add Title button clicked');
});