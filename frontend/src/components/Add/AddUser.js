import React, {Component} from 'react';
import axios from "axios";

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:"",
            email:"",
            telephone:"",
            first_name:"",
            last_name:"",
            address:"",
            groups:""
        }
    }

    HandleChange = (e) =>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
    }

    add = () =>{
        axios.post("drf/user/", {
                username:this.state.username,
                password:this.state.password,
                email:this.state.email,
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                groups:this.state.groups,
                telephone:this.state.telephone,
                address:this.state.address
            }

        ).then(
            res => {
                alert(res.data.msg)
            }
        ).catch(
            err => {
                alert("error")
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div>
                <header className="pageheader">
                            <span className="logo-title">Add User</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>username:</label>
                            <div className="col-sm-4">
                                <input id="username"  className="form-control" type="text" placeholder="username" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>password:</label>
                            <div className="col-sm-4">
                                <input id="password"  className="form-control" type="text" placeholder="password" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>email:</label>
                            <div className="col-sm-4">
                                <input id="email"  className="form-control" type="text" placeholder="email" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>firstname:</label>
                            <div className="col-sm-4">
                                <input id="first_name"  className="form-control" type="text" placeholder="firstname" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>lastname:</label>
                            <div className="col-sm-4">
                                <input id="last_name"  className="form-control" type="text" placeholder="lastname" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>telephone:</label>
                            <div className="col-sm-4">
                                <input id="telephone"  className="form-control" type="text" placeholder="telephone" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>address:</label>
                            <div className="col-sm-4">
                                <input id="address"  className="form-control" type="text" placeholder="address" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>group:</label>
                            <div className="col-sm-4">
                                <select id="groups" className="form-control" onChange={this.HandleChange}>
                                    <option disabled selected style={{color: "#999999"}}>select group</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Lecturer">Lecturer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={this.add}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default AddUser;