import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState( [
        {id: 0, title: 'Title Empty', body: 'Description Empty'},
        {id: 1, title: 'JavaScript', body: 'Description JavaScript'},
        {id: 2, title: 'C#', body: 'Description C#'},
        {id: 3, title: 'C++', body: 'Description C++'}
    ])
    const [selectedSort, setSelectedSort] = useState( '')
    const [searchQuery, setSearchQuery] = useState( '')

    function  getSortedPosts() {
        console.log('getSortedPosts()')
        if(selectedSort){
            return [...posts.sort((a, b)=> a [selectedSort].localeCompare(b[selectedSort]))]
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) =>{
        setPosts( [...posts,newPost])
    }

    // Get post from daughter element
    const removePost = (post) => {
        setPosts(posts.filter(pos => pos.id !== post.id))
    }

    const sortPosts = (sort) =>{
        setSelectedSort(sort);
    }

    return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin:'15px 0'}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search..."/>
            <MySelect
                value={selectedSort}
                onChange={sortedPosts}
                defaultValue="Sort by"
                option={[
                    {value:'title', name:'Name'},
                    {value:'body', name:'Description'},
                ]}
            />
        </div>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={sortedPosts} title={'123'}/>
            : <h1 style={{textAlign:"center"}}>
                Posts unavailable
            </h1>
        }

    </div>
  );
}

export default App;
