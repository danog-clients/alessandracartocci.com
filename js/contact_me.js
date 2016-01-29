$(
function() {
    $("#subscribe1").find("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit1").attr("disabled", true);
            event.preventDefault();
            // get values from FORM
            var __vtrftk = $("input#__vtrftk1").val();
            var publicid = $("input#publicid1").val();
            var name = $("input#formname1").val();
            var names = $("input#name1").val();
            var email = $("input#email1").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: "https://server.alessandracartocci.com/proxy.php",
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: __vtrftk,
                    name: name,
                    urlencodeenable: "1",
                    publicid: publicid
                },
                cache: false,
                success: function(data) {
                    var data = $.parseJSON(data);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    
                        $("#btnSubmit1").attr("disabled", false);
                        $("#success1").html("<div class='alert alert-success'>");
                        $('#success1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success1 > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                        $('#success1 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success1').html("<div class='alert alert-danger'>");
                        $('#success1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success1 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems an error occurred (" + data.error.message + "). Please try again later!");
                        $('#success1 > .alert-danger').append('</div>');
                    };

                    //clear all fields
                    $("#subscribe1").trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success1').html("<div class='alert alert-danger'>");
                    $('#success1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success1 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my server is not responding. Please try again later!");
                    $('#success1 > .alert-danger').append('</div>');
                    //clear all fields
                    $("#subscribe1").trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("#subscribe2").find("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit2").attr("disabled", true);
            event.preventDefault();
            // get values from FORM
            var __vtrftk = $("input#__vtrftk2").val();
            var publicid = $("input#publicid2").val();
            var name = $("input#formname2").val();
            var names = $("input#name2").val();
            var email = $("input#email2").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: "https://server.alessandracartocci.com/proxy.php",
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: __vtrftk,
                    name: name,
                    urlencodeenable: "1",
                    publicid: publicid
                },
                cache: false,
                success: function(data) {
                    console.log(data);
                    var data = $.parseJSON(data);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    
                        $("#btnSubmit2").attr("disabled", false);
                        $("#success2").html("<div class='alert alert-success'>");
                        $('#success2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success2 > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                        $('#success2 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success2').html("<div class='alert alert-danger'>");
                        $('#success2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success2 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems an error occurred (" + data.error.message + "). Please try again later!");
                        $('#success2 > .alert-danger').append('</div>');
                    };

                    //clear all fields
                    $("#subscribe2").trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success2').html("<div class='alert alert-danger'>");
                    $('#success2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success2 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my server is not responding. Please try again later!");
                    $('#success2 > .alert-danger').append('</div>');
                    //clear all fields
                    $("#subscribe2").trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("#subscribe3").find("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit3").attr("disabled", true);
            event.preventDefault();
            // get values from FORM
            var __vtrftk = $("input#__vtrftk3").val();
            var publicid = $("input#publicid3").val();
            var name = $("input#formname3").val();
            var names = $("input#name3").val();
            var email = $("input#email3").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: "https://server.alessandracartocci.com/proxy.php",
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: __vtrftk,
                    name: name,
                    urlencodeenable: "1",
                    description: "eBook",
                    publicid: publicid
                },
                cache: false,
                success: function(data) {
                    console.log(data);
                    var data = $.parseJSON(data);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    
                        $("#btnSubmit3").attr("disabled", false);
                        $("#success3").html("<div class='alert alert-success'>");
                        $('#success3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success3 > .alert-success')
                            .append("<strong>Your message has been sent. You will soon recieve your ebook. </strong>");
                        $('#success3 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success3').html("<div class='alert alert-danger'>");
                        $('#success3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success3 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems an error occurred (" + data.error.message + "). Please try again later!");
                        $('#success3 > .alert-danger').append('</div>');
                    };

                    //clear all fields
                    $("#subscribe3").trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success3').html("<div class='alert alert-danger'>");
                    $('#success3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success3 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my server is not responding. Please try again later!");
                    $('#success3 > .alert-danger').append('</div>');
                    //clear all fields
                    $("#subscribe3").trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });


    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

}
);

// When clicking on Full hide fail/success boxes
$('#name1').focus(function() {
    $('#success1').html('');
});


// When clicking on Full hide fail/success boxes
$('#name2').focus(function() {
    $('#success2').html('');
});

// When clicking on Full hide fail/success boxes
$('#name3').focus(function() {
    $('#success3').html('');
});

