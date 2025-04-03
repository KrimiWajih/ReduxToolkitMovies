import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovies } from "./redux/action";
import { Listmovies } from "./components/Listmovies";
import { Modal } from "./components/Modal";
import { Addmovie } from "./components/Addmovie";

function App() {






  return (
    <div>
     <Listmovies />
<Addmovie/>
    </div>
  );
}

export default App;
