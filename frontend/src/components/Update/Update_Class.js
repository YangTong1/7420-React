import React, {Component} from 'react';
import axios from "axios";

class UpdateClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number:"",
            course:"",
            lecturer:"",
            semester:"",
            student:"",
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
      .get("/drf/class/" + item +"/")
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
        axios.put("drf/class/" +item +"/", {
                number:this.state.number,
                course:this.state.course,
                semester:this.state.semester,
                lecturer:this.state.lecturer,
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
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>number:</label>
                            <div className="col-sm-4">
                                <input id="number"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.number} onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>semester:</label>
                            <div className="col-sm-4">
                                <input id="semester"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.mysemester} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>course:</label>
                            <div className="col-sm-4">
                                <input id="course"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.mycourse} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>lecturer:</label>
                            <div className="col-sm-4">
                                <input id="lecturer"  className="form-control" type="text"
                                       placeholder={this.state.myinfo.mylecturer} onChange={this.HandleChange}></input>
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

export default UpdateClass;