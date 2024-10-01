let table = [
    ["Computer Methods for Engineers", "Roy J Johnson Memorial Scholarship"],
    ["Advanced Engineering Math", "Gonzaga Deans Scholarship"],
    ["Controls Engineering", "Gonzaga Leaders Scholarship"],
    ["Thermodynamics", ""],
    ["Machine Design", ""],
    ["Heat Transfer", ""],
    ["Material Engineering", ""]
];

var eduTable = $("#education-table");
for (let i = 0; i < table.length; i++) {
    var tr = $("<tr>");
    for (let j = 0; j < table[i].length; j++) {
        var td1Tag = $("<td>").text(table[i][j]);
        td1Tag.appendTo(tr);
    }
    tr.appendTo(eduTable);
}
