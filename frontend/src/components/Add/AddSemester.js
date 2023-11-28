import React, {Component} from 'react';
import axios from "axios";

class AddSemester extends Component {
    constructor() {
        super();
        this.state = {
            year:"",
            semester:"",
            course:""
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
        axios.post("drf/semester/", {
                year:this.state.year,
                semester:this.state.semester,
                course:this.state.course
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
                            <span className="logo-title">Add Semester</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>year:</label>
                            <div className="col-sm-4">
                                <input id="year"  className="form-control" type="text"
                                       placeholder="year" onChange={this.HandleChange}></input>
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
                                       placeholder="please use , to div each course name" onChange={this.HandleChange}></input>
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

export default AddSemester;