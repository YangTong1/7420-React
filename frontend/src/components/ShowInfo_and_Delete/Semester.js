import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
class Semester extends Component{

    constructor() {
        super();
        this.state = {
            semesters:[]
        }
    }

    componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/drf/semester")
      .then(
          (res) => this.setState(
              {
                  semesters: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
  };

    del = (item) => {
      axios.delete('/drf/semester/'+item +'/'
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
                    <span className="logo-title">Semester Info</span>
                </header>
                <div className="c-list">
                    <table id="table" className="animated fadeInRight">
                        <thead >
                        <tr>
                            <th>semester</th>
                            <th>year</th>
                            <th>courses</th>
                            <td>Delete</td>
                        <td>Update</td>
                        </tr>
                        </thead>
                        <tbody>
                         {this.state.semesters.map((s, index) => (

                             <tr>
                            <td>{s.semester}</td>
                            <td>{s.year}</td>
                            <td>{s.mycourse}</td>
                            <td><button className="btn-light" onClick={()=>this.del(s.id)}>del</button></td>
                                                   <td><Link to={'/updsemester?' + s.id }>upd</Link></td>

                        </tr>

                    ))}



                        </tbody>
                    </table>
<div className="col-sm-6 col-sm-offset-5">
                            <p style={{fontSize:28}}><Link to={'/addsemester'}>Add New Semester</Link></p>
                        </div>

                </div>

            </div>
        )
    }


}

export default Semester