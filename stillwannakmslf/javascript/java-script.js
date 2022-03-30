$(document).ready(function(){
$("#square2").click(function(){
    $("#start1").css("display", "none");
    $("#screen2").css("display", "block");
});
});
$(document).ready(function(){
$("#arrow1").click(function(){
    $("#screen2").css("display", "none");
    $("#start1").css("display", "block");
});
});
$(document).ready(function(){
$("#square1").click(function(){
    $("#start1").css("display", "none");
    $("#game1").css("display", "block");
});
});
$(function(){
$("#buttonleft").click(function(){
    $("#fox").css("animation-play-state", "running");
    setTimeout(function(){
        $("#fox").css("animation", "none");
    },500);
    setTimeout(function(){
        $("#fox").css("animation", "fox 500ms forwards");
        $("#fox").css("animation-play-state", "paused");
    },501);
});
});
