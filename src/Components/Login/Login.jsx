import { useState } from 'react';
import { onLogin } from './onLogin.mjs';
import {onSignUp} from './onSignUp.mjs'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try {
      // per l'autenticazione
      await onLogin(email,password);
      
    } catch (error) {
      
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      // per la registrazione
      onSignUp(email,password) 
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login o Registrazione</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Accedi</button>
      <button >Registrati</button>
    </div>
  );
}

export default Login;
