import React, {Component} from 'react';
import axios from "axios";

class AddLecturer extends Component {
    constructor() {
        super();
        this.state = {
            staff_id:"",
            DOB:"",
            user:""
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
        axios.post("drf/lecturer/", {
                staff_id:this.state.staff_id,
                DOB:this.state.DOB,
                user:this.state.user
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
                            <span className="logo-title">Add Lecturer</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>staff id:</label>
                            <div className="col-sm-4">
                                <input id="staff_id"  className="form-control" type="text"
                                       placeholder="staff id" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>DOB:</label>
                            <div className="col-sm-4">
                                <input id="DOB"  className="form-control" type="date"
                                       placeholder="DOB" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>username:</label>
                            <div className="col-sm-4">
                                <input id="user"  className="form-control" type="text"
                                       placeholder="username" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={this.add}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default AddLecturer;