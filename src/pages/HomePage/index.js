import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const HomePage = () => {
    const [editorState, setEditorState] = useState();

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
      };

    //   console.log(editorState.getCurrentContent());
    
    return (
        <div className="bg-red">
            <div className={"flex justify-between   w-full"}>
                <div> Edit a User</div>
                <div> Edit a User</div>
            </div>

            <div>
                <label class="block">
                    <span class="block text-sm font-medium text-gray-700">Username</span>
                    <input type="text" value="tbone" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="block text-sm font-medium text-gray-700">Address</span>
                    <input type="text" value="tbone" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
            </div>


            <div>
                <label class="block">
                    <span class="block text-sm font-medium text-gray-700">Post</span>
                    <span class="block text-sm font-medium text-gray-700">search Post and tag</span>
                    <input type="text" value="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
            </div>

            <div className={"flex "}>
            <div className={"flex mr-4  border rounded-lg  bg-white justify-center  items-center"}>
                    <div className={"pl-2"}> 
                        Building a huge site with reactjs Library
                    </div>
                    <div  className={"pl-4 pr-2"}>
                        <TiDeleteOutline />
                    </div>
                  

                </div>

                <div className={"mr-4  border  bg-white"}>
                    <div className={"flex mt-4  "}>
                    <div className={"pt-2"}> 
                       This is my Second Post
                    </div>
                    <div  className={"pl-4 mt-4"}>
                        <TiDeleteOutline />
                    </div>
                    </div>
                  

                </div>

            </div>

        {/* hello */}
        <div className="bg-white  h-48">
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
        />
        </div>

       {/* {editorState && <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>} */}
        
 
<div>

</div>


        </div>
    );
};

export default HomePage;
