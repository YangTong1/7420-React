import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
class ShowStudent extends Component{

    constructor() {
        super();
        this.state = {
            students:[]
        }
    }

    componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/drf/student")
      .then(
          (res) => this.setState(
              {
                  students: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
  };

    del = (item) => {
      axios.delete('/drf/student/'+item +'/'
      )

          .then(

              (res) => {
                  alert(res.data.msg)
                  console.log(res)
                  this.refreshList()
              }
          )
          .catch(
              (error) => {
                  console.log(error)
                  alert("error")
              }
          )
  }
    render() {
        return (
            <div>
                <header className="pageheader">
                    <span className="logo-title">Student Info</span>
                </header>
                <div className="c-list">
                    <table id="table" >
                        <thead >
                        <tr>
                            <th>student_id</th>
                            <th>DOB</th>
                            <th>attend</th>
                            <th>username</th>
                            <th>class</th>
                            <th>course</th>
                            <td>Delete</td>
                            <td>Update</td>
                            <td>Email</td>

                        </tr>
                        </thead>
                        <tbody>
                         {this.state.students.map((s, index) => (

                             <tr>
                            <td>{s.student_id}</td>
                            <td>{s.DOB.split('T')[0]}</td>
                            <td>{s.attend}<Link to={'/updatt?' + s.id }> enter</Link></td>
                            <td>{s.uname}</td>
                            <td>{s.courses}</td>
                            <td>{s.classes}</td>
                            <td><button  onClick={()=>this.del(s.id)}>del</button></td>
                                 <td><Link to={'/updstudent?' + s.id }>upd</Link></td>
                                 <td><Link to={'/addemail?' + s.id }>email</Link></td>

                        </tr>

                    ))}
                        </tbody>
                    </table>

                        <div className="col-sm-6 col-sm-offset-5">
                            <p style={{fontSize:28}}><Link to={'/addstudent'}>Add New Student</Link></p>
                        </div>

                </div>

            </div>
        )
    }


}

export default ShowStudent