import  React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState( [
        {id: 0, title: 'Title Empty', body: 'Description Empty'},
        {id: 1, title: 'JavaScript', body: 'Description JavaScript'},
        {id: 2, title: 'C#', body: 'Description C#'},
        {id: 3, title: 'C++', body: 'Description C++'}
    ])

  return (
    <div className="App">
        <PostList posts={posts} title={'123'}/>
    </div>
  );
}

export default App;
