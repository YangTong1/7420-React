import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
class Course extends Component {

    constructor() {
        super();
        this.state = {
            course : []
        }
    }

    componentDidMount() {
        this.getcourse()
    }

    getcourse = () =>{
        //用axios获取所有的课程数据 //目标url就是刚刚定义的/course/
        axios.get('drf/course')
            .then(
                (res) => this.setState(
                    {
                        course:res.data
                    }
                )
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

      del = (item) => {
      axios.delete('/drf/course/'+item +'/'
      )

          .then(

              (res) => {
                  alert(res.data.msg)
                  console.log(res)
                  this.getcourse()
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
                            <span className="logo-title">Course Info</span>
                        </header>
                <table >
                    <thead>
                          <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>code</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                    </thead>


                    {this.state.course.map(
                        (c,index) => (
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.code}</td>
                                <td><button onClick={()=>this.del(c.id)}>del</button></td>
                                <td><Link to={'/updcourse?'+c.id}>upd</Link></td>
                            </tr>
                        )
                    )
                    }

                </table>

                <div className="col-sm-6 col-sm-offset-5">
                            <p style={{fontSize:28}}><Link to={'/addcourse'}>Add New Course</Link></p>
                        </div>
                <br/>
            </div>
        );
    }
}

export default Course;