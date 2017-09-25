$("#cancel").click(function() {
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#rateModal').on('hidden.bs.modal', function () {
 location.reload();
})
});

$("#rateModal_close").click(function() {
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#rateModal').on('hidden.bs.modal', function () {
  location.reload();
})
});

function getValue(name){
      var result= [];
       $.each($("input[name='"+name+"']:checked"), function(){
           result.push($(this).val());
       });
       return result.join(", ");
}

$(function() {

  $("#Rateform input,#Rateform textarea").jqBootstrapValidation({
    preventSubmit:true,

    submitSuccess:function($form, event){
      // Prevent spam click and default submit behaviour
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();

      // get values from FORM

      var comment = $("textarea#comment").val();
      var Q1=getValue("question1");
      var Q2=getValue("question2");
      var Q3_1=getValue("question3-1");
      var Q3_2=getValue("question3-2");
      var Q3_3=getValue("question3-3");
      var Q3_4=getValue("question3-4");


    /*  console.log("Heard of this page from: " + Q1);
      console.log("Role: " + Q2);
      console.log("Design rate: " + Q3_1);
      console.log("Content date: " + Q3_2);
      console.log("Compability rate: " + Q3_3);
      console.log("Overall rate: " + Q3_4);
      console.log("Comment: " + comment);*/




    emailjs.send("xuefei", "page_rate", {"Q1":Q1,"Q2":Q2,"Q3_1":Q3_1,"Q3_2":Q3_2,"Q3_3":Q3_3,"Q3_4":Q3_4,"comment":comment}).then(function(response) {
      //send success
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      $("#btnSubmit").attr("disabled", false);
      $('#rate_success').html("<div class='alert alert-success'>");
      $('#rate_success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#rate_success > .alert-success')
          .append("<strong><i class='fa fa-smile-o fa-2x'></i> Thank you, your review has been sent. </strong>");
      $('#rate_success > .alert-success')
          .append('</div>');

    }, function(err) {
      //send failure
      console.log("FAILED. error=", err);

      $("#btnSubmit").attr("disabled", true);
      $('#rate_success').html("<div class='alert alert-danger'>");
      $('#rate_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#rate_success > .alert-danger').append("<strong><i class='fa fa-frown-o fa-2x'></i>  Sorry , it seems that my mail server is not responding. </strong>");
      $('#rate_success > .alert-danger').append("<br>");
      $('#rate_success > .alert-danger').append("<strong>Please try again later!</strong>");
      $('#rate_success > .alert-danger').append('</div>');

    })


  }
})

});
