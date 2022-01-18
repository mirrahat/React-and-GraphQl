import React from 'react';
import FourthDashBorad from '../../dashboard/FourthDashBoard';
import  { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { Unique_Post_Query } from "../../queries/query";
import { PROFILE_QUERY } from "../../queries/query";
import {Load_Comment}  from "../../queries/query"

import {
  useParams
} from "react-router-dom";

const CommentPage = ({children}) => {
  let { id } = useParams();

 id='e42fd2b5-b84a-4417-afd2-36cdbaa204dd';
 const { error, loading, data } = useQuery(Load_Comment);
  //const { error, loading, data } = useQuery(PROFILE_QUERY);
  
console.log('all  comments',data);
 // const { error, loading, data } = useQuery(PROFILE_QUERY);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
 // console.log('data po',data?.posts[0]?.data?.title);


if(loading){
  return <div><h1>hello</h1></div>
}

console.log('first trcak data',data);


   return (
     <div>
            
        
          
          <div className="flex h-screen bg-gray-100 font-sans overflow-hidden   -ml-2 -mt-2">

          <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-0 ">
          <div
            
            style={{ background: "#FFFFFF" }}
          >
            <div className="w-full flex flex-wrap">
              <nav
                id="header1"
                className="w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2"
                style={{ background: "#062237" }}
              >
                <div className="flex h-full items-center text-white">
                  <div className="h-16 w-24 cursor-pointer flex justify-center items-center text-center">
                    <h1 className="">Page 1</h1>
                  </div>
                  <div className="h-16 w-24 cursor-pointer flex justify-center items-center text-center">
                    <h1 className="">Page 2</h1>
                  </div>
                </div>
              </nav>
            </div>
            {/* <FourthDashBorad
              data = {data?.comments}
              /> */}
          </div>
    
            {/* <Header /> */}
            <div id="main-content" className="w-full flex-1 p-2 contain h-screen">
              {children}
            </div>
          </div>
        </div>
          
        
              )  
     
     </div>
   );

    
}

export default CommentPage;
