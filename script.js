const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let selectedrow = null;
let userName = document.getElementById("userName");
let email = document.getElementById("email"); 
let phone = document.getElementById("phone");

    // when user click on submit button
    function enterData() {

        let studentData = fetchData();
        if (selectedrow == null) {
        
        addData(studentData);
        }
        
        else{
        
            updateData(studentData);
        }
           clearForm();
        }
    // a function to fetch the data
    function fetchData() {
            let studentData = {};
                studentData.userName = userName.value;
                studentData.email = email.value;
                studentData.phone = phone.value;
                studentData.city= city.value;
    
                return studentData;
    }
    
    // function to add data inside the table
    
    function addData(data) {
        let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(0);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.userName;
        cell2 = newRow. insertCell(1);
        cell2.innerHTML = data.email;
        cel13 = newRow.insertCell(2);
        cel13.innerHTML = data.phone;
       
        cel14= newRow.insertCell(3);
        cel14.innerHTML = `<button onclick="editData(this)">EDIT</button>
        <button onclick="deleteData(this)">DELETE</button> `;
    }
    // function to clear form
    function clearForm(){
        userName.value="";
        email.value="";
        phone.value="";
        city.value="";
        selectedrow=null;
    }

        // update function
function updateData(data){
    selectedrow.cells[0].innerHTML= data.userName; 
    selectedrow.cells[1].innerHTML= data.email;
    selectedrow.cells[2].innerHTML= data.phone; 
   
}
    
    // delete function
function deleteData(btn){
    if(confirm("Are u sure u want to delete the data")){
    row = btn.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
}
    
    // edit functionality
function editData(btn){
    selectedrow = btn.parentElement.parentElement;
    userName.value= selected row.cells[0].innerHTML;
    email.value= selected row.cells[1].innerHTML;
    phone.value= selected row.cells[2].innerHTML;
   
}