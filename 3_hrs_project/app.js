

function dispalyExpense(){
    let list=JSON.parse(localStorage.getItem("expenseList"));
    if(list){
        for(let i=0;i<list.length;i++){
       addExpenseInList(list[i]);
      
    }
     updateIdInList();
    }
}
dispalyExpense();
let handleSubmit=(event)=>{
    event.preventDefault();
    
    let formData=new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        if(sessionStorage.getItem("id")){
            updateExpense(formObject);
        }else{
             addExpenseInLocalStroage(formObject);
        addExpenseInList(formObject);
        }
      
}

function addExpenseInList(details){

    let lists=document.getElementById("lists");
    let newLi=document.createElement("li");
    newLi.textContent=`${details.e_amount}-${details.category}-${details.description}`;
    let delBtn=document.createElement("button");
    delBtn.textContent="Delete Expense";
    delBtn.addEventListener("click",(event)=>{
        deleteExpense(event);
    })
    let editBtn=document.createElement("button");
    editBtn.textContent="Edit Expense";
    editBtn.addEventListener("click",(event)=>{
        editExpense(event);
    });
    newLi.id=JSON.parse(localStorage.getItem("expenseList")).length-1;
    newLi.appendChild(delBtn);
    newLi.appendChild(editBtn);
    lists.append(newLi);
 
}
function addExpenseInLocalStroage(details){
        if(!localStorage.getItem("expenseList")){
        localStorage.setItem("expenseList",JSON.stringify([details]));
     }else{
        let lists=JSON.parse(localStorage.getItem("expenseList"));
        let newLists=[...lists,details];
        localStorage.setItem("expenseList",JSON.stringify(newLists));
     }
}
function deleteExpense(event){
  let par=event.target.parentNode;
  let lists=document.getElementById("lists");
  lists.removeChild(par);
  let expenseList=JSON.parse(localStorage.getItem("expenseList"));
  let newLists=[];
  for(let i=0;i<expenseList.length;i++){
     if(i==par.id){
        continue;
     }
     newLists.push(expenseList[i]);
  }
  console.log(newLists);
  localStorage.setItem("expenseList",JSON.stringify(newLists));
  updateIdInList();
}
function editExpense(event){
     
      let li=event.target.parentNode;
      let submitBtn=document.getElementById("formBtn");
      submitBtn.textContent="Edit";
      let details=JSON.parse(localStorage.getItem("expenseList"))[li.id];
      document.getElementById("e_amount").value=details.e_amount;
      document.getElementById("description").value=details.description;
      document.getElementById("category").value=details.category;
      
      sessionStorage.setItem("id",`${li.id}`);
      

}
function updateExpense(details){
   let id=sessionStorage.getItem("id");
   sessionStorage.removeItem("id");
   let  lists=JSON.parse(localStorage.getItem("expenseList"));
   lists[id]=details;
   localStorage.setItem("expenseList",JSON.stringify(lists));
   document.getElementById(`${id}`).textContent=`${details.e_amount}-${details.category}-${details.description}`;
    let delBtn=document.createElement("button");
    delBtn.textContent="Delete Expense";
    delBtn.addEventListener("click",(event)=>{
        deleteExpense(event);
    })
    let editBtn=document.createElement("button");
    editBtn.textContent="Edit Expense";
    editBtn.addEventListener("click",(event)=>{
        editExpense(event);
    });
    document.getElementById(`${id}`).append(delBtn,editBtn);
   document.getElementById("formBtn").textContent="submit";
}
function updateIdInList(){
    let lists=document.getElementsByTagName("li");
    for(let i=0;i<lists.length;i++){
        lists[i].id=i;
    }
}