import React, {Component} from 'react';
import axios from "axios";

class AddCourse extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            code:""
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
        axios.post("drf/course/", {
                name:this.state.name,
                code:this.state.code
            }

        ).then(
            res => {
                alert(res.data.msg)
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
                            <span className="logo-title">Add Course</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course name:</label>
                            <div className="col-sm-4">
                                <input id="name"  className="form-control" type="text"
                                       placeholder="course name" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course code:</label>
                            <div className="col-sm-4">
                                <input id="code"  className="form-control" type="text"
                                       placeholder="course code" onChange={this.HandleChange}></input>
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

export default AddCourse;