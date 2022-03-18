var i = 0;
var txt = 'ЭТО ДАНИЛ.';
var speed = 50;
$(document).ready(function firststring() {
$(document).ready(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("starttext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});
});
var k = 0;
var txt1 = 'ДАНИЛ ОЧЕНЬ МНОГО ГРЕШИЛ ПРИ ЖИЗНИ.';
setTimeout(function secondstring() {
$(document).ready(function typeWriter1() {
  if (k < txt1.length) {
    document.getElementById("starttext1").innerHTML += txt1.charAt(k);
    k++;
    setTimeout(typeWriter1, speed);
  };
});
},1000);
var u = 0;
var txt2 = 'ТВОЯ ЗАДАЧА – ПОМОЧЬ ЕМУ ИСКУПИТЬ ГРЕХИ.';
setTimeout(function thirdstring() {
$(document).ready(function typeWriter2() {
  if (u < txt2.length) {
    document.getElementById("starttext2").innerHTML += txt2.charAt(u);
    u++;
    setTimeout(typeWriter2, speed);
  };
});
},3300);
$(document).ready(function(){
$("#starticon1").click(function(){
    $("#hammer").css("animation-play-state", "running");
    setTimeout(function() {
       $("#hammer").css("animation-play-state", "paused");
     }, 400);
     $("#starticon1").css("display", "none");
     setTimeout(function() {
        $(".start2").css("animation-play-state", "running");
      }, 500);
      setTimeout(function() {
         $(".start2").css("display", "none");
       }, 990);
       setTimeout(function() {
          $(".start3").css("display", "block");
          $(".start3").css("animation-play-state", "running");
        }, 500);
});
});
$(document).ready(function(){
$(".start1").click(function(){
    $(".start1").css("display", "none");
    $(".start2").css("display", "block");
});
});
