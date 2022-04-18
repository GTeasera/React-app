import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState( [
        {id: 0, title: 'Title Empty', body: 'Description Empty'},
        {id: 1, title: 'JavaScript', body: 'Description JavaScript'},
        {id: 2, title: 'C#', body: 'Description C#'},
        {id: 3, title: 'C++', body: 'Description C++'}
    ])

    const createPost = (newPost) =>{
        setPosts( [...posts,newPost])
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} title={'123'}/>
    </div>
  );
}

export default App;
