import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
import { IoCopyOutline } from "react-icons/io5";
import Profile from "../../hooks/Profile";
import { useQuery, gql } from "@apollo/client";
import { Unique_Post_Query } from "../../queries/query";
import  { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { PROFILE_QUERY } from "../../queries/query";

import {
    useParams
  } from "react-router-dom";



const Postpage = () => {
    const [editorState, setEditorState] = useState();
    const location = useLocation();
    const id = location.pathname.split('/')[3].toString();
    const {  data , error,loading} = useQuery(Unique_Post_Query, { variables: {id} });
    const [title, setTitle] = useState(data ? data?.post?.data?.title : "");
    const [body, setBody] = useState(data ? data?.post?.data?.body.text : "")

    useEffect(() => {}, [id, data])
    useEffect(() => {
        setTitle(data?.post?.data?.title);
        setBody(data?.post?.data?.body.text);
    }, [data])

    console.log('singlssse data',data?.post?.data?.body.text);
    console.log('title',data?.post?.data?.title);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
      };

    

    //   console.log(editorState.getCurrentContent());
    
    return (
        <div className="bg-red">
            <div className={"flex justify-between   w-full"}>
                <div  className={"block text-2xl font-medium text-gray-700 text-bold"}> Edit a Post</div>
                <div  className={"flex  border rounded-lg h-8 border-cyan-400 pr-4 pl-4"}> 
                    <div className={"mr-4 pt-2"} ><IoCopyOutline/></div>
                        <div> Update</div>

                </div>
            </div>

            <div className={"mt-4"}>
                <label class="block">
                    <span class="block text-sm font-medium text-base text-bold   text-gray-700">Title</span>
                    <input 
                        type="text"
                        class="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "
                        name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}       
                    />
                </label>
            </div>

<div>
<label class="block  mt-4">
                    <span class="block text-sm font-medium text-gray-700">Body</span>
                   
                </label>
                <div className="bg-white  h-48">
            <label class="block mt-2 text-bold text-base text-gray-700">
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
        />
        {/* <Profile /> */}
          </label>
        </div>
</div>
          


        
        <div className={"mt-4"}>
                <label class="block">
                    <span class="block text-sm font-medium text-bold text-base text-gray-700 mt-4">Comment</span>
                    <span class="block text-sm font-medium text-gray-400 text-sm test-bold">search Comments and Assign it to Post</span>
                    <input type="text" value="" class="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
    name="comment"
                        value={body}
                        onChange={(e) => setBody(e.target.value)} 
    />
                </label>
            </div>
            <div className={"flex mt-8"}>
            <div className={"flex mr-4  border rounded-lg  bg-white justify-center  items-center"}>
                    <div className={"pl-2  py-2"}> 
                        Building a huge site with reactjs Library
                    </div>
                    <div  className={"pl-4 pr-2  py-2"}>
                        <TiDeleteOutline />
                    </div>
                  

                </div>

                <div className={"flex mr-4  border rounded-lg  bg-white justify-center  items-center"}>
                    <div className={"pl-2 py-2"}> 
                        Building a huge site with reactjs Library
                    </div>
                    <div  className={"pl-4 pr-2  py-2"}>
                        <TiDeleteOutline />
                    </div>
                  

                </div>

              

            </div>

        {/* hello */}
      

       {/* {editorState && <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>} */}
        
 
<div>

</div>


        </div>
    );
};

export default Postpage;
