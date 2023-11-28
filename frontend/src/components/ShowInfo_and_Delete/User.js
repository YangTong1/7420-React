import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import Update_User from "../Update/Update_User";
class ShowUser extends Component{

    constructor() {
        super();
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/drf/user")
      .then(
          (res) => this.setState(
              {
                  users: res.data
              }
          )
      )
      .catch(
          (err) => console.log(err)
      );
  };

    del = (item) => {
      axios.delete('/drf/user/'+item +'/'
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
                    <span className="logo-title">User Info</span>
                </header>
                <div className="c-list">
                    <table id="table" className="animated fadeInRight">
                        <thead >
                        <tr>
                            <th>username</th>
                            <th>email</th>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>tel</th>
                            <th>address</th>
                            <th>group</th>
                            <td>Delete</td>
                        <td>Update</td>
                        </tr>
                        </thead>
                        <tbody>
                         {this.state.users.map((u, index) => (

                             <tr>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td>{u.tel}</td>
                            <td>{u.addr}</td>
                            <td>{u.groupname}</td>
                            <td><button className="btn-light" onClick={()=>this.del(u.id)}>del</button></td>
                                 <td><Link to={'/upduser?' + u.id }>upd</Link></td>
                        </tr>
                    ))}



                        </tbody>
                    </table>

<div className="col-sm-6 col-sm-offset-5">
                            <p style={{fontSize:28}}><Link to={'/adduser'}>Add New User</Link></p>
                        </div>
                </div>

            </div>
        )
    }


}

export default ShowUser