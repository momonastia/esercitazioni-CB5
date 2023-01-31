import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./routes/user";
import Users from "./routes/users";
import Posts from "./routes/posts";
import Post from "./routes/post";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/route";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:user",
    element: <User />,
  },
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="contacts" element={<Root />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:post" element={<Post />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:user" element={<User />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
