import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
class ShowLecturer extends Component{

    constructor() {
        super();
        this.state = {
            lecturers:[]
        }
    }

    componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/drf/lecturer")
      .then(
          (res) => this.setState(
              {
                  lecturers: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
  };


    del = (item) => {
      axios.delete('/drf/lecturer/'+item +'/'
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
                    <span className="logo-title">Lecturer Info</span>
                </header>
                <div className="c-list">
                    <table id="table" className="animated fadeInRight">
                        <thead >
                        <tr>
                            <th>staff id</th>
                            <th>DOB</th>
                            <th>name</th>
                            <td>Delete</td>
                        <td>Update</td>
                        </tr>
                        </thead>
                        <tbody>
                         {this.state.lecturers.map((l, index) => (

                             <tr>
                            <td>{l.staff_id}</td>
                            <td>{l.DOB.split('T')[0]}</td>
                            <td>{l.firstname}</td>
                            <td><button className="btn-light" onClick={()=>this.del(l.id)}>del</button></td>
                            <td><Link to={'/updlecturer?' + l.id }>upd</Link></td>

                        </tr>

                    ))}



                        </tbody>
                    </table>
<div className="col-sm-6 col-sm-offset-5">
                            <p style={{fontSize:28}}><Link to={'/addlecturer'}>Add New Lecturer</Link></p>
                        </div>

                </div>

            </div>
        )
    }


}

export default ShowLecturer