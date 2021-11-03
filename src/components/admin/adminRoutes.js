import { Route, Switch } from "react-router-dom";
import UserTable from "./user/userTable";
import User from "./user/user";
import CarTable from "./car/carTable";
import CompanyTable from "./company/companyTable";
import UserAdd from "./user/userAdd";
import CompanyAdd from "./company/companyAdd";
import UserAddInfo from "./user/userAddInfo";

export const adminRoutes = (
  <Switch>
    <Route exact path="/dashboard/">
      Hejka
    </Route>
    <Route exact path="/dashboard/users">
      <UserTable />
    </Route>
    <Route exact path="/dashboard/users/addUser">
      <UserAdd />
    </Route>
    <Route exact path="/dashboard/users/addUserInfo">
      <UserAddInfo />
    </Route>
    <Route exact path="/dashboard/users/:id">
      <User />
    </Route>
    <Route exact path="/dashboard/cars">
      <CarTable />
    </Route>
    <Route exact path="/dashboard/companies">
      <CompanyTable />
    </Route>
    <Route exact path="/dashboard/companies/addCompany">
      <CompanyAdd />
    </Route>
  </Switch>
);
