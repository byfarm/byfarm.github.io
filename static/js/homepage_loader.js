// depends on jquery
let baseUrl = "https://byfarm.github.io/";
$.ajax({
    url: "pages/_base.html",
    headers: {"Accept": "application/html"},
    beforeSend: function (xhr) {
        xhr.withCredentials = true;
    },
    type: "GET",
    success: function (data) {
        $("#main").appendTo(data);
    }
})
