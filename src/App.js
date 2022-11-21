import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/go",
    element: <div>Go world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
