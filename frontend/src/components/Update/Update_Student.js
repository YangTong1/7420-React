import React, {Component} from 'react';
import axios from "axios";

class UpdateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student_id:"",
            DOB:"",
            attend:"",
            user:"",
            mycourse:"",
            myclass:"",
            myinfo:""


        }
        this.showinfo(this.getid())

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
      .get("/drf/student/" + item +"/")
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
        axios.put("drf/student/" +item +"/", {
                student_id:this.state.student_id,
                mycourse:this.state.mycourse,
                DOB:this.state.DOB,
                myclass:this.state.myclass,
                attend:this.state.attend,
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

    getid = () => {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams.searchParams.toString().split('=')[0];
        // console.log("pathname:", pathname);
        return pathname
    }


    render() {
        return (
            <div>
                <header className="pageheader">
                            <span className="logo-title">Update Student</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/>
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>student_id:</label>
                            <div className="col-sm-4">
                                <input id="student_id"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.student_id} onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>DOB:</label>
                            <div className="col-sm-4">
                                <input id="DOB"  className="form-control" type="date"
                                       placeholder={this.state.myinfo.DOB} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>attend:</label>
                            <div className="col-sm-4">
                                <input id="attend"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.attend} onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course:</label>
                            <div className="col-sm-4">
                                <input id="mycourse"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.courses} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>class:</label>
                            <div className="col-sm-4">
                                <input id="myclass"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.classes} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>username:</label>
                            <div className="col-sm-4">
                                <input id="user"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.uname} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={()=>this.update(this.getid())}>提交</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default UpdateStudent;