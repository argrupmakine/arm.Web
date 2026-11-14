
/* GOOGLE MAP BAŞLANGIÇ */

var i = 0;
var markers = [];
var geocoder;
var konum;
var gelen;
var mapArr = new Array();
var haritaSayi = 0;

function HaritaAra(veri)
{
    geocodeAddress(veri);
}

function geocodeAddress(mapClass)
{
    var address = $("." + mapClass.split('_')[0]).val();
    var indexma = mapClass.split('_')[1];

    geocoder.geocode({ 'address': address }, function (results, status)
    {
        if (status === google.maps.GeocoderStatus.OK)
        {
            mapArr[indexma][0].setCenter(results[0].geometry.location);
            addMarker(results[0].geometry.location, parseInt(indexma) + 1);
        } else
        {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function addMarker(location, haritaSay)
{
    if (mapArr[haritaSay - 1][1] > 0)
    {
        deleteMarkers(haritaSay - 1);
        mapArr[haritaSay - 1][1] = 0;
    }

    var marker = new google.maps.Marker({
        position: location,
        map: mapArr[haritaSay - 1][0],
        draggable: true,
        animation: google.maps.Animation.DROP
    });

    mapArr[haritaSay - 1][2].push(marker);
    mapArr[haritaSay - 1][1]++;
    var pos = marker.getPosition();

    google.maps.event.addListener(marker, 'dragend', function ()
    {
        $(".map-div").eq(haritaSay - 1).next("input").val(marker.getPosition().toString().replace("(", "").replace(")", "").replace(" ", ""));
    });

    if (pos != null)
    {
        $(".map-div").eq(haritaSay - 1).next("input").val(pos.toString().replace("(", "").replace(")", "").replace(" ", ""));
    }
}

function setAllMap(map)
{
    for (var i = 0; i < mapArr.length; i++)
    {
        for (var j = 0; j < mapArr[i][2].length; j++)
        {
            mapArr[i][2][j].setMap(mapArr[i][0]);
        }
    }
}

function clearMarkers(haritaSay)
{
    mapArr[haritaSay][2][0].setMap(null);
}

function deleteMarkers(haritaSay)
{
    clearMarkers(haritaSay);
    mapArr[haritaSay][2] = [];
}

function MapKontrolEt()
{
    for (var i = 0; i < mapArr.length; i++)
    {
        if ($(".map-div").eq(i).next("input").val() != "")
        {
            var pos = new google.maps.LatLng($(".map-div").eq(i).next("input").val().split(",")[0], $(".map-div").eq(i).next("input").val().split(",")[1]);
            addMarker(pos, i + 1);
            mapArr[i][0].setCenter(pos);
            mapArr[i][0].setZoom(15);
        }
    }
}

function Ata(event, haritaSayi)
{
    addMarker(event.latLng, haritaSayi + 1);
}

function kayit()
{
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: new google.maps.LatLng(41.02964338716638, 28.9764404296875),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $(".map-div").each(function ()
    {
        var idMap = $(this).attr("id");
        var map = new google.maps.Map(document.getElementById(idMap), mapOptions);
        var arryMapMarker = new Array();
        arryMapMarker.push(map);
        arryMapMarker.push("0");
        arryMapMarker.push(new Array());
        mapArr.push(arryMapMarker);

        (function (haritaSayi)
        {
            google.maps.event.addListener(map, 'click', function (event)
            {
                Ata(event, haritaSayi);
            }, false);
        })(haritaSayi)

        haritaSayi++;
    });

    MapKontrolEt();
}
google.maps.event.addDomListener(window, 'load', kayit);

/* GOOGLE MAP BİTİŞ */

/* GENEL BAŞLANGIÇ */

$(document).ready(function ()
{
    if ($("#panelSifre").length > 0)
    {
        blurElement("form > *:not('#panelSifre')", 10);
    }

    $('input[data-plugin-maxlength]').maxlength({
        alwaysShow: true,
        placement: 'bottom'
    });

    $('textarea[data-plugin-maxlength]').maxlength({
        alwaysShow: true,
        placement: 'bottom'
    });

    $('.modal-basic').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });

    $('.popup-modal-dismiss').on('click', function (e)
    {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $(".map-div").next("input").css("display", "none");

    $(".ozelalangrup select").select2({
        language: "tr"
    });

    $("#buttonEkle").click(function () {
        $("#demo-form select").select2({
            language: "tr"
        });

    });

    $(".aDuzen").click(function () {
       
        setTimeout(function () {


            $("#demo-formDuzenle select").select2({
                language: "tr"
            });
        }, 1200);

        

    });

    $(".sayisalalan").keydown(function (e)
    {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40))
        {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105))
        {
            e.preventDefault();
        }
    });

    $(".datetimealan").each(function ()
    {
        var coklu = false;

        if ($(this).hasClass("datetimealancoklu"))
        {
            coklu = true;
        }

        $(this).datepicker({
            language: "tr",
            todayBtn: "linked",
            clearBtn: true,
            multidate: coklu,
            autoclose: true
        }).prop("readonly", true);

    });

    $(".colorpickeralan").each(function ()
    {
        $(this).colorpicker({ align: "left" });
    });
});

function blurElement(element, size)
{
    var filterVal = 'blur(' + size + 'px)';
    $(element)
        .css('filter', filterVal)
        .css('webkitFilter', filterVal)
        .css('mozFilter', filterVal)
        .css('oFilter', filterVal)
        .css('msFilter', filterVal)
        .css('transition', 'all 0.5s ease-out')
        .css('-webkit-transition', 'all 0.5s ease-out')
        .css('-moz-transition', 'all 0.5s ease-out')
        .css('-o-transition', 'all 0.5s ease-out');
}

function OzelAlanDosyaKaldir(did)
{
    document.getElementById(did).value = '';
    $("." + did + "-dosyaadi").remove();
    $("#" + did + "i").remove();
    $("#" + did + "-hidden").val("kaldirildi");
}

/* GENEL BİTİŞ */