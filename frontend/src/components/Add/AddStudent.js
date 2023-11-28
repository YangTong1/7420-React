import React, {Component} from 'react';
import axios from "axios";

class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            student_id:"",
            DOB:"",
            attend:"",
            user:"",
            mycourse:"",
            myclass:""
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
        axios.post("drf/student/", {
                student_id:this.state.student_id,
                mycourse:this.state.mycourse,
                DOB:this.state.DOB,
                myclass:this.state.myclass,
                attend:this.state.attend,
                user:this.state.user
                // student:this.state.student
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
                            <span className="logo-title">Add Student</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>student_id:</label>
                            <div className="col-sm-4">
                                <input id="student_id"  className="form-control" type="text"
                                       placeholder="student_id" onChange={this.HandleChange}></input>
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
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>attend:</label>
                            <div className="col-sm-4">
                                <input id="attend"  className="form-control" type="text"
                                       placeholder="attend" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course:</label>
                            <div className="col-sm-4">
                                <input id="mycourse"  className="form-control" type="text"
                                       placeholder="please use , to divide course name" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>class:</label>
                            <div className="col-sm-4">
                                <input id="myclass"  className="form-control" type="text"
                                       placeholder="please use , to divide course name" onChange={this.HandleChange}></input>
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
                        <br/><br/>
                        {/*<div className="form-group">*/}
                        {/*    <label className="col-sm-4 control-label" style={{textAlign:"right"}}>student:</label>*/}
                        {/*    <div className="col-sm-4">*/}
                        {/*        <input id="student"  className="form-control" type="text"*/}
                        {/*               placeholder="please use , to div each student name" onChange={this.HandleChange}></input>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<br/><br/><br/>*/}
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={this.add}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default AddStudent;