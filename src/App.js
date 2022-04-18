import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState( [
        {id: 0, title: 'Title Empty', body: 'Description Empty'},
        {id: 1, title: 'JavaScript', body: 'Description JavaScript'},
        {id: 2, title: 'C#', body: 'Description C#'},
        {id: 3, title: 'C++', body: 'Description C++'}
    ])

    const [post, setPost] = useState({title: '', body: ''})
    {/*const [title, setTitle] = useState('My Post Name')
    const [body, setBody] = useState('My post Description')*/}

    /* Way with hook "useRef" */
    const bodyInputRef = useRef();
    /* Way with controlable component */
    const addNewPost = (element) => {
        element.preventDefault()
        {/* const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts,newPost])
        console.log(newPost)
        // setTitle('')
        // setBody('')*/}
        setPosts([...posts,{...post, id:Date.now()}])
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <form>
            <MyInput
                /* Controlable compontent */
                value={post.title}

                /* Двухстороннее связывание */
                // onChange={element => setTitle(element.target.value)}
                onChange={element => setPost({...post, title: element.target.value})}

                type="text"
                placeholder="Name"
            />

            <MyInput
                /* Controlable compontent */
                value={post.body}

                /* Двухстороннее связывание */
                //onChange={element => setBody(element.target.value)}
                onChange={element => setPost({...post, body: element.target.value})}

                type="text"
                placeholder="Description"
            />


            {/* Not controlable compontent
            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder="Description"
            />
            */}

            <MyButton onClick={addNewPost}>Create Post</MyButton>
            <MyButton disabled>Edit Post</MyButton>
        </form>

        <PostList posts={posts} title={'123'}/>
    </div>
  );
}

export default App;
