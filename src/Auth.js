import * as jwt  from 'jsonwebtoken';


export function isAdmin(){

    const checkjwt = (token) => {
        const strToken = jwt.decode(token);
        if (strToken.admin === '1'){
            return true;
        }else{
            return false;
        }
    }
    return (
        (getToken() != null) ?
          checkjwt(getToken())
        : 
        false
    )
}
export function setToken(token){
    localStorage.setItem('@myapp/token',token)
}
export function getToken(){
  return localStorage.getItem('@myapp/token')
}
export function deleteToken(){
      localStorage.removeItem('@myapp/token')
}

