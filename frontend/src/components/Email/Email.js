import React, {Component} from 'react';
import axios from "axios";

class Email extends Component {
    constructor() {
        super();
        this.state = {
            subject:"",
            to:"",
            body:"",
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

    send = () =>{
        axios.post("email/", {
                subject:this.state.subject,
                to:this.state.myinfo.myemail,
                body:this.state.body,
                sid:this.state.myinfo.id
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
                            <span className="logo-title">Add Course</span>
                        </header>
                <div className={"row"}>
                    <div className="col-sm-12">
                        <br/><br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>Subject:</label>
                            <div className="col-sm-4">
                                <input id="subject"  className="form-control" type="text"
                                       placeholder="Subject" onChange={this.HandleChange}></input>
                                    {/*<span className="help-block m-b-none"><i className="fa fa-info-circle"></i> 这里写点提示的内容</span>*/}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>To:</label>
                            <div className="col-sm-4">
                                <input id="to"  className="form-control" type="text"
                                       value={this.state.myinfo.myemail} onChange={this.HandleChange}></input>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="col-sm-4 control-label" style={{textAlign:"right"}}>Content:</label>
                            <div className="col-sm-4">
                                <input id="body"  className="form-control" type="text"
                                       placeholder="Content" onChange={this.HandleChange}></input>
                            </div>
                        </div>

                        <br/><br/><br/>
                        <div className="col-sm-6 col-sm-offset-5">
                            <button className="btn btn-primary" onClick={this.send}>Send</button>
                        </div>

                </div>
                </div>

            </div>
        );
    }
}

export default Email;