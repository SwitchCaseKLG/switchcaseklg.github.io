$(function() {

    var $form = $('#contactForm');

    function showMessage(type, text) {
        var $alert = $("<div class='alert'>").addClass('alert-' + type);
        $alert.append("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
        $alert.append($('<strong>').text(text));
        $('#success').empty().append($alert);
    }

    // Required fields are checked by the browser before this runs
    $form.on('submit', function(event) {
        event.preventDefault(); // prevent default submit behaviour
        var $button = $form.find('button[type=submit]').prop('disabled', true);
        $.ajax({
            url: $form.attr('action'),
            type: "POST",
            dataType: "json",
            data: {
                name: $("input#name").val(),
                email: $("input#email").val(),
                phone: $("input#phone").val(),
                message: $("textarea#message").val()
            },
            cache: false,
            success: function() {
                showMessage('success', $form.data('success'));
                //clear all fields
                $form.trigger("reset");
            },
            error: function() {
                // keep the fields so the message is not lost
                showMessage('danger', $form.data('error'));
            },
            complete: function() {
                $button.prop('disabled', false);
            }
        })
    });

    /*When clicking on Full hide fail/success boxes */
    $('#name').focus(function() {
        $('#success').html('');
    });
});
