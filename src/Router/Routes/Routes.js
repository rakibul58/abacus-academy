import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import TeacherRoute from "../PrivateRoute/TeacherRoute";
import AddCourse from "../../Pages/AddCourse/AddCourse";
import AddedCourses from "../../Pages/AddedCourses/AddedCourses";
import AddVideos from "../../Pages/AddVideos/AddVideos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/addcourse',
                element:<TeacherRoute><AddCourse></AddCourse></TeacherRoute>
            },
            {
                path: '/addvideos/:id',
                element:<TeacherRoute><AddVideos></AddVideos></TeacherRoute>
            },
            {
                path: '/addedcourse',
                element:<TeacherRoute><AddedCourses></AddedCourses></TeacherRoute>
            }
        ]
    }
]);

export default router;