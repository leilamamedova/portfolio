function myFunction() {
    var x = document.getElementById("box");
    var y = document.getElementById("nav-icon");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function myClose() {
    var x = document.getElementById("box");
    var y = document.getElementById("nav-icon");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block ";
    }
}