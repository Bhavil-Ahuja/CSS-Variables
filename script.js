var spacing = document.getElementById("spacing");
var blur = document.getElementById("blur");
var change = document.getElementById("Desired-color");

spacing.addEventListener("input", function(e) {
    document.querySelector("img").style.padding = e.target.value + "px";
})

blur.addEventListener("input", function(e) {
    var blurValue = 'blur(' + blur.value + 'px)';
    document.querySelector("img").style.filter = blurValue;
})

change.addEventListener("input", function() {
    document.querySelector("span").style.color = change.value;
    document.querySelector("img").style.backgroundColor = change.value;
})