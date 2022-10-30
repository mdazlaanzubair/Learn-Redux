import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-lg">
      <div className="p-5 bg-light">
        <h1 className="display-4 fw-bold mb-4">Welcome to Redux Toolkit</h1>
        <h4 className="mb-3">
          A small scale e-commerce shopping cart project to get hands on
          experience with state management in React using Redux Toolkit.
        </h4>
        <hr />
        <p className="mb-3 lead">
          There are many state management library and tool out there and
          recently{" "}
          <a
            href="https://zustand-demo.pmnd.rs/"
            target="_blank"
            className="fw-bold"
          >
            Zustand
          </a>{" "}
          is getting popular and most of the developers are switching over it
          due to its simplified flux principles and comfy api based on hooks.
        </p>

        <p className="mb-3 lead">
          However, I don't think that employers in the market are ready to hire{" "}
          <span className="fw-bold">Zustand</span> developers. Obviously, because
          it's new in the market and has smaller community support as compare to{" "}
          <a href="https://redux.js.org/" target="_blank" className="fw-bold">
            Redux
          </a>
          .
        </p>

        <p className="mb-5 lead">
          <Link className="btn btn-primary float-end" to="/products">
            Jump to Products
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
