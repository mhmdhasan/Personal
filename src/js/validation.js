$(function () {

    $("#hireForm").validate({
        rules: {
            fullname: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fullname: "Please enter your full name",
            email: "Please enter a valid email address",
            jobtype: "Please select your job type",
            message: "Please provide a small brief about your job"
        },
        errorElement: "small",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents( ".form-group" ).addClass( "has-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if ( !element.next( "i" )[ 0 ] ) {
                $( '<i class="fas fa-exclamation-circle"></i>' ).insertAfter( element );
            }
        },
        success: function ( label, element ) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if ( !$( element ).next( "i" )[ 0 ] ) {
                $( '<i class="fas fa-check-circle"></i>' ).insertAfter( $( element ) );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).next( "i" ).addClass( "fa-exclamation-circle" ).removeClass( "fa-check-circle" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).next( "i" ).addClass( "fa-check-circle" ).removeClass( "fa-exclamation-circle" );
        },
        success: function(label) {
			var messages = new Array(
                "Looks good!!",
				"Looks good!",
				"Looks good!",
				"Looks good!",
				"Looks good!",
				"Looks good!"
            );
			var num = Math.floor(Math.random()*6);

			label.text(messages[num]).addClass("success");
		}
    });

    $('#hireForm').on('submit', function () {
        $('.bootstrap-select i, .bootstrap-select .help-block').insertAfter('.bs-select-form-control');
    });



    $("#contactForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: "Please enter a valid email address",
            message: "Please enter your message"
        },
        errorElement: "small",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents( ".form-group" ).addClass( "has-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if ( !element.next( "i" )[ 0 ] ) {
                $( '<i class="fas fa-exclamation-circle"></i>' ).insertAfter( element );
            }
        },
        success: function ( label, element ) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if ( !$( element ).next( "i" )[ 0 ] ) {
                $( '<i class="fas fa-check-circle"></i>' ).insertAfter( $( element ) );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).next( "i" ).addClass( "fa-exclamation-circle" ).removeClass( "fa-check-circle" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).next( "i" ).addClass( "fa-check-circle" ).removeClass( "fa-exclamation-circle" );
        },
        success: function(label) {
			var messages = new Array(
                "Looks good!!",
				"Looks good!",
				"Looks good!",
				"Looks good!"
            );
			var num = Math.floor(Math.random()*6);

			label.text(messages[num]).addClass("success");
		}
    });

});
