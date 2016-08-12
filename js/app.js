$( document ).ready(function() {
    console.log( "ready!" );

    

    

    // function change () {
    // 	$(':button').click = change;
    // 	$('instructions').text('Now scroll to see your chord!');
    // };

     // $(":button").click(function(){
        // $("#instructions").text("Now scroll to see your chord!");
    // });

    //   $(window).scroll(function(){
    //     $("#notes").FadeOut()
    // })



             
    //     $(window).scroll(function(){                          
    //         if ($(this).scrollTop() < 1) {
    //             $('#notes').fadeIn(500);
    //         } else {
    //             $('#notes').fadeOut(500);
    //         }
    //     });
    // });

// key button state changes

 // $("#CM").click(function(){
        // $("#CM").css("background-color", "red");
    // });

$("#resetButton").click(function(){
        location.reload();

});

 // var audio = $("#mysoundclip")[0];
 //      console.log(audio);
 //  $("CM").click(function() {
 //      audio.play();
 //  });


$("#CM").click(function(){
        // var audio = $("#mysoundclip") [0]
        // location.reload();
        // event.preventDefault();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteFF").hide();
        $("#noteD").hide();
        $("#noteA").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteE").hide();
        $("#noteF").hide();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#F5')[0].pause();
        $('#B3')[0].pause();
        $('#D5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $("#seven").show();
        $("#noteCC").fadeIn(500);
        $('#C4')[0].play();
        $("#noteEE").fadeIn(500);
        $('#E4')[0].play();
        $("#noteG").fadeIn(1000);
        $('#G4')[0].play();
        $("#noteC").fadeIn(1500);
        $('#C5')[0].play();
        $("#GM").css("background-color", "#ff00e5");
        $("#CM").css("background-color", "white");
        $("#CM").css("color", "pink");
       
        //  location.reload();
        
     });

$("#GM").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteB").hide();
        $("#noteC").hide();
        $("#noteE").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#D5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#noteG").show();
        $('#G4')[0].play();
        $("#noteB").show();
        $('#B4')[0].play();
        $("#noteD").show();
        $('#D4')[0].play();
        $("#Fsharp").show();
        $("#CM").css("background-color", "#ff00e5");
        $("#CM").css("color", "white");
        $("#GM").css("background-color", "red");

      });

$("#DM").click(function(){
		$(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteEE").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteC").hide();
        $("#noteE").hide();
        $("#noteF").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $('#D4')[0].play();
        $('#FsharpAudio')[0].play();
        $('#A4')[0].play();
        $('#D5')[0].play();
        $("#noteDD").show();
        $("#noteFF").show();
        $("#noteA").show();
        $("#noteD").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#DM").css("background-color", "red");

      });

$("#AM").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $('#A4')[0].play();
        $("#noteA").show();
        $('#CsharpAudio')[0].play();
        $("#noteC").show();
        $('#E5')[0].play();
        $("#noteE").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#AM").css("background-color", "red");

      });

$("#EM").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Asharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteEE").show();
        $('#E4')[0].play();
        $('#GsharpAudio')[0].play();
        $('#B4')[0].play();
        $('#E5')[0].play();
        $("#noteG").show();
        $("#noteB").show();
        $("#noteE").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#EM").css("background-color", "red");

      });

$("#BM").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Esharp").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteG").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteE").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteB").show();
        $('#B4')[0].play();
        $("#noteD").show();
        $('#DsharpAudio2')[0].play();
        $("#noteF").show();
        $('#Fsharp5')[0].play()
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#Asharp").show();
        $("#BM").css("background-color", "red");


      });

$("#FsharpMajor").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteE").hide();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteFF").show();
        $("#noteA").show();
        $("#noteC").show();
        $("#noteF").show();
        $("#Fsharp").show();
        $('#FsharpAudio')[0].play()
        $('#AsharpAudio')[0].play()
        $('#CsharpAudio')[0].play()
        $('#Fsharp5')[0].play()
        $("#Csharp").show();
        $("#Gsharp").show();
        $("#Dsharp").show();
        $("#Asharp").show();
        $("#Esharp").show();
        $("#FsharpMajor").css("background-color", "red");


      });

$("#G♭M").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
		$("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteE").hide();
        $("#noteF").hide();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteG").show();
        $('#FsharpAudio')[0].play();
        $('#AsharpAudio')[0].play();
        $('#CsharpAudio')[0].play();
        $("#noteB").show();
        $("#noteD").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#Gflat").show();
        $("#Cflat").show();
        $("#G♭M").css("background-color", "red");

 });

$("#D♭M").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#noteEE").hide();
        $("#noteG").hide();
        $("#noteA").hide();
        $("#noteB").hide();
        $("#noteC").hide();
        $("#noteD").hide();
        $("#noteE").hide();
        $("#noteF").hide();
        $("#Cflat").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteDD").show();
        $('#Csharp4')[0].play();
        $("#noteFF").show();
        $('#F4')[0].play();
        $("#noteF").show();
        $('#GsharpAudio')[0].play();
        $("#noteA").show();
        $("#noteD").show();
        $('#CsharpAudio')[0].play();
        $("#Bflat").show();
        $('#F5')[0].play();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#Gflat").show();
        $("#D♭M").css("background-color", "red");


      });

$("#A♭M").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#F5')[0].pause();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#Gflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteA").show();
        $('#GsharpAudio')[0].play();
        $("#noteC").show();
        $('#C5')[0].play();
        $("#noteE").show();
        $("#Bflat").show();
        $('#DsharpAudio2')[0].play();
        $("#Eflat").show();
        $("#Aflat").show();
        $("#Dflat").show();
        $("#A♭M").css("background-color", "red");
       
      });

$("#E♭M").click(function(){
		$('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#F5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#noteDD").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteEE").show();
        $('#DsharpAudio')[0].play();
        $("#noteG").show();
        $('#G4')[0].play();
        $("#noteB").show();
        $("#noteE").show();
        $("#Bflat").show();
        $("#Eflat").show();
        $('#AsharpAudio')[0].play();
        $('#DsharpAudio2')[0].play();
		$("#Aflat").show();
        $("#E♭M").css("background-color", "red");
       
      });

$("#B♭M").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#F5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteG").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteE").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteB").show();
        $('#AsharpAudio')[0].play();
        $("#noteD").show();
        $('#D5')[0].play();
        $("#noteF").show();
        $('#F5')[0].play();
        $("#Bflat").show();
        $("#Eflat").show();
        $("#B♭M").css("background-color", "red");
       
      });

$("#FM").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#F5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#Eflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteE").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#noteFF").show();
        $('#F4')[0].play();
        $("#noteA").show();
        $('#A4')[0].play();
        $("#noteC").show();
        $('#C5')[0].play();
        $("#Bflat").show();
        $('#F5')[0].play();
        $("#noteF").show();
        $("#FM").css("background-color", "red");
       
      });

$("#Am").click(function(){
        $('#C4')[0].pause();
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".majorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteEE").hide();
        $("#noteFF").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Fsharp").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Asharp").hide();
        $("#Esharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $('#A4')[0].play();
        $("#noteA").show();
        $('#C5')[0].play();
        $("#noteC").show();
        $('#E5')[0].play();
        $("#noteE").show();
        $("#Am").css("background-color", "blue");

      });

$("#Em").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteDD").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Asharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Esharp").hide();
        $("#noteEE").show();
        $('#E4')[0].play();
        $('#G4')[0].play();
        $('#B4')[0].play();
        $('#E5')[0].play();
        $("#noteG").show();
        $("#noteB").show();
        $("#noteE").show();
        $("#Fsharp").show();
        $("#Em").css("background-color", "blue");

      });

$("#Bm").click(function(){
        $(".majorButton").css("background-color", "#ff00e5");
        $(".majorButton").css("color", "white");
        $(".minorButton").css("background-color", "#14ccbb");
        $(".minorButton").css("color", "white");
        $('#C4')[0].pause();
        $('#E4')[0].pause();
        $('#G4')[0].pause();
        $('#C5')[0].pause();
        $('#B3')[0].pause();
        $('#B4')[0].pause();
        $('#D4')[0].pause();
        $('#FsharpAudio')[0].pause();
        $('#A4')[0].pause();
        $('#E5')[0].pause();
        $('#CsharpAudio')[0].pause();
        $('#GsharpAudio')[0].pause();
        $('#DsharpAudio')[0].pause();
        $('#DsharpAudio2')[0].pause();
        $('#AsharpAudio')[0].pause();
        $('#D5')[0].pause();
        $('#Fsharp5')[0].pause();
        $('#Csharp4')[0].pause();
        $('#F4')[0].pause();
        $('#F5')[0].pause();
        $("#Bflat").hide();
        $("#Eflat").hide();
        $("#Aflat").hide();
        $("#Dflat").hide();
        $("#Gflat").hide();
        $("#Cflat").hide();
        $("#noteG").hide();
        $("#noteB").hide();
        $("#noteE").hide();
        $("#noteEE").hide();
        $("#noteDD").hide();
        $("#noteFF").hide();
        $("#noteA").hide();
        $("#noteC").hide();
        $("#noteD").hide();
        $("#noteF").hide();
        $("#Asharp").hide();
        $("#seven").hide();
        $("#noteCC").hide();
        $("#Csharp").hide();
        $("#Gsharp").hide();
        $("#Dsharp").hide();
        $("#Esharp").hide();
        $('#B4')[0].play();
        $('#D5')[0].play();
        $('#Fsharp5')[0].play();
        $("#noteB").show();
        $("#noteD").show();
        $("#noteF").show();
        $("#Fsharp").show();
        $("#Csharp").show();
        $("#Bm").css("background-color", "blue");

      });





// $('#CM').click(function(){

// $(this).find('#noteA').toggle('fast');

// });

});



























