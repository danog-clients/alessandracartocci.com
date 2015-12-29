$(for (var i = 1; i < 2; i++) {
    function() {
        $("input#subscribe"+i).jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                // Prevent spam click and default submit behaviour
                $("#btnSubmit"+i).attr("disabled", true);
                event.preventDefault();
                // get values from FORM
                var name = $("input#name"+i).val();
                var email = $("input#email"+i).val();
                var names = name.split(" ");
                var __vtrftk = $("input#__vtrftk"+i).val();
                var publicid = $("input#publicid"+i).val();
                var name = $("input#name"+i).val();
                FirstName = names[0];
                LastName = names[names.length-1];
                $.ajax({
                    url: "https://server.alessandracartocci.com/vtiger/modules/Webforms/capture.php",
                    type: "POST",
                    data: {
                        firstname: FirstName,
                        lastname: LastName,
                        email: email,
                        __vtrftk: __vtrftk,
                        phone: phone,
                        phone: phone,
                    },
                    cache: false,
                    success: function() {
                        // Enable button & show success message    
                        $("#btnSubmit"+i).attr("disabled", false);
                        $('#success'+i).html("<div class='alert alert-success'>");
                        $('#success'+i+' > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success1'+i+' > .alert-success')
                            .append("<strong>Your message has been sent. You will soon recieve your ebook. </strong>");
                        $('#success1'+i+' > .alert-success')
                            .append('</div>');
                        //clear all fields
                        $('#subscribe'+i).trigger("reset");
                    },
                    error: function() {
                        // Fail message
                        $('#success'+i).html("<div class='alert alert-danger'>");
                        $('#success'+i+' > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success'+i+' > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                        $('#success'+i+' > .alert-danger').append('</div>');
                        //clear all fields
                        $('#subscribe'+i).trigger("reset");
                    },
                })
            },
            filter: function() {
                return $(this).is(":visible");
            },
        });

        $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    };

});

// When clicking on Full hide fail/success boxes
$('#name1').focus(function() {
    $('#success1').html('');
});


// When clicking on Full hide fail/success boxes
$('#name2').focus(function() {
    $('#success2').html('');
});
function test() {
   console.log("Thisis a test");
}
