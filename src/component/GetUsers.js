import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { PROFILE_QUERY } from "../queries/query";


const  GetUsers=() =>{
 const { error, loading, data } = useQuery(PROFILE_QUERY);
  const [users, setUsers] = useState([]);
  const [check, setcheck] = useState(false);
//   useEffect(() => {
//     if (data) {
//       setUsers(data);
//     }
//   }, [data]);
console.log(data);
  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;