export const onLogin =(email,password)=>{
    try {
        fetch("http://localhost:3000/login",{
        method:"POST",
        body:{email,password}
        })
        .then(res=>console.log(res.msg))
        // per l'autenticazione
        
        
      } catch (error) {
        
        console.error(error);
      }
}
