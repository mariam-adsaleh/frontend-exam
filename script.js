window.onload = () => {

    let foodname = document.getElementById("foodname");
    var foodName = document.getElementById("foodname").value;
    var foodType = document.querySelector(
        'input[name="foodType"]:checked'
    ).value;


};
// var selectedRadioId;
// function getSelectedRadioId() {
//     var radioButtons = document.getElementsByName('options');
//     for (var i = 0; i < radioButtons.length; i++) {
//       if (radioButtons[i].checked) {
//         selectedRadioId = radioButtons[i].id;
//         console.log("Selected Radio ID:", selectedRadioId);
//         break; 
//       }
//     }
//     return selectedRadioId;
//   }
function distributeFood() {
    var foodName = document.getElementById("foodname").value;
    var foodType = document.querySelector(
        'input[name="foodType"]:checked'
    ).value
    if (!foodname) {
        alert("Please enter a food name.");
        return;
    }
    var listItem = document.createElement("div");
    listItem.textContent = foodName;

    if (foodType === "fruits") {
        document.getElementById("fruitsList").appendChild(listItem);
    } else if (foodType === "legumes") {
        document.getElementById("legumesList").appendChild(listItem);
    }

}
