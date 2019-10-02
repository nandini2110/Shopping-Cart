


$(".course-list").click(function () {
    var rate = $(this).find("p.card-text").text();
    var name = $(this).find("h4.card-title").text();
    console.log(rate);
    console.log(name);
    localStorage.setItem("key1", name);
    localStorage.setItem("key2", rate);
    addCart();
});

function addCart() {
    var a1 = localStorage.getItem("key1");
    var a2 = localStorage.getItem("key2");
    $("#main").append(`<tr>
    <td>${a1}</td>
    <td>${a2}</td>
    <td>
        <input type="button" class="btn btn-indigo btn-sm m-0 delete" value="x">
        
    </td>
</tr>`)
    var size = $("tr").length;
    $("#sidenum").text(size - 1);
}

$(".clear").click(function () {
    $("#main").find("*").remove();
    var size = $("tr").length;
    $("#sidenum").text(size - 1);
});


$(document).on("click", ".delete", function () {
$(this).parents("tr").remove();
var size = $("tr").length;
$("#sidenum").text(size - 1);
});

