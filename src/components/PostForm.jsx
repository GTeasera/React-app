import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    /* Way with controlable component */
    const addNewPost = (element) => {
        element.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                /* Controlable compontent */
                value={post.title}

                /* Двухстороннее связывание */
                onChange={element => setPost({...post, title: element.target.value})}

                type="text"
                placeholder="Name"
            />

            <MyInput
                /* Controlable compontent */
                value={post.body}

                /* Двухстороннее связывание */
                onChange={element => setPost({...post, body: element.target.value})}

                type="text"
                placeholder="Description"
            />

            <MyButton onClick={addNewPost}>Create Post</MyButton>
            <MyButton disabled>Edit Post</MyButton>
        </form>
    );
};

export default PostForm;