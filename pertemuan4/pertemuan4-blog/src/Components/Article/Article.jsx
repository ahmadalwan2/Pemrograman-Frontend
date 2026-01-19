import { useState } from "react";

const Article = ({ posting = [] }) => {
  // ==== Cara Melihat Apa Yang Diketikan Oleh User ==== //

  /**
   * 
   */

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filterSearch = posting.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      Cari artikel : <input type="text" onChange={handleChangeSearch} />
      <br />
      <small>
        <b>{filterSearch.length} data</b> dengan pencarian kata <b>{search}</b>
      </small>

      {
        filterSearch.map((post, index) => {
          return (
            /**
             *  ==== NOTES ==== *
             * 
             * MAP = mempunyai 2 callback function agar bisa kita gunakan kembali dengan mudah
             * POST = mengambil dari post yang ada di file post.json
             * Kita harus mempunyai key nya
             * Lalu panggil menggunakkan nama file tsbt dan memnaggil data di file json nya yang sesuai
             */
            <div key={index}>
              <h3>{post.title}</h3>
              <small>
                {post.author} - Date: {post.date}, tags: {post.tags}
              </small>
              <br />
            </div>
          );
        })
      }
    </div>
  );
};

export default Article;
