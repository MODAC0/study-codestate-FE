import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('김코딩');

    const handleSubmit = (e) => {
        e.preventDefault();
        /* 등록 버튼을 누르면 게시물이 등록이 되며 home으로 리다이렉트 되어야 합니다. */
        /* 작성한 내용과 useNavigate를 이용하여 handleSubmit의 로직을 작성해보세요. */
       console.log(e.type);
    }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>제목</label>
            <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요."
            />
            <label>내용</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="내용을 입력해주세요."
            ></textarea>
            <label>작성자</label>
            <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
            <option value="kimcoding">김코딩</option>
            <option value="parkhacker">박해커</option>
            </select>
            <button>등록</button>
        </form>
      </div>
    );
  }
  
  export default CreateBlog; 