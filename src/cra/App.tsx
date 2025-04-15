import React from "react";
import { Routes, Route, Outlet, Link, useParams } from "react-router";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<BlogRoot />} >
          </Route>
          <Route path="blog/:id" element={<BlogPost />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const BlogRoot = () => {
  return (<div>
    <Link to="/blog/1">Post 1</Link>
  </div>)
}
const BlogPost = () => {
  const { id } = useParams();
  return (<div>
    <div>This is post : {id}</div>
  </div>)
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home (react router SPA navigation)</Link>
          </li>
          <li>
            <Link reloadDocument to="/about">About (browser navigation)</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard (react router SPA navigation)</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here (react router SPA navigation)</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
