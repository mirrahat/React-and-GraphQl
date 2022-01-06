import { Switch, Route } from "react-router-dom";
import DashboardLayout from './dashboard';
import Homepage from "./pages/HomePage";
import Postpage from "./pages/Postpage/[id]";
import Posts from './pages/Posts/index';

const Router = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path={"/"}>
          <Homepage />
        </Route>
        {/* <Route exact path={"/test"}>
          <Testq />
        <Route> */}
        <Route> 
          <Posts>
            <Switch>
            <Route exact path={"/posts/page1/:id"}>
              <Postpage />
            </Route>
            </Switch>
          </Posts>
        </Route>

        {/* <Route path={"*"}>
          <div className="h-screen w-screen flex justify-center items-center text-xl font-bold text-gray-400">
            404 Page Not Found!
          </div>
        </Route> */}
      </Switch>
    </DashboardLayout>
  );
};

export default Router;
