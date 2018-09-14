document.addEventListener("DOMContentLoaded", function() {
    let boxButton = document.createElement('button');
    let btnText = document.createTextNode("Add Square");
    boxButton.appendChild(btnText);
    document.body.appendChild(boxButton);
    
    function divMaker() {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "boxes");
        newDiv.setAttribute("id", "boxDiv1");
        document.body.appendChild(newDiv);
    }
    
    boxButton.onclick = divMaker;

    if (document.newDiv.id = "boxDiv1") {
        document.newDiv.id = ("boxDiv" + 1);
    }
});