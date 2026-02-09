import { useState } from "react";
import Search from "../Search/Search";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Article = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState(posts);
  const [postTotal, setPostTotal] = useState(posts.length);
  const [authors, setAuthors] = useState([]);

    useEffect(() => {
      /**
       * Mengonsumsi API ny aharus make Async Await, supaya tidak pending
       * --------
       * Langkah-langkah mengelola API :
       * 1. Buat statenya make useState
       * 2.
       */
        const fetchData = async () => {
            try {
              const postResponse = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
              );

              const userResponse = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
              )
              console.log(postResponse);
              console.log(userResponse);
              


              setFilteredPost(postResponse.data);
              setPostTotal(postResponse.data.length);
              setPosts(postResponse.data);
              setAuthors(userResponse.data);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); // ini adalah aray depedensi, supaya tidak berjalan terus menerus

  /**
   *  Efek berjalan jika data pada array berubah, jika array kosong
   *  Maka hanya berjalan sekali saat komponen pertama kali dimuat (mount)
   */

  const onChangeSearch = (searchTerm) => {
    const filteredData = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPost(filteredData);
    setPostTotal(filteredData.length);
  };

  return (
    <div>
      <Search totalPost={postTotal} onSearchChange={onChangeSearch} />
      {filteredPost.map((post, index) => {
        const author = authors.find((user) => user.id == post.userId);

          return (
              <div key={index}>
                <NavLink to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                </NavLink>
                <small>
                      Author: {author ? author.name : "Unknown"}                  
                </small>
              </div>
          );
      })}
    </div>
  );
};

export default Article;