import './App.css'
import { useState } from "react";
import Article from './Components/Article/Article'
import post from "./post.json";
import Lifecycle from './Components/Lifecycle/Lifecycle';
import Form from './Components/Form/Form.jsx'

function App() {
  const [count, setCount] = useState(2);

  return (
    <>
      <Article posting={post}/>
      <h3>Top Author</h3>
        <ol>
      {post.map((post, index) => {
          return <li  key={index + 1}>{post.author}</li>;
          }
          )}
        </ol>
        <button onClick={() => alert("Hello World")}>Pick me!</button>
        <br />
        <br />
        <Form/>

        <br />
        <br />
        <span></span>
        <div className='btns'>
          <span className='dspy-angka'>{count}</span>
         <button className='red-btn' onClick={() => setCount(count - 1)}>Kurang</button>
         <button className='grn-btn' onClick={() => setCount(count + count)}>Tambah</button>
         <Lifecycle/>
         </div>
    </>
  )
}

export default App;
