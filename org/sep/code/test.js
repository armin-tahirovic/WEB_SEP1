var text = "clear";
var textArray = [];

function readText() {
    $.get("test3", function (data) {
        text = data;

        textArray = $.csv.toArrays(text);

        document.getElementById("text").innerText = textArray[0][2];
    });



    return false;
}