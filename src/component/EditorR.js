import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";



class EditorConvertToJSON extends Component {
  constructor(props) {
    super(props);
    const content = {"entityMap":{},"blocks":[{"key":"637gr","text":this.props.body?.body.text,"type":"post_query_body_MultilineResponse","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

 

  render() {
    const { contentState } = this.state;
    console.log('hello', this.state.contentState);
    // console.log('dahhj tan',draftToHtml(convertToRaw(this.props?.body?.getCurrentContent())));
    return (
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onContentStateChange={this.onContentStateChange}
      />
    );
  }
}
export default EditorConvertToJSON;