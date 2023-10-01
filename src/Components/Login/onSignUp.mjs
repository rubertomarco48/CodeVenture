export const onLogin =(name,email,password,)=>{
    fetch("http://localhost:3000/newuser",{
        method:"POST",
        body:{name,email,password}
    })
}


/* app.post("/newuser",setNewUser) */