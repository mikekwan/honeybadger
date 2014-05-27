// Contact form
function validateEmail(email) { 
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    $(document).ready(function() {
        $(".modalbox").fancybox();
        $("#contact").submit(function() { return false; });


        $("#send").on("click", function(){
            var emailval  = $("#email").val();
            var msgval    = $("#msg").val();
            var msglen    = msgval.length;
            var mailvalid = validateEmail(emailval);
            var nameval = $("#name").val();

            if(mailvalid == false) {
                $("#email").addClass("error");
            }
            else if(mailvalid == true){
                $("#email").removeClass("error");
            }

            if(msglen < 4) {
                $("#msg").addClass("error");
            }
            else if(msglen >= 4){
                $("#msg").removeClass("error");
            }

            if(nameval < 2) {
            //name must be at least 2 characters
                    $("#name").addClass("error");
            }
            else if(nameval >= 2){
                    $("#name").removeClass("error");
            }

            if(mailvalid == true && msglen >= 4) {
                // if both validate we attempt to send the e-mail
                // first we hide the submit btn so the user doesnt click twice
                $("#send").replaceWith("<em>Sending...</em>");

                $.ajax({
                    type: 'POST',
                    url: 'contactforms/send_gm.php',
                    data: $("#contact").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            $("form#contact").fadeOut("fast", function(){
                                $(this).before("<p><strong>Got your message. Look for our invite! </strong></p>");
                                setTimeout("$.fancybox.close()", 4000);
                            });
                        }
                    }
                });
            }
        });
    });