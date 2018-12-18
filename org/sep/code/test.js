var text = "clear";
var textArray = [];
var date = "";
var day;
var month;
var year;
var day_input;
var month_input;
var year_input;

readUser();
var brugernavnInfo = "clear";
var userArray = [];

function readText() {
    $.get("Meter1", function (data) {
        var innerText = "<table><tr><th>Date</th><th>Consumption</th><th>Unit</th></tr>";

        text = data;
        date = $("#daterpicker").val().split('-');
        year = date[0];
        month = date[1];
        day = date[2];

        textArray = $.csv.toArrays(text);
        textArray.forEach(line => {

            var localDate = line[0].split('-');

            year_input = localDate[0];
            month_input = localDate[1];
            day_input = localDate[2];

            if (day_input === day && month_input === month && year_input === year) {
                innerText += "<tr>\n" +
                    "<td>" + line[0] + "</td>\n" +
                    "<td>" + line[1] + "</td>\n" +
                    "<td>" + line[2] + "</td>\n" +
                    "</tr>";
            }
            return innerText;
        });

        innerText += "</table>\n";

        document.getElementById("text").innerHTML = innerText;
    });
    return false;
}

function readUser() {
    $.get("users.txt", function (data) {
        brugernavnInfo = data;

        userArray = $.csv.toArrays(brugernavnInfo);
    });
}