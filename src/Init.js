import { useAuth } from "./provider/authProvider";
import ListUsers from './components/ListUsers/ListUsers.js';
import AddUsers from './components/AddUsers/AddUsers.js';
import Layout from './components/Layout/Layout.js';
import Login from './components/Login/Login.js'
import { Route, Link, Routes, BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import EditUsers from "./components/EditUsers/EditUsers";
import ListPosts from './components/ListPosts/ListPosts.js';
import ListTypes from "./components/ListTypes/ListTypes";
import AddTypes from "./components/AddTypes/AddTypes";
import AddPosts from './components/AddPosts/AddPosts.js';
import EditTypes from "./components/EditTypes/EditTypes";
import EditPosts from "./components/EditPosts/EditPosts";

function Init () {
    const { token } = useAuth();
    console.log(token);
    return
    (
        <BrowserRouter>
          <Routes>
            {token != null ? (
              <Route path="/" element={<Layout />}>
                  <Route path="users" element={<ListUsers />} />
                  <Route path="user/add" element={<AddUsers />} />
                  <Route path="user/edit/:id" element={<EditUsers />} />
                  <Route path="post/add" element={<AddPosts />} />
                  <Route path="posts" element={<ListPosts />} />
                  <Route path="types" element={<ListTypes />} />
                  <Route path="type/add" element={<AddTypes />} />
                  <Route path="type/edit/:id" element={<EditTypes />} />
                  <Route path="post/edit/:id" element={<EditPosts />} /> }
              </Route>
            ) : (
                <Navigate to="/login" />
            )}
            </Routes>
        </BrowserRouter>
    );

}

export default Init;