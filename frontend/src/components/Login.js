import React, {Component} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
    }

    HandleChange = (e) =>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
    }

    login = () =>{
        axios.post("/login/", {
                username:this.state.username,
                password:this.state.password
            }

        ).then(
            res => {
                alert(res.data.msg)

                window.location.href = '/showuser'
                console.log(res)
            }
        ).catch(
            err => {
                alert("error!")
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div>
                <header className="pageheader">
                            <span className="logo-title">Login</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>username:</label>
                            <div className="col-sm-4">
                                <input id="username"  className="form-control" type="text"
                                       placeholder="username" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>password:</label>
                            <div className="col-sm-4">
                                <input id="password"  className="form-control" type="password"
                                       placeholder="password" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={this.login}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default Login;