let signupForm=document.getElementById("signupForm");
signupForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let formData=new FormData(e.target);
    let formObj=Object.fromEntries(formData.entries());

    try {
        await axios("http://localhost:4000/users",obj);
    } catch (error) {
        let err=document.getElementById("error");
        err.textContent="Error";
    }
})