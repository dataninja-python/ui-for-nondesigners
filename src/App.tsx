/*import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';*/
import './css/App.css';

import posts from "./data/posts.json";
import createImgTag from "./utils/image-functions";

function App() {
    function buildPost(post: object) {
        let line1 = `<div key={${post.ID}} className="row">`;
        let line2 = ``;
    }
  return (
    <div className="App">
        <h1>Posts from local</h1>
        {posts && posts.map(function(post) (
            <div key={ID} className="row">
                <p>{USERNAME}</p>
                {createImgTag(POST_IMAGE_LINK, altC)}
            </div>
        ))}
    </div>
  )
}

export default App
