import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Homepage from "./Pages/Homepage";
import Movies from "./Ui/Movies";
import TvShows from "./Ui/TvShows";
import Animation from "./Ui/Animation";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "movies", element: <Movies /> },
        { path: "tvshows", element: <TvShows /> },
        { path: "animation", element: <Animation /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
