import "./App.css";
import LifeCycle from "./components/LifeCycle";

import Userlist from "./myCrudComponent/Userlist";

function App() {
  return (
    <>
      <h1>Component life cycle</h1>
      {/* NORMAL CLASS COMPONENT CRUD  */}
      <Userlist />

      {/* component life cycle  */}
      <LifeCycle />
    </>
  );
}

export default App;
