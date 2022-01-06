import {
  FaChessBoard,
  FaShoppingBag,
  FaRegCalendarAlt,
  FaBars
} from "react-icons/fa";
import ListItemsWithChilds from "./ListItemsWithChilds";
import Header from "./Header";
import SecondDashboard from './SecondDashboard';
import Posts from '../pages/Posts';
const DashboardLayout = ({ children }) => {


  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      <div
        
        style={{ background: "#FFFFFF" }}
      >
        <h1 className="text-white">GraphQL</h1>
        <div className="h-screen menu text-white openNav absolute md:relative flex pt-16 font-open-sans static overflow-hidden  shadow">
          <ul className="list-reset w-full">
            <ListItemsWithChilds
              label={{
                text: "Users",
                Icon: FaChessBoard,
                path: "/users/page1/1",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Posts",
                Icon: FaShoppingBag,
                path: "/posts/page1",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Calender",
                Icon: FaRegCalendarAlt,
                path: "/calendar",
              }}
            />
          </ul>
        </div>
      </div>
      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-0 ">
      

        {/* <Header /> */}
        <div id="main-content" className="w-full flex-1 p-2 contain h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
