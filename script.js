function wordChecker() {
    let enteredString = document.getElementById("inputField").value;
    let noSpaces = enteredString.replace(/\s/g,"");
    let noSpacesAndSpecial = noSpaces.replace(/[^\w\s]/gi,'');
    let allLowerCase = noSpacesAndSpecial.toLowerCase();
    let split = allLowerCase.split('');
    let reverse = split.reverse();
    let newString = reverse.join('');
    if(newString === allLowerCase) {
        document.getElementById("displayYes").textContent = "Yes";
        setTimeout("location.href='index.html'",2000);
    }else{
        document.getElementById("displayNo").textContent = "No";
        setTimeout("location.href='index.html'",2000);
    }
}

document.getElementById("submitButton").addEventListener("click", wordChecker);