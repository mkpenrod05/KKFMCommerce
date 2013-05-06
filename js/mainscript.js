function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ($active.length == 0) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next = $active.next().length ? $active.next()
				: $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order

    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
		.addClass('active')
		.animate({ opacity: 1.0 }, 1000, function () {
		    $active.removeClass('active last-active');
		});
}

$(function () {
    setInterval("slideSwitch()", 5000);
});

function resizeSlideshow() {
    var width = $(".masthead").width() - 2;
    $("#slideshow img").css("width", width);

    var height = $(".masthead").height() + 30;
    var browser = (navigator.userAgent).match(/Chrome/);
    if (browser) {height += 60;}
    $("#slideshow").css("margin-bottom", height);
}

function ThrowStandardError(HtmlElement, Message) {
    var Element = $(HtmlElement);
    Element.empty().removeClass();
    Element.show();
    Element.text(Message);
    Element.addClass("ui-state-highlight").addClass("ui-state-error");
    setTimeout(function () {
        Element.removeClass("ui-state-highlight");
    }, 1500);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    //alert('Connection type: ' + states[networkState]);
    $("#connection-type").text(states[networkState]);
}

//function GetProductByType(Type) {
//    if (Type != "") {
//        $.ajax({
//            //url: "WebService.asmx/ProductByType",
//            //url: "http://www.deskinthecorner.somee.com/sites/WEB434-KFF-Ecommerce/WebService.asmx/ProductByType",
//            url: "http://localhost:50576/KFF e-commerce/WebService.asmx/ProductByType",
//            type: "GET",
//            data: "{'Type':'" + Type + "'}",
//            dataType: "jsonp",
//            contentType: "application/json; charset=utf-8",
//            cache: false,
//            beforeSend: function () {

//            },
//            complete: function () {

//            },
//            success: function (data) {
//                if (data.d.IsError == false) {
//                    $("#ItemList").html(data.d.StrData);
//                } else {
//                    $("#ItemList").html(data.d.ErrorMessage);
//                }

//                //$(".AddToCart-Black").hover(function () {
//                //    $(this).toggleClass("AddToCart-White");
//                //}).click(function () {
//                //    var GLCode = $(this).attr("id");
//                //    AddToCart(GLCode);
//                //});
//            },
//            error: function (xhr, ajaxOptions, thrownError) {
//                ThrowStandardError("#DivTopMessage", "Error: " + xhr.status + " " + thrownError);
//            },
//            statusCode: {
//                404: function () {
//                    ThrowStandardError("#DivTopMessage", "Error 404: WebService Not Found!");
//                }
//            }
//        });
//    }
//} //end GetProductByType()