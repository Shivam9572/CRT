
function addBookInPurchaselist(details) {
    let purchaseList=document.getElementById("purchase_books_list");
    let bookDiv=document.createElement("div");
    bookDiv.className="purchaseBook";
    bookDiv.id=details.id;
    bookDiv.innerHTML=`<p>Book Name:${details.title}</p><br><p>Book Taken on :${details.createdAt}IST</p><br>
    <p>Book Return Date : ${details.returned}</p><br>
    <p>Current Fine : ${details.fine}rs</p> `
    let btn=document.createElement("button");
    btn.textContent="return book";
    btn.className="returnBtn";
    
    btn.addEventListener("click",returnBookBtn);
    bookDiv.appendChild(btn);
    purchaseList.appendChild(bookDiv);
}
async function showAllPurchaseBooks() {
  try {
    let books=await axios.get("http://localhost:4000/library");
    
    for(let i=0;i<books.data.length;i++){
        addBookInPurchaselist(books.data[i]);
    }
  } catch (error) {
    console.log(error);
  }
    
}
showAllPurchaseBooks();



let form = document.getElementById("submitForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
        let formData=new FormData(e.target);
        let obj=Object.fromEntries(formData.entries());
        
        try {
            let result = await axios.post("http://localhost:4000/library", obj);
            addBookInPurchaselist(result.data);
            

        } catch (error) {
            console.log(error);
        }
    } 
        
)
async function returnBook(book){
    try {
       
       let result=await axios.delete(`http://localhost:4000/library/${book.id}`,{
        data:{
            title:book.title,
            fine:book.fine
        }
       }) ;
       returnBookList(result.data)
    } catch (error) {
         console.log(error);
    }
}
let returnBookBtn=async(e)=>{
   let id=e.target.parentNode.id;
   try {
    let book=await axios.get(`http://localhost:4000/library/${id}`);
    if(book.data.fine>0){
        console.log(fine);
    
    }else{
        returnBook(book.data);
    }
   } catch (error) {
    
   }
   
}
function returnBookList(details){
    const returnBooks=document.getElementById("return_book_list");
        
    let bookDiv=document.createElement("div");
    bookDiv.className="returnBook";
    bookDiv.className="returnBook";
    bookDiv.innerHTML=`<p>Book Name:${details.title}</p><br>
    <p>book returned:${details.createdAt}IST</p><br>
    <p> Fine : ${details.fine}rs</p> <hr>`
    
  
    
    returnBooks.appendChild(bookDiv);
}
async function getReturnBooks(){
    try {
        let result=await axios.get("http://localhost:4000/library/returnbooks/all");
        for(let i=0;i<result.data.length;i++){
            returnBookList(result.data[i]);
        }
    } catch (error) {
        
    }
}
getReturnBooks();