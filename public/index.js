sessionStorage.removeItem("pay");
function addBookInPurchaselist(details,parent) {
    const options = {
        day: '2-digit',
        month: 'short', // "Jan" instead of "January"
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    };
    details.createdAt = new Date(details.createdAt).toLocaleString("en-IN", options);
    details.returned = new Date(details.returned).toLocaleString("en-IN", options);
    
    let bookDiv = document.createElement("div");
    bookDiv.className = "purchaseBook";
    bookDiv.id = details.id;
    bookDiv.innerHTML = `<span>Book Name:</span><p>${details.title}</p><br><br><p><span>Book Taken on :</span>${details.createdAt} IST</p><br><br>
    <p><span>Book Return Date :</span> ${details.returned}</p><br><br>
     `;
    let fine = document.createElement("p");
    fine.innerHTML = `<span>Fine : </span> ${details.fine}<br>`;
    if (details.fine > 0) {
        fine.className = "fine";
    }
    bookDiv.appendChild(fine);

    let btn = document.createElement("button");
    btn.textContent = "return book";
    btn.className = "returnBtn";

    btn.addEventListener("click", returnBookBtn);
    bookDiv.appendChild(btn);
    parent.appendChild(bookDiv);
}
async function showAllPurchaseBooks() {
    try {
        let books = await axios.get("http://localhost:4000/library");
        let purchaseList = document.getElementById("purchase_books_list");
        for (let i = 0; i < books.data.length; i++) {
            addBookInPurchaselist(books.data[i],purchaseList);
        }
    } catch (error) {
        console.log(error);
    }

}
showAllPurchaseBooks();



let form = document.getElementById("submitForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let obj = Object.fromEntries(formData.entries());

    try {
        let result = await axios.post("http://localhost:4000/library", obj);
        alert(`${result.data.title} add successfuly`);
        document.getElementById("name").value="";
        let purchaseList = document.getElementById("purchase_books_list");
        addBookInPurchaselist(result.data,purchaseList);


    } catch (error) {
        console.log(error);
    }
}

)
async function returnBook(book) {
    try {

        let result = await axios.delete(`http://localhost:4000/library/${book.id}`, {
            data: {
                title: book.title,
                fine: book.fine
            }
        });
        alert(`${result.data.title} return successfully`);
        sessionStorage.removeItem("pay");
        let bookBox = document.getElementById(book.id);
        let bookList = document.getElementById("purchase_books_list");
        bookList.removeChild(bookBox);
        returnBookList(result.data);
    } catch (error) {
        console.log(error);
    }
}
let cancelPay=(parent)=>{
   
    parent.remove();
    sessionStorage.removeItem("pay");
}
let returnBookBtn = async (e) => {
    let id = e.target.parentNode.id;
   

    try {
         if(sessionStorage.getItem("pay")){
                let parent=document.getElementById(sessionStorage.getItem("pay")).children;
                cancelPay(parent[12]);
                sessionStorage.setItem("pay",id);
                
        }
        let book = await axios.get(`http://localhost:4000/library/${id}`);
        if (book.data.fine > 0) {
            let bookBox = document.getElementById(id);
            
            let payBtn = document.createElement("button");
            payBtn.textContent = "Pay Now";
            payBtn.id = "pay";
            payBtn.addEventListener("click", () => returnBook(book.data));
            

            let cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.id = "pay";
             cancelBtn.addEventListener("click",(e)=>cancelPay(e.target.parentElement));

            let payDiv = document.createElement("div");
            payDiv.className = "paydiv";
            payDiv.appendChild(document.createElement("hr"));
            let amount=document.createElement("p");
            amount.className="fine";
            
            amount.innerHTML=`<span>Amount : </span> ${book.data.fine} `;
            payDiv.appendChild(amount);
            payDiv.appendChild(payBtn);
            payDiv.appendChild(cancelBtn);

            bookBox.appendChild(payDiv);
            sessionStorage.setItem("pay", `${book.data.id}`);
            
            


        } else {
            returnBook(book.data);
        }
    } catch (error) {
        console.log(error);
    }

}
function returnBookList(details) {
    const returnBooks = document.getElementById("return_book_list");

    let bookDiv = document.createElement("div");
    bookDiv.className = "returnBook";
    bookDiv.className = "returnBook";
    const options = {
        day: '2-digit',
        month: 'short', // "Jan" instead of "January"
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    };
    details.createdAt = new Date(details.createdAt).toLocaleString("en-IN", options);
    bookDiv.innerHTML = `<p><span>Book Name:</span>${details.title}</p><br>
    <p><span>book returned:</span>${details.createdAt} IST</p><br>
     `;
     let fine = document.createElement("p");
    fine.innerHTML = `<span>Fine :</span> ${details.fine}`;
    if (details.fine > 0) {
        fine.className = "fine";
    }
    bookDiv.appendChild(fine);
    // bookDiv.appendChild(document.createElement("hr"));



    returnBooks.appendChild(bookDiv);
}
async function getReturnBooks() {
    try {
        let result = await axios.get("http://localhost:4000/library/returnbooks/all");
        for (let i = 0; i < result.data.length; i++) {
            returnBookList(result.data[i]);
        }
    } catch (error) {

    }
}
let searchBtn=document.getElementById("search");
searchBtn.addEventListener("click",async(e)=>{
    let booksDiv=document.getElementById("purchase_books_list");
    booksDiv.style.display='none';
    let input=document.getElementById("name").value;
    let booksBySearch=await axios.get(`http://localhost:4000/library?search=${input}`);
            document.getElementById("name").value="";

    let oldDiv=document.getElementById("search_book");
    if(oldDiv){
        oldDiv.remove();
    }
    let bookListDiv=document.createElement("div");
    bookListDiv.id="search_book";
    for(let i=0;i<booksBySearch.data.length;i++){
        addBookInPurchaselist(booksBySearch.data[i],bookListDiv);
    }
    let searchDiv=document.getElementById("search_book_list");
    searchDiv.appendChild(bookListDiv);
    searchDiv.style.display="block";

});
let closeBtn=document.getElementById("close");
closeBtn.addEventListener("click",(e)=>{
    let search_book=document.getElementById("search_book");
    search_book.remove();
    let searchDiv=document.getElementById("search_book_list");
    searchDiv.style.display="none";
    
    let booksDiv=document.getElementById("purchase_books_list");
    booksDiv.style.display="flex";

})
getReturnBooks();