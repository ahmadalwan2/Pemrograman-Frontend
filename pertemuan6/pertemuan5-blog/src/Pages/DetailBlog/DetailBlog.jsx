import { useParams } from "react-router-dom"
import MyNavbar from "../../Components/Navbar/Navbar.jsx"
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer.jsx";

const DetailBlog = () => {

    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentData = async () => {
            try {
              const commentsData = await axios.get (
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
              );
              setComments(commentsData.data);
            } catch (error) {
              console.log(error);
            }
        };
            commentData();
    }, [id]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const postResponse = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
              );
              setPost(postResponse.data);

            } catch (error) {
              console.log(error);
            }
        };
              fetchData();
    }, [id]);

  return (
    <div>
      <MyNavbar/>
        <h1>Detail Blog</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          <hr />
        <h3>Komentar</h3>
        {
          comments.filter((comment) => comment.postId === Number(id))
          .map((comment) => (
              <div 
              key={comment.id}
              style={{border: "1px solid grey", margin: "6px", padding: "6px"}} 
              >

              <b>{comment.name}</b>
              <b>{comment.email}</b>
              </div>
          ))}
          <Footer/>
    </div>
  )
}

export default DetailBlog;
