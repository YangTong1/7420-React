import React, {Component} from 'react';
import axios from "axios";

class AddClass extends Component {
    constructor() {
        super();
        this.state = {
            number:"",
            course:"",
            lecturer:"",
            semester:"",
            student:""
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
        axios.post("drf/class/", {
                number:this.state.number,
                course:this.state.course,
                semester:this.state.semester,
                lecturer:this.state.lecturer,
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
                            <span className="logo-title">Add Class</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>number:</label>
                            <div className="col-sm-4">
                                <input id="number"  className="form-control" type="text"
                                       placeholder="number" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>semester:</label>
                            <div className="col-sm-4">
                                <input id="semester"  className="form-control" type="text"
                                       placeholder="semester" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course:</label>
                            <div className="col-sm-4">
                                <input id="course"  className="form-control" type="text"
                                       placeholder="course name" onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>lecturer:</label>
                            <div className="col-sm-4">
                                <input id="lecturer"  className="form-control" type="text"
                                       placeholder="lecturer" onChange={this.HandleChange}></input>
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

export default AddClass;