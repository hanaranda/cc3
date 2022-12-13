import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUser } from "./redux/UserSlice";
import { getListPosts } from "./redux/PostsSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/Acceuil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getListPosts());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
