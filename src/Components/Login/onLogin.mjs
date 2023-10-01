export const onLogin =(email,password)=>{
    try {
        console.log(`questa ${email} e questa ${password}`);
        const user={
          email:email,
          password:password
        }
        fetch("http://localhost:3000/login",{
        method:"POST",
        body:JSON.stringify(user)
        })
        .then(res=>res.json)
        .then(res=>console.log(res.body))
        // per l'autenticazione
        
        
      } catch (error) {
        
        console.error(error);
      }
}
