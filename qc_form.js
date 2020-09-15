
$(document).ready(function(){
    $("#checkbox_two").hide();
    $("#checkbox_three").hide();
    $("#checkbox_four").hide();
  // If file specifications is No then YES
  $("#id_does_the_file_meet_the_required_specifications_1").click(function(){
    $('#Program_scrubbed').hide();
    $('#Program_scrubbed').val('hidden=true&required=false');
    $('#Program_length').hide();
    $('#Program_length').val('hidden=true&required=false');
    $('#Letterboxed').hide();
    $('#Letterboxed').val('hidden=true&required=false');
    $('#Title_safe_graphics').hide();
    $('#Title_safe_graphics').val('hidden=true&required=false');
    $('#Audio_Quality').hide();
    $('#Audio_Quality').val('hidden=true&required=false');
    $('#Video_Quality').hide();
    $('#Video_Quality').val('hidden=true&required=false');
    $('#contentcheck').hide();
    $('#contentcheck').val('hidden=true&required=false');
    $('#Producer_email_1').hide();
    $('#Producer_email_1').val('hidden=true&required=false');
    $('#Producer_email_2').hide();
    $('#Producer_email_2').val('hidden=true&required=false');
    $('#section_2').hide();
    $('#section_2').val('hidden=true&required=false');
    $('#Please_alert').hide();
    $('#Please_alert').val('hidden=true&required=false');
    $('#checkbox_one').show();
    $('#checkbox_one').val('hidden=false&required=true');
  });

  $("#id_does_the_file_meet_the_required_specifications_0").click(function(){
    $('#Program_scrubbed').show();
    $('#Program_scrubbed').val('hidden=false&required=true');
    $('#Program_length').show();
    $('#Program_length').val('hidden=false&required=true');
    $('#Letterboxed').show();
    $('#Letterboxed').val('hidden=false&required=true');
    $('#Title_safe_graphics').show();
    $('#Title_safe_graphics').val('hidden=false&required=true');
    $('#Audio_Quality').show();
    $('#Audio_Quality').val('hidden=false&required=true');
    $('#Video_Quality').show();
    $('#Video_Quality').val('hidden=false&required=true');
    $('#contentcheck').show();
    $('#contentcheck').val('hidden=false&required=true');
    $('#checkbox_one').hide();
    $('#checkbox_one').val('hidden=true&required=false');
   });

  // Program scrubbed is NO then YES
  $("#id_has_this_program_been_scrubbed_1").click(function(){
    $('#contentcheck').hide();
    $('#contentcheck').val('hidden=true&required=false');
    $('#Audio_Quality').hide();
    $('#Audio_Quality').val('hidden=true&required=false');
    $('#Video_Quality').hide();
    $('#Video_Quality').val('hidden=true&required=false');
    $('#Program_length').hide();
    $('#Program_length').val('hidden=true&required=false');
    $('#Letterboxed').hide();
    $('#Letterboxed').val('hidden=true&required=false');
    $('#Title_safe_graphics').hide();
    $('#Title_safe_graphics').val('hidden=true&required=false');
    $('#Producer_email_1').hide();
    $('#Producer_email_1').val('hidden=true&required=false');   
    $('#Producer_email_2').hide();
    $('#Producer_email_2').val('hidden=true&required=false');
    $('#Please_alert').show();
    $('#Please_alert').val('hidden=false&required=true');
    $('#checkbox_one').show();
    $('#checkbox_one').val('hidden=false&required=true');
    $('#section_2').hide();
    $('#section_2').val('hidden=true&required=false');
   });

  $("#id_has_this_program_been_scrubbed_0").click(function(){
    $('#contentcheck').show();
    $('#contentcheck').val('hidden=false&required=true');
    $('#Audio_Quality').show();
    $('#Audio_Quality').val('hidden=false&required=true');
    $('#Video_Quality').show();
    $('#Video_Quality').val('hidden=false&required=true');
    $('#Program_length').show();
    $('#Program_length').val('hidden=false&required=true');
    $('#Letterboxed').show();
    $('#Letterboxed').val('hidden=false&required=true');
    $('#Title_safe_graphics').show();
    $('#Title_safe_graphics').val('hidden=false&required=true');
    $('#Producer_email_1').show();
    $('#Producer_email_1').val('hidden=false&required=true');   
    $('#Producer_email_2').show();
    $('#Producer_email_2').val('hidden=false&required=true');
    $('#Please_alert').hide();
    $('#Please_alert').val('hidden=true&required=false');
    $('#checkbox_one').hide();
    $('#checkbox_one').val('hidden=true&required=false');
   });

  // Letterboxed is NO then YES
  $("#id_is_this_file_1").click(function(){
    $('#Producer_email_1').hide();
    $('#Producer_email_1').val('hidden=true&required=false');
    $('#Producer_email_2').hide();
    $('#Producer_email_2').val('hidden=true&required=false');
    $('#checkbox_one').hide();
    $('#checkbox_one').val('hidden=true&required=false');
  });

  $("#id_is_this_file_0").click(function(){
    $('#Producer_email_1').show();
    $('#Producer_email_1').val('hidden=false&required=true');
    $('#Producer_email_2').hide();
    $('#Producer_email_2').val('hidden=true&required=false');
    $('#checkbox_one').show();
    $('#checkbox_one').val('hidden=false&required=true');
   });

  // Title Safe Graphics is NO then YES
  $("#id_does_this_program_contain_graphics_that_are_not_4_by_3_title_safe_1").click(function(){
    $('#Producer_email_1').hide();
    $('#Producer_email_1').val('hidden=true&required=false');
    $('#Producer_email_2').hide();
    $('#Producer_email_2').val('hidden=true&required=false');
    $('#checkbox_one').hide();
    $('#checkbox_one').val('hidden=true&required=false');
  });

  $("#id_does_this_program_contain_graphics_that_are_not_4_by_3_title_safe_0").click(function(){
    $('#Producer_email_2').show();
    $('#Producer_email_2').val('hidden=false&required=true');
    $('#checkbox_one').show();
    $('#checkbox_one').val('hidden=false&required=true');
   });



  // Content Review is ?????
  // Hide all checkboxes except checkbox four

  $("#id_does_this_program_have_any_of_the_following_content_issues_0").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_1").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_2").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_3").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_4").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_5").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_6").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_7").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_8").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_9").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_10").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_11").click(function(){
    $('#checkbox_two').show();
    $('#checkbox_two').val('hidden=false&required=true');
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_12").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_13").click(function(){
    $('#checkbox_three').show();
    $('#checkbox_three').val('hidden=false&required=true');
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_14").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_15").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });


  $("#id_does_this_program_have_any_of_the_following_content_issues_16").click(function(){
    $('#checkbox_four').show();
    $('#checkbox_four').val('hidden=false&required=true');
  });

  $("#id_does_this_program_have_any_of_the_following_content_issues_17").click(function(){
    $('#checkbox_four').hide();
    $('#checkbox_four').val('hidden=true&required=false');
  });
});
