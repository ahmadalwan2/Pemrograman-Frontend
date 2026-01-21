import Navbar from "../../Components/Navbar/Navbar.jsx";
import Article from "../../Components/Article/Article.jsx";
import post from "../../post.json"

const Blogs = () => {
        return (
            <div>
                <Navbar/>
                <h1>Daftar Artikel</h1>
                <Article posts={post}></Article>
            </div>
        )
}

export default Blogs;