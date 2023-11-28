
import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
class Assign extends Component{

    constructor() {
        super();
        this.state = {
            classes:[]
        }
    }

    componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/drf/class")
      .then(
          (res) => this.setState(
              {
                  classes: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
  };


    del = (item) => {
      axios.delete('/drf/class/'+item +'/'
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
                    <span className="logo-title">Assign/Remove</span>
                </header>
                <div className="c-list">
                    <table id="table" className="animated fadeInRight">
                        <thead >
                        <tr>
                            <th>number</th>
                            <th>semester</th>
                            <th>course</th>
                            <th>lecturer</th>
                        <td>Update</td>
                        </tr>
                        </thead>
                        <tbody>
                         {this.state.classes.map((c, index) => (

                             <tr>
                            <td>{c.number}</td>
                                 <td>{c.mysemester}</td>
                            <td>{c.mycourse}</td>
                            <td>{c.mylecturer}</td>
                            <td><Link to={'/updcl?' + c.id }>upd</Link></td>
                        </tr>

                    ))}



                        </tbody>
                    </table>


                </div>

            </div>
        )
    }


}

export default Assign