import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import ListUsers from './../components/ListUsers/ListUsers.js';
import AddUsers from './../components/AddUsers/AddUsers.js';
import Layout from './../components/Layout/Layout.js';
import Login from './../components/Login/Login.js'
import EditUsers from "./../components/EditUsers/EditUsers";
import ListPosts from './../components/ListPosts/ListPosts.js';
import ListTypes from "./../components/ListTypes/ListTypes";
import AddTypes from "./../components/AddTypes/AddTypes";
import AddPosts from './../components/AddPosts/AddPosts.js';
import EditTypes from "./../components/EditTypes/EditTypes";
import EditPosts from "./../components/EditPosts/EditPosts";

const Routes = () => {
  const { token } = useAuth();

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/users",
          element: <ListUsers/>,
        },
        {
          path: "/posts",
          element: <ListPosts/>,
        },
        {
          path: "/types",
          element: <ListTypes/>,
        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
