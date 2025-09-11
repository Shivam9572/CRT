let products=()=>{
    return "Fetching all products";

}
let productById=(id)=>{
    return `Fetching user with ID: ${id}`;
}
let add=(deatils)=>{
    console.log(deatils);
return `${deatils.name}`;
}
module.exports={products,productById,add};