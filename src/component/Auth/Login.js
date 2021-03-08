import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";    //useSelector for access store
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {login} from "../../store/action/Auth";
function Login(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("amaan@gmail.com");
    const [password, setPassword] = useState("amaan");

    const formHandler = (e) => {
        e.preventDefault()
        console.log(email,password)
        dispatch(login({email, password}));
    };
    const user=useSelector(state=>state)
    console.log('user----------')
    console.log(user.authReducer)
    if(user.authReducer.message)
    alert(user.authReducer.message)
    console.log('user----------')
    return (
      <>
          <div className="col-md-12 ">
              <form onSubmit={formHandler}>
                  <div className="col-md-4 mx-auto mt-5">
                      <h5 className="text-center ">Login </h5>
                      <input
                          className="form-control  mb-2"
                          type="text"
                          // onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          aria-label="default input example"
                      />
                      <input
                          className="form-control"
                          type="text"
                          placeholder="Password"
                          // onChange={(e) => setPassword(e.target.value)}
                          aria-label="default input example"
                      />
                      <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block mt-2"
                      >
                          Login
                      </button>
                      <p>
                          <Link to="/register">dont have account</Link>
                      </p>
                  </div>
              </form>
          </div>

          </>
    );
}

export default Login;