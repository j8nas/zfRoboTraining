$(function() {
  //Hauptfunktion
});

<!-- fadeIn fadeOut für übergang -->
<!-- ID-Aufruf durch "#name" -->
<!-- element-klassenaufruf durch ".name" -->
<!-- einfache fehlerabfrage durch console.log("...") -->
<!-- callback mit function(){..} für smoothen fadeout -->


<!-- start der einzelnen kapitel durch klick! -->
$(".startquiz").click(function() {
  $(".start_screen").fadeOut(function() {
    startQuiz();
  });
});
$(".chapter1_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter1();
  });
});
$(".chapter2_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter2();
  });
});
$(".chapter3_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter3();
  });
});
$(".chapter4_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter4();
  });
});
$(".chapter5_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter5();
  });
});
$(".chapter6_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter6();
  });
});
$(".chapter7_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter7();
  });
});
$(".chapter8_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter8();
  });
});
$(".chapter9_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter9();
  });
});
$(".chapter10_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter10();
  });
});
$(".chapter11_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter11();
  });
});
$(".chapter12_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter12();
  });
});
$(".chapter13_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter13();
  });
});
$(".chapter14_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter14();
  });
});
$(".chapter15_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter15();
  });
});
$(".chapter16_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter16();
  });
});
$(".chapter17_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter17();
  });
});
$(".chapter18_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter18();
  });
});
$(".chapter19_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter19();
  });
});
$(".chapter20_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter20();
  });
});
$(".chapter21_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter21();
  });
});
$(".chapter22_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter22();
  });
});
$(".chapter23_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter23();
  });
});
$(".chapter24_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter24();
  });
});
$(".chapter25_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter25();
  });
});
$(".chapter26_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter26();
  });
});
$(".chapter27_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter27();
  });
});
$(".chapter28_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter28();
  });
});
$(".chapter29_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter29();
  });
});
$(".chapter30_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter30();
  });
});
$(".chapter31_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter31();
  });
});
$(".chapter32_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter32();
  });
});


function startChapter1(){
  $(".chapter_1").fadeIn();
}
function startChapter2(){
	$(".chapter_2").fadeIn();
}
function startChapter3(){
	$(".chapter_3").fadeIn();
}
function startChapter4(){
	$(".chapter_4").fadeIn();
}
function startChapter5(){
	$(".chapter_5").fadeIn();
}
function startChapter6(){
	$(".chapter_6").fadeIn();
}
function startChapter7(){
	$(".chapter_7").fadeIn();
}
function startChapter8(){
	$(".chapter_8").fadeIn();
}
function startChapter9(){
	$(".chapter_9").fadeIn();
}
function startChapter10(){
	$(".chapter_10").fadeIn();
}
function startChapter11(){
	$(".chapter_11").fadeIn();
}
function startChapter12(){
	$(".chapter_12").fadeIn();
}
function startChapter13(){
	$(".chapter_13").fadeIn();
}
function startChapter14(){
	$(".chapter_14").fadeIn();
}
function startChapter15(){
	$(".chapter_15").fadeIn();
}
function startChapter16(){
	$(".chapter_16").fadeIn();
}
function startChapter17(){
	$(".chapter_17").fadeIn();
}
function startChapter18(){
	$(".chapter_18").fadeIn();
}
function startChapter19(){
	$(".chapter_19").fadeIn();
}
function startChapter20(){
	$(".chapter_20").fadeIn();
}
function startChapter21(){
	$(".chapter_21").fadeIn();
}
function startChapter22(){
	$(".chapter_22").fadeIn();
}
function startChapter23(){
	$(".chapter_23").fadeIn();
}
function startChapter24(){
	$(".chapter_24").fadeIn();
}
function startChapter25(){
	$(".chapter_25").fadeIn();
}
function startChapter26(){
	$(".chapter_26").fadeIn();
}
function startChapter27(){
	$(".chapter_27").fadeIn();
}
function startChapter28(){
	$(".chapter_28").fadeIn();
}
function startChapter29(){
	$(".chapter_29").fadeIn();
}
function startChapter30(){
	$(".chapter_30").fadeIn();
}
function startChapter31(){
	$(".chapter_31").fadeIn();
}
function startChapter32(){
	$(".chapter_32").fadeIn();
}

function startQuiz() {
  showNextQuestion();
  $("#question").fadeIn();
  $("#continue_btn").hide();
}

<!-- elemente hinzufügen und rausnehmen -->
function selectAnswer(id) {
  $(id).addClass("btn-primary");
  $(id).removeClass("btn-default");
}

function deselectAnswer(id) {
  $(id).addClass("btn-default");
  $(id).removeClass("btn-primary");
}

<!-- bei click antwort highlighten! -->
$("#answer_a_btn").click(function() {
  selectAnswer("#answer_a_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_b_btn").click(function() {
  selectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_c_btn").click(function() {
  selectAnswer("#answer_c_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_d_btn").click(function() {
  selectAnswer("#answer_d_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_a_btn");
});

$("#answer_commit_btn").click(function() {
  validateAnswer();
});

function validateAnswer() {
  $("#answer_commit_btn").hide();
  var rightAnswer = getRightAnswer();
  var selectedAnswerId = $(".answer.btn-primary").attr("id");
  var selectedAnswer = $(".answer.btn-primary").text()[0];
  //var rightAnswerCheck = $(".answer.right").attr("id"); 

  $(".answer.btn-primary").removeClass("btn-primary");
  $(".answer.btn-default").removeClass("btn-default");

	<!-- richtige success grün und falsche danger rot antwort -->
  if (selectedAnswer == rightAnswer) {
     counter += rightAnswerPoints;
     $("#"+selectedAnswerId).addClass("btn-success");
  } else {
     $("#"+selectedAnswerId).addClass("btn-danger");
     if (rightAnswer == "A"){
	$("#answer_a_btn").addClass("btn-success");
     }else if (rightAnswer == "B"){
	$("#answer_b_btn").addClass("btn-success");
     }else if (rightAnswer == "C"){
	$("#answer_c_btn").addClass("btn-success");
     }else if (rightAnswer == "D"){
	$("#answer_d_btn").addClass("btn-success");
     }
 }
	<!-- weiterbutton einblenden -->
  $("#continue_btn").show();
}

	<!-- weiterbuttonCLICK nächste frage, button anzeige ändern -->
$("#continue_btn").click(function() {
  currentQuestionNo++;
  showNextQuestion();
  $("#continue_btn").hide();
  $("#answer_commit_btn").show();
});

	<!-- Ende anzeigen -->
function showEnd() {
    $("#endpoints").text(counter);
    $("#possiblepoints").text(rightAnswerPoints * questions.length);
    $("#question").fadeOut(function() {
    	$(".quiz_end").fadeIn();
  });
}

	<!-- element restart auf click startet das quiz wieder am start -->
$(".restart").click(function() {
  $(".quiz_end").fadeOut(function(){
  $(".start_screen").fadeIn();
  });
  counter = 0;
});


$(".restartchapter").click(function() {
  $(".startChapter1").fadeOut();
  $(".startChapter2").fadeOut();
  $(".startChapter3").fadeOut();
  $(".startChapter4").fadeOut();
  $(".startChapter5").fadeOut();
  $(".startChapter6").fadeOut();
  $(".startChapter7").fadeOut();
  $(".startChapter8").fadeOut();
  $(".startChapter9").fadeOut();
  $(".startChapter10").fadeOut();
  $(".startChapter11").fadeOut();
  $(".startChapter12").fadeOut();
  $(".startChapter13").fadeOut();
  $(".startChapter14").fadeOut();
  $(".startChapter15").fadeOut();
  $(".startChapter16").fadeOut();
  $(".startChapter17").fadeOut();
  $(".startChapter18").fadeOut();
  $(".startChapter19").fadeOut();
  $(".startChapter20").fadeOut();
  $(".startChapter21").fadeOut();
  $(".startChapter22").fadeOut();
  $(".startChapter23").fadeOut();
  $(".startChapter24").fadeOut();
  $(".startChapter25").fadeOut();	  
  $(".startChapter26").fadeOut();
  $(".startChapter27").fadeOut();
  $(".startChapter28").fadeOut();
    $(".startChapter29").fadeOut();
	  $(".startChapter30").fadeOut();
	    $(".startChapter31").fadeOut();
		  $(".startChapter32").fadeOut();
  $("#output_coord").fadeOut();

$(".chapter_32").fadeOut(function() {
$(".chapter_31").fadeOut(function() {
	$(".chapter_30").fadeOut(function() {
		$(".chapter_29").fadeOut(function() {
			$(".chapter_28").fadeOut(function() {
 $(".chapter_27").fadeOut(function() {
	 $(".chapter_26").fadeOut(function() {
	  $(".chapter_25").fadeOut(function() {
	  $(".chapter_24").fadeOut(function() {
	$(".chapter_23").fadeOut(function() {
	 $(".chapter_22").fadeOut(function() {
	 $(".chapter_21").fadeOut(function() {
    $(".chapter_20").fadeOut(function() {
  $(".chapter_19").fadeOut(function() {
  $(".chapter_18").fadeOut(function() {
  $(".chapter_17").fadeOut(function() {
  $(".chapter_16").fadeOut(function() {
  $(".chapter_15").fadeOut(function() {
  $(".chapter_14").fadeOut(function() {
  $(".chapter_13").fadeOut(function() {
  $(".chapter_12").fadeOut(function() {
  $(".chapter_11").fadeOut(function() {
  $(".chapter_10").fadeOut(function() {
  $(".chapter_9").fadeOut(function() {
  $(".chapter_8").fadeOut(function() {
  $(".chapter_4").fadeOut(function() {
  $(".chapter_5").fadeOut(function() {
  $(".chapter_6").fadeOut(function() {
  $(".chapter_7").fadeOut(function() {
  $(".chapter_3").fadeOut(function() {
  $(".chapter_2").fadeOut(function() {
  $(".chapter_1").fadeOut(function() {
			$(".start_screen").fadeIn();
   });
 });
 });
  });
 });
});
 });
 });
});
});
 });
  });
   });
   });
   });
   });
   });
   });
      });
	     });
		    });
			   });
			      });
				     });
					    });
						   });
						      });
							     });
								  });
								   });
								    });
									 });
									  });