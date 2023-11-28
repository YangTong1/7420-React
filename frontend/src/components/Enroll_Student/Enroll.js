import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
class Enroll extends Component{

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


    render() {
        return (
            <div>
                <header className="pageheader">
                    <span className="logo-title">Enroll/Remove</span>
                </header>
                <div className="c-list">
                    <table id="table" >
                        <thead >
                        <tr>
                            <th>student_id</th>
                            <th>username</th>
                            <th>class</th>
                        <td>Update</td>
                        </tr>
                        </thead>
                        <tbody>
                         {this.state.students.map((s, index) => (

                             <tr>
                            <td>{s.student_id}</td>
                            <td>{s.uname}</td>
                            <td>{s.classes}</td>
                                 <td><Link to={'/updcs?' + s.id }>upd</Link></td>

                        </tr>

                    ))}
                        </tbody>
                    </table>


                </div>

            </div>
        )
    }


}

export default Enroll