let form = document.querySelector("form"),
    person = document.getElementById("name"),
    empID= document.getElementById("employeeID"),
    dept = document.getElementById("department"),
    exp = document.getElementById("exp"),
    email = document.getElementById("email"),
    num = document.getElementById("mbl"),
    del = document.querySelector("button"),
    AllData = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let Data = {};
    Data.input1 = person.value;
    Data.input2 = empID.value;
    Data.input3 = dept.value;
    Data.input4 = exp.value;
    Data.input5 = email.value;
    Data.input6 = num.value;
    AllData.push(Data);

    document.querySelector("tbody").innerHTML = null;    

    AllData.map((ele)=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("button");

    
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td8.innerText = "Delete";

        if(td4.innerText > 5){
            td7.innerText = "Senior";
            row.append(td1,td2,td3,td4,td5,td6,td7,td8);
            document.querySelector("tbody").append(row);
        }
        else if(td4.innerText <= 5 && td4.innerText >= 2){
            td7.innerText = "Junior";
            row.append(td1,td2,td3,td4,td5,td6,td7,td8);
            document.querySelector("tbody").append(row);
        }
        else{
            td7.innerText = "Fresher";
            row.append(td1,td2,td3,td4,td5,td6,td7,td8);
            document.querySelector("tbody").append(row);
        }
        td8.addEventListener("click", (event)=>{
            event.target.parentNode.remove();
            AllData.pop(Data);
        })
    });
});
