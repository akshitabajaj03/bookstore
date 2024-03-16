import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert(`An error happened. Please check console!`);
        console.log(err.message);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-purple-700">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="my-4">
          <label className="text-lg font-semibold text-purple-800">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-purple-300 px-4 py-2 w-full focus:outline-none focus:border-purple-500 rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-purple-800">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-purple-300 px-4 py-2 w-full focus:outline-none focus:border-purple-500 rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-purple-800">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-purple-300 px-4 py-2 w-full focus:outline-none focus:border-purple-500 rounded-md"
          />
        </div>
        <button
          className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
