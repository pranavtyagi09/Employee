import './App.css';
import NewEmpForm from './component/NewEmp/NewEmpForm';
import EmpList from './component/EmpList/EmpList';
import UpdateEmp from './component/UpdateEmp/UpdateEmp'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'antd';

function App() {
  return (
      <Router>
      <div>
        <nav>
          <Menu  mode="horizontal">
            <Menu.Item >
              <Link to="/">Add Employee</Link>
            </Menu.Item>
            <Menu.Item >
              <Link to="/list">Employee List</Link>
            </Menu.Item>
            <Menu.Item >
              <Link to="/update">Update Employee</Link>
            </Menu.Item>
          </Menu>
        </nav>
        <Switch>
        <Route path="/update">
            <UpdateEmp />
          </Route>
          <Route path="/list">
            <EmpList />
          </Route>
          <Route path="/">
            <NewEmpForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
