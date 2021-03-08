import AuthService from "../../services/AuthService";
export const LOGIN="LOGIN"

export const login=(params)=>dispatch=>{

   return  AuthService.login(params)
       .then(data=> {
           console.log('from authService action')
           console.log(data)
           dispatch({type:LOGIN,payload:data})
       })
       .catch((e)=> {
           console.log('from authService  action catch block')
           console.log(e)
       })

}