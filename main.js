let table = document.getElementById("contact-info-table");
function insertRow(){
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    c1.innerText = "Name";
    c2.innerText = "Email";
    row.appendChild(c1);
    row.appendChild(c2);
    table.appendChild(row);
}
function deleteRow(){

}