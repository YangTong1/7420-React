import React, {Component} from 'react';
import axios from "axios";

class UpdateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:"",
            password:"",
            email:"",
            telephone:"",
            first_name:"",
            last_name:"",
            address:"",
            groups:"",
            myinfo:""


        }
        this.showinfo(this.geturl())

    }

    HandleChange = (e) =>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
    }

    showinfo = (item) =>{
        axios
      .get("/drf/user/" + item +"/")
      .then(
          (res) => this.setState(
              {
                  myinfo: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
    }

    update = (item) =>{
        axios.put("drf/user/" +item +"/", {
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

    geturl = () => {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams.searchParams.toString().split('=')[0];
        // console.log("pathname:", pathname);
        return pathname
    }


    render() {
        return (
            <div>
                <header className="pageheader">
                            <span className="logo-title">Update User</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>username:</label>
                            <div className="col-sm-4">
                                <input id="username"  className="form-control" type="text" placeholder={this.state.myinfo.username} onChange={this.HandleChange}></input>
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
                                <input id="email"  className="form-control" type="text" placeholder={this.state.myinfo.email} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>firstname:</label>
                            <div className="col-sm-4">
                                <input id="first_name"  className="form-control" type="text" placeholder={this.state.myinfo.first_name} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>lastname:</label>
                            <div className="col-sm-4">
                                <input id="last_name"  className="form-control" type="text" placeholder={this.state.myinfo.last_name} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>telephone:</label>
                            <div className="col-sm-4">
                                <input id="telephone"  className="form-control" type="text" placeholder={this.state.myinfo.tel} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>address:</label>
                            <div className="col-sm-4">
                                <input id="address"  className="form-control" type="text" placeholder={this.state.myinfo.addr} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>group:</label>
                            <div className="col-sm-4">
                                <select id="groups" className="form-control" onChange={this.HandleChange}>
                                    <option disabled selected style={{color: "#999999"}}>{this.state.myinfo.groupname}</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Lecturer">Lecturer</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={()=>this.update(this.geturl())}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default UpdateUser;