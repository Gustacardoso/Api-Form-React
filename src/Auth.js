
export function isAdmin(){
    return (
        (getToken() != null) ?
        true
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

