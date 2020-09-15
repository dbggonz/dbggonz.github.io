$(document).ready(function(){
  $("#id_producer_type_1").click(function(){
    $('#Proof_address').hide();
    $('#Proof_address').val('hidden=true&required=false');
  });

  $("#id_producer_type_0").click(function(){
    $('#Proof_address').show();
    $('#Proof_address').val('hidden=false&required=true');
   });
}); 