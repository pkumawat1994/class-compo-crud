import logo from "./logo.svg";
import "./App.css";
import Table from "./component/Table";
import "./index.css";
import MyReactTable from "./component/MyReactTable";
import Toastify from "./component/Toastify";
import Spinner from "./component/Spinner";
import CrudAPI from "./component/CrudAPI";
import MultipleInputData from "./component/MultipleInputData";

function App() {
  return (
    <>
      // <MyReactTable />
      // <Toastify />
      // <Spinner />
      <Table />
      <CrudAPI />
      //multiple input with validation with single state and single handleChange
      <MultipleInputData />
      //React hook form with material ui
    </>
  );
}

export default App;
