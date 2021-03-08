import Api from './api'
const AuthService = {
    login: (data) => {
        console.log(data)
        console.log("2 from authservice");
        return Api.post("/vendorlogin", data)
            .then((data) => {
                console.log("data from authservice");
                console.log(data)
                //data contains the response from api
                return data;
            })
            .catch((err) => {
                console.log(err.response)
                console.log("err from authservice");
                return err.response;
            });
    }
}
export default AuthService