
function addUserInLi(details) {
    const ul = document.getElementById("users");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", deleteUser);
    btn.textContent = "Delete";
    let editBtn = document.createElement("button");
    editBtn.addEventListener("click", editUser);
    editBtn.textContent = "Edit";
    li.innerText = details.name + "-" + details.email + "-" + details.phone;
    li.id = details.id;
    li.appendChild(editBtn);
    li.appendChild(btn);
    ul.appendChild(li);
}
async function showAllUsers() {

    axios.get("http://localhost:4000/users").then((res) => {
        res.data.forEach(element => {

            addUserInLi(element);

        });

    }).catch((err) => {
        console.log(err);
    })
}
showAllUsers();

let deleteUser = async (e) => {
    let id = e.target.parentNode.id;
    try {
        let result = await axios.delete("http://localhost:4000/users/" + id);
        let li = document.getElementById(id);
        let ul = document.getElementById("users");
        ul.removeChild(li);

    } catch (error) {
        console.log(error);

    }
}
let editUser = async (e) => {
    let id = e.target.parentNode.id;
    localStorage.setItem("edit", `${id}`);
    let btn = document.getElementById("submit");
    btn.textContent = "Edit";
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    try {
        let result = await axios.get("http://localhost:4000/users/" + id);

        nameInput.value = result.data.name;
        emailInput.value = result.data.email;
        phoneInput.value = result.data.phone;

    } catch (error) {
        console.log(error);
    }
}

let form = document.getElementById("submitForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("edit")) {
        let formData = new FormData(e.target);
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        }

        );


        try {
            let result = await axios.post("http://localhost:4000/users", obj);
            addUserInLi(result.data);
            let nameInput = document.getElementById("name");
            let emailInput = document.getElementById("email");
            let phoneInput = document.getElementById("phone");
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";

        } catch (error) {
            console.log(error);
        }
    } else {
        let id = localStorage.getItem("edit");
        localStorage.removeItem("edit");
        console.log(id);
        let formData = new FormData(e.target);
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        }

        );
        try {

            let details = await axios.put("http://localhost:4000/users/" + id, obj);
            let btn = document.getElementById("submit");
            btn.textContent = "add";
            details = await axios.get("http://localhost:4000/users/" + id);
           
            let li = document.getElementById(id);
            
             btn = document.createElement("button");
            btn.addEventListener("click", deleteUser);
            btn.textContent = "Delete";
            let editBtn = document.createElement("button");
            editBtn.addEventListener("click", editUser);
            editBtn.textContent = "Edit";
            li.innerText = details.data.name + "-" + details.data.email + "-" + details.data.phone;
            
            li.appendChild(editBtn);
            li.appendChild(btn);
            let nameInput = document.getElementById("name");
            let emailInput = document.getElementById("email");
            let phoneInput = document.getElementById("phone");
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";


        } catch (error) {

        }
    }
})