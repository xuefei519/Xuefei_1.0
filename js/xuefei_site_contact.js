


$("#reset").click(function() {
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#RequestModal').on('hidden.bs.modal', function () {
 location.reload();
})
});

$("#close").click(function() {
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#RequestModal').on('hidden.bs.modal', function () {
  location.reload();
})
});


$(function() {

  $("#requestForm input,#requestForm textarea").jqBootstrapValidation({
    preventSubmit:true,

  //  submitError: function($form, event, errors) {
        // additional error messages or events
  //  },

    submitSuccess:function($form, event){
      // Prevent spam click and default submit behaviour
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();

      // get values from FORM
      var name = $("input#name").val().trim();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      var Name = name;
      var resumeRequest=document.getElementById("resumeRequest").checked;


      // Check for white space in name for Success/Fail message
      if (Name.indexOf(' ') >= 0) {
          Name = Name.split(' ').slice(0, -1).join(' ');
      }

    //  console.log("["+name+"]");
    //  console.log(Name);
    //  console.log(email);

    emailjs.send("xuefei", "template_Msg", {"Name":Name,"email":email,"message":message,"resume":resumeRequest}).then(function(response) {
      //send success
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      $("#btnSubmit").attr("disabled", false);
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#success > .alert-success')
          .append("<strong><i class='fa fa-smile-o fa-2x'></i> Thank you, "+Name+", your message has been sent. </strong>");
      $('#success > .alert-success')
          .append('</div>');


      $('#requestForm' ).each(function(){
        $("input").val("");
        $("textarea").val("");
      });

    }, function(err) {
      //send failure
      console.log("FAILED. error=", err);

      $("#btnSubmit").attr("disabled", true);
      $('#success').html("<div class='alert alert-danger'>");
      $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#success > .alert-danger').append("<strong><i class='fa fa-frown-o fa-2x'></i>  Sorry " + Name + ", it seems that my mail server is not responding. </strong>");
      $('#success > .alert-danger').append("<br>");
      $('#success > .alert-danger').append("<strong>Please try again later!</strong>");
      $('#success > .alert-danger').append('</div>');

    });

  }
  })

});
