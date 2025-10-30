let signupForm=document.getElementById("signupForm");
signupForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    let formData=new FormData(e.target);
    let formObj=Object.fromEntries(formData.entries());
  let err=document.getElementById("error");
    try {
       let respond= await axios.post("http://localhost:4000/user/signup",formObj);
       console.log(respond.data);
       if(respond.data.failed){
          err.textContent=respond.data.failed;
       }
       if(respond.data.sucess){
          window.location.href="http://localhost:3000/";
       }
       
       
    } catch (error) {
        
        err.textContent=error.message;
    }
})