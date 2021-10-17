function Copy() {
    var copyText = document.getElementById("number");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}  