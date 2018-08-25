$(document).ready(function () {
            
    $(".button").click(function () {
 
        let currentName = $(this).closest('.button').attr("id");
        console.log(currentName);
        $.ajax({
          url: `/character/${currentName}/update/downed`,
          method: 'POST',
          success: function (reload) {
            // reload();
            console.log('it works');
          }
        });
      });

});