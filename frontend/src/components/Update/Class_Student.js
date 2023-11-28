import React, {Component} from 'react';
import axios from "axios";

class Classstudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student_id:"",
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
        axios.put("enroll/", {
                sid:this.state.myinfo.id,
                myclass:this.state.myclass,
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
                            <span className="logo-title">Enroll</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/>
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>student_id:</label>
                            <div className="col-sm-4">
                                <input id="student_id"  className="form-control" type="text"
                                       value={this.state.myinfo.student_id} disabled="disabled"></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
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

export default Classstudent;