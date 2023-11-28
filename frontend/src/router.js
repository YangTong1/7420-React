import Semester from "./components/ShowInfo_and_Delete/Semester";
import ShowLecturer from "./components/ShowInfo_and_Delete/Lecturer";
import ShowUser from "./components/ShowInfo_and_Delete/User";
import ShowClass from "./components/ShowInfo_and_Delete/MyClass";
import AddUser from "./components/Add/AddUser";
import AddLecturer from "./components/Add/AddLecturer";
import AddSemester from "./components/Add/AddSemester";
import AddClass from "./components/Add/AddClass";
import AddStudent from "./components/Add/AddStudent";
import {render} from "react-dom";
import {
  BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import {Component, Fragment} from "react";
import AddCourse from "./components/Add/AddCourse";
import Course from "./components/ShowInfo_and_Delete/Course";
import ShowStudent from "./components/ShowInfo_and_Delete/Student";
import Update_User from "./components/Update/Update_User";
import Update_Student from "./components/Update/Update_Student";
import Update_Class from "./components/Update/Update_Class";
import Update_Course from "./components/Update/Update_Course";
import Update_Semester from "./components/Update/Update_Semester";
import Update_Lecturer from "./components/Update/Update_Lecturer";
import Login from "./components/Login";
import Assign from "./components/Assign_Lecturer/Assign"
import Classlecturer from "./components/Update/Class_Lecturer"
import Enroll from "./components/Enroll_Student/Enroll"
import Classstudent from "./components/Update/Class_Student"
import Attend from "./components/Update/Attend"
import Email from "./components/Email/Email"
import Upload from "./components/UploadFile/UploadFile"
const routes = [
  {
    path: '/',
    element:<Login/>
  },

  {
    path: 'addcourse',
    element: <AddCourse />,
    label: 'Course Add',
  },

  {
    path: 'showcourse',
    element: <Course/>,
    label: 'Course Info',
  },
    {
    path: 'updcourse',
    element: <Update_Course/>,
  },



  {
    path: 'addsemester',
    element: <AddSemester />,
    label: 'Semester Add',

  },
  {
    path: 'showsemester',
    element: <Semester />,
    label: 'Semester Info',

  },
{
    path: 'updsemester',
    element: <Update_Semester/>,
  },

    {
      path: 'adduser',
      element: <AddUser />,
      label: 'User Add',
    },

  {
    path: 'showuser',
    element: <ShowUser/>,
    label: 'User Info',
  },
{
    path: 'upduser',
    element: <Update_User/>,
  },

        {
          path: 'addlecturer',
          element: <AddLecturer />,
          label: 'Lecturer Add',
        },

      {
        path: 'showlecturer',
        element: <ShowLecturer/>,
        label: 'Lecturer Info',
      },
{
    path: 'updlecturer',
    element: <Update_Lecturer/>,
  },

        {
          path: 'addstudent',
          element: <AddStudent/>,
          label: 'Student Add',
        },

      {
        path: 'showstudent',
        element: <ShowStudent/>,
        label: 'Student Info',
      },
{
    path: 'updstudent',
    element: <Update_Student/>,
  },

        {
          path: 'addclass',
          element: <AddClass />,
          label: 'Class Add',
        },

      {
        path: 'showclass',
        element: <ShowClass/>,
        label: 'Class Info',
      },

    {
    path: 'updclass',
    element: <Update_Class/>,
  },
    {
    path: 'assign',
    element: <Assign/>,
        label: 'Assign Lecturer'

  },
    {
    path: 'updcl',
    element: <Classlecturer/>,
  },
    {
    path: 'enroll',
    element: <Enroll/>,
        label: 'Enroll Student'

  },
    {
    path: 'updcs',
    element: <Classstudent/>,
  },
    {
    path: 'updatt',
    element: <Attend/>,
  },
    {
    path: 'addemail',
    element: <Email/>,
  },
    {
    path: 'uploadfile',
    element: <Upload/>,
      label: 'UploadFile'
  },
]
export default routes