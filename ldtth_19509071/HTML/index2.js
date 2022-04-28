$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    })
    $("#Name").blur(function() {
        let mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        let chuoiKT = $("#Name").val();
        if (mauKT.test(chuoiKT) == true) {
            alert("đúng rồi");
        } else {
            alert("sai rồi");
        }
    })
});