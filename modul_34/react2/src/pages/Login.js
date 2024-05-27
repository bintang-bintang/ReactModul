import React from "react"
import axios from "axios"
// import { event } from "jquery";
import { Navigate} from "react-router-dom";


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            statusLogin: false,

        }
    }

    prosesLogin = event => {
        event.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password,
        }

        let url = "http://localhost:8000/auth"
        axios.post(url, data).then(res => {
            this.setState({statusLogin: res.data.logged})

            if (this.state.statusLogin) {
                let userdata = res.data.data;
                let token = res.data.token;
                localStorage.setItem("userdata", JSON.stringify(userdata));
                localStorage.setItem("token", token);
                window.location.href = '/blogs';
            }else{
                alert("gagal login")
            }

        }).catch(e => console.log(e))

    }

    render() {
        return (
            <>
                <div class="container m-5">
                    <h1>Login</h1>
                    <form onSubmit={e => this.prosesLogin(e)}>
                        Email:<br/>
                        <input type="email" value={this.state.email} 
                        onChange={e => this.setState({email: e.target.value})} 
                        className="form-control"/> <br/><br/>
                        
                        Password:<br/>
                        <input type="password" value={this.state.password} 
                        onChange={e => this.setState({password: e.target.value})} 
                        className="form-control"/> <br/><br/>

                        <button type="submit"
                        className="btn btn-success">Login</button>

                    </form>
                </div>
            </>
        )
    }
}

export default Login;