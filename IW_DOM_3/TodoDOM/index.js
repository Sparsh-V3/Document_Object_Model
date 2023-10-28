let myForm = document.querySelector("form"),
    inpTask = document.getElementById("task"),
    priority = document.getElementById("priority"),
    AllData = [];

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let Data = {};
    Data.input1 = inpTask.value;
    Data.input2 = priority.value;
    AllData.push(Data);

    document.querySelector("tbody").innerHTML = null;    

    AllData.map((ele)=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
    
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        row.append(td1,td2);
        document.querySelector("tbody").append(row);
    });
});
