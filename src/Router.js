import { Switch, Route } from "react-router-dom";
import DashboardLayout from './dashboard';
import Homepage from "./pages/HomePage";
import GetUsers  from "./component/GetUsers";
import Postpage from "./pages/Postpage/[id]";
import Posts from './pages/Posts/index';
import Users from'./pages/User/index';
import Getuserid from './pages/Users/[id]';
import Commentid from './pages/Comment/[id]';
import CommentPage from "./pages/Commentpage";
const Router = () => {
  return (
    <DashboardLayout>
      <Switch>
        
       
        <Route exact path={"/posts/page1"}> 
          <Posts>
            
          </Posts>
        </Route>
        <Route exact path={"/posts/page1/:id"}>
              <Posts>
                <Postpage />
              </Posts>
            </Route>

        <Route exact path={"/users/page1"}>
          <Users>
   
          </Users>
        </Route>

        <Route exact path={"/users/page1/:id"}>
          <Users>
              <Getuserid />
          </Users>
            </Route>

      <Route exact path={"/comment/page1"}>
          <CommentPage>
        
          </CommentPage>
      </Route>
      
      <Route exact path={"/comment/page1/:id"}>
          <CommentPage>
        <Commentid/>
          </CommentPage>
      </Route>

    


      </Switch>
    </DashboardLayout>
  );
};

export default Router;
