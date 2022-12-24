import { Link } from "react-router-dom";
import React from "react";

const Welcome = () => {
  return (
    <div className="container shadow-3 rounded-3 p-5 bg-light my-3">
      <h1 className="display-4 fw-bold">Welcome to Redux Toolkit</h1>
      <p className="lead text-muted fw-bold">
        A small scale e-commerce shopping cart project to get hands on
        experience with state management in React using Redux Toolkit.
      </p>
      <hr className="hr" />
      <p className="lead text-muted">
        There are many state management library and tool out there and recently
        <a
          className="fw-bold mx-1"
          href="https://zustand-demo.pmnd.rs/"
          target="_blank"
          rel="noreferrer"
        >
          Zustand
        </a>
        is getting popular and most of the developers are switching over it due
        to its simplified flux principles and comfy api based on hooks. However,
        I don't think that employers in the market are ready to hire Zustand
        developers. Obviously, because it's new in the market and has smaller
        community support as compare to
        <a
          className="fw-bold mx-1"
          href="https://redux.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          Redux
        </a>
        .
      </p>
      <Link className="btn btn-primary" to="/shop">Shop Now</Link>
    </div>
  );
};

export default Welcome;
