import {
    FaChessBoard,
  } from "react-icons/fa";
  import ListItemsWithChilds from "../ListItemsWithChilds";



const SecondDashboard = (props) => {
    return (
        <div className="h-screen menu text-white openNav absolute md:relative flex pt-16 font-open-sans static overflow-hidden  shadow">
          <ul className="list-reset w-full">
           {props.data.map(item => (
                <ListItemsWithChilds
                label={{
                  text: item.data.title,
                  Icon: FaChessBoard,
                  path: `/posts/page1/${item.id}`,
                }}
              />
           ))}
          </ul>
        </div>
    )
}

export default SecondDashboard;