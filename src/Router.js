import { Switch, Route } from "react-router-dom";
import DashboardLayout from './dashboard';
import Homepage from "./pages/HomePage";
import GetUsers  from "./component/GetUsers";
import Postpage from "./pages/Postpage/[id]";
import Posts from './pages/Posts/index';
import Users from'./pages/User/index';

const Router = () => {
  return (
    <DashboardLayout>
      <Switch>
        
       
        <Route> 
          <Posts>
            <Switch>
            <Route exact path={"/posts/page1/:id"}>
              <Postpage />
            </Route>
            </Switch>
          </Posts>
        </Route>

        <Route>
          <Users>
            <Switch>
            <Route exact path={"/users/page1/:id"}>
              <GetUsers />
            </Route>
            </Switch>
          </Users>
        </Route>

    


      </Switch>
    </DashboardLayout>
  );
};

export default Router;
