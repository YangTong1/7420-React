import React, {Component} from 'react';
import axios from "axios";

class Upload extends Component {
    constructor() {
        super();
    }



    upload = () =>{
        const fileinput  = document.querySelector('#stu_file')
        const file = fileinput.files[0]
        const formdata = new FormData()
        formdata.append('file',file)
        axios
      .post("/upload/",formdata,{
          headers:{
              'Content-Type':'multipart/form-data'
          }
      })
      .then(
          (res) => {
              alert(res.data.msg)
          }
          )
      .catch(
          (err) => {
              alert("error!")
              console.log(err)

          }
      );
    }


    render() {
        return (
            <div>
                <header className="pageheader">
                            <span className="logo-title">Add Course</span>
                        </header>
                <div className={"row"}>
                    <div className="form-group">
                        <label className="col-sm-4">File Upload:
                            <input type="file" id="stu_file"></input>
                                <button onClick={this.upload}>Upload</button>
                        </label>
                    </div>
                </div>

            </div>
        );
    }
}

export default Upload;