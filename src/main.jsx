import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import VideoPage from "./VideoPage";
import store from "./utilities/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:videoId" element={<VideoPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
