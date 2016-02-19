$(
function() {
    var url = ('https:' == document.location.protocol ? 'https://' : 'http://') + "server.alessandracartocci.com/proxy.php";
    console.log(url);
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
            var names = $.trim($("input#name1").val());
            var email = $("input#email1").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: "sid:9ab1e2959995ee23fe554d51f2ee5b8b9a3bc7b1,1454884194",
                    name: "prova",
                    urlencodeenable: "1",
                    leadsource: "Web Site",
                    publicid: "28b64ff62190dbd297ff9fb688519454"
                },
                cache: false,
                success: function(data) {
                    var data = $.parseJSON(data);
                    $("#btnSubmit1").attr("disabled", false);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    

                        $("#success1").html("<div class='alert alert-success'>");
                        $('#success1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success1 > .alert-success')
                            .append("<strong>Grazie! Riceverai tutti gli aggiornamenti! P.S. Se non dovesse arrivarti subito, controlla se, per caso, il tuo provider di posta non ci ha spostati nella casella spam! </strong>");
                        $('#success1 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success1').html("<div class='alert alert-danger'>");
                        $('#success1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success1 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che ci sia stato un errore (" + data.error.message + "). Riprova pi&ugrave; tardi!");
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
                    $('#success1 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che il mio server non stia rispondendo. Riprova pi&ugrave; tardi!");
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
            var names = $.trim($("input#name3").val());
            var email = $("input#email3").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: "sid:9ec2ae03f52a0a4f4f9a8395292d5b86b7075629,1454884152",
                    name: "eBook",
                    urlencodeenable: "1",
                    description: "eBook",
                    leadsource: "Web Site",
                    publicid: "674351d3573cebe8c15c739cf0da0a29"
                },
                cache: false,
                success: function(data) {
                    console.log(data);
                    var data = $.parseJSON(data);
                    $("#btnSubmit3").attr("disabled", false);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    
                        $("#success3").html("<div class='alert alert-success'>");
                        $('#success3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success3 > .alert-success')
                            .append("<strong>Grazie! Tieni d’occhio la tua casella di posta elettronica e a breve riceverai il tuo eBook! P.S. Se non dovesse arrivarti subito, controlla se, per caso, il tuo provider di posta non ci ha spostati nella casella spam! </strong>");
                        $('#success3 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success3').html("<div class='alert alert-danger'>");
                        $('#success3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success3 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che ci sia stato un errore (" + data.error.message + "). Riprova pi&ugrave; tardi!");
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
                    $('#success3 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che il mio server non stia rispondendo. Riprova pi&ugrave; tardi!");
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


    $("#subscribe4").find("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit4").attr("disabled", true);
            event.preventDefault();
            // get values from FORM
            var names = $.trim($("input#name4").val());
            var email = $("input#email4").val();
            var lastName = names.split(" ").pop();
            var firstName = names.replace(lastName,'');
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    __vtrftk: "sid:6c1fbd9bf538487225fa6ce389f6131e5452c8df,1454918494",
                    name: "Opt-int da Facebook",
                    urlencodeenable: "1",
                    description: "eBook",
                    leadsource: "Facebook",
                    publicid: "e519da64042d78119887bc4e8b880236"
                },
                cache: false,
                success: function(data) {
                    console.log(data);
                    var data = $.parseJSON(data);
                    $("#btnSubmit4").attr("disabled", false);
                    if(data.success == true) {
                        if(data.result !== "ok") { var win = window.open(data.result, '_blank'); };
                        if(win){
                            //Browser has allowed it to be opened
                            win.focus();
                        }
                        //Broswer has blocked it
                        // Enable button & show success message    
                        $("#success4").html("<div class='alert alert-success'>");
                        $('#success4 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success4 > .alert-success')
                            .append("<strong>Grazie! Tieni d’occhio la tua casella di posta elettronica e a breve riceverai il tuo eBook! P.S. Se non dovesse arrivarti subito, controlla se, per caso, il tuo provider di posta non ci ha spostati nella casella spam! </strong>");
                        $("#share").css("display", "block");
                        $('#success4 > .alert-success')
                            .append('</div>');
                    } else {
                        $('#success4').html("<div class='alert alert-danger'>");
                        $('#success4 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success4 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che ci sia stato un errore (" + data.error.message + "). Riprova pi&ugrave; tardi!");
                        $('#success4 > .alert-danger').append('</div>');
                    };

                    //clear all fields
                    $("#subscribe4").trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success4').html("<div class='alert alert-danger'>");
                    $('#success4 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success4 > .alert-danger').append("<strong>Scusa " + firstName + ", sembra che il mio server non stia rispondendo. Riprova pi&ugrave; tardi!");
                    $('#success4 > .alert-danger').append('</div>');
                    //clear all fields
                    $("#subscribe4").trigger("reset");
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


// When clicking on Full hide fail/success boxes
$('#name4').focus(function() {
    $('#success4').html('');
});
