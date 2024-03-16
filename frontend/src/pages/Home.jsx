import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        console.log(res.data.data);
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 font-serif">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            showType === "table"
              ? "bg-purple-500 text-white"
              : "bg-purple-200 hover:bg-purple-400"
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            showType === "card"
              ? "bg-purple-500 text-white"
              : "bg-purple-200 hover:bg-purple-400"
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-bold text-purple-700">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-purple-500 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
