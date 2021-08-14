$("#sp_menu_open").on("click", function(){
    $(this).fadeOut("normal");
    $("#sp_menu_close").fadeIn("normal");
    $("#menu").fadeIn("normal");
  });

  $("#sp_menu_close").on("click", function(){
    $(this).fadeOut("normal");
    $("#sp_menu_open").fadeIn("normal");
    $("#menu").fadeOut("normal");
  });

   /*後で検証  
   $("#sp_menu_open").on("click", function(){   
        $("#sp_menu_open").addClass("hide");
        $("#sp_menu_open").addClass("show");
    });
 */    

    /* $("#sp_menu_open").on("click", function(){
        $(this).fadeOut("normal");
    }); */