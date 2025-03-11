function hideDiv() {
    document.getElementById("div1").style.display = "none";
}


function showDiv() {
    document.getElementById("div1").style.display = "block";
}

function toggleDiv() {
    let div = document.getElementById("div1");
    if (div.style.display === "none") {
        showDiv();
    } else {
        hideDiv();
    }
}