
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../api";
import { useToken } from "../hooks/useToken";
import styles from "./Form.module.css";



const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
 const {changeToken} = useToken()

 useEffect(() => {
 
}, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    const userData = {
      'username': username,
      'password': password
  }
  const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
  const requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userData)
}
fetch(`${apiUrl}/auth`, requestConfig).then(
  
  response => {
    
    if(response.ok){
      response.json().then(
        data => {
          changeToken(data.token)
          navigate('/home')
          // localStorage.setItem('token',data.token)
          // console.log(response)
        }
      )
    }else{
      setPassword("")
      setUsername("")
      alert('usuario ou senha incorreta')
      console.log(password)
      console.log(username)
    }
  }
)
console.log("olha eu aqui")
  };
  
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit" >
              
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
