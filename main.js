//okay. This is cool becuase you can make it dynamic this this this this "this" hahah
$("body").css("background-color", "lightgrey");
var x = 0;
$("#BigDeal").click(function () {
    $(this).text("Platooey "+x);
    x=x+1;
});
