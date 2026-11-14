$(document).ready(function ()
{
    //$('.dateozel').mask('00.00.0000', { placeholder: "__.__.____" });
	
	 $('.thumbnail').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        gallery: {
            enabled: true
        },
        callbacks: {
            change: function () {
                var aspect = parseFloat($(this.content[0]).attr("height")) / parseFloat($(this.content[0]).attr("width"));
                console.log(aspect);

                if ($(this.content[0]).parent().children("div").length == 0) {
                    $(this.content[0]).parent().append("<div class='col-xs-11 col-sm-10 col-md-6 videoalan' style='float:none; margin:0 auto;'><div class='embed-responsive'/* style='padding-bottom:" + (aspect * 100) + "%*/; text-align:center'></div></div>");
                    $(this.content[0]).appendTo($(this.content[0]).parent().children("div").children("div"));
                }
                else {
                    $(this.content[0]).parent().children("div").children("div").css("padding-bottom", (aspect * 100) + "%");
                    $(this.content[0]).appendTo($(this.content[0]).parent().children("div").children("div"));
                }
            }
        }
    });
});