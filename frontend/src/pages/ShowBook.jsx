import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-bold text-purple-700">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2 border-gray-300 rounded-xl p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-purple-800">Title</h2>
            <p className="text-gray-600">{book.title}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-purple-800">Author</h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              Publish Year
            </h2>
            <p className="text-gray-600">{book.publishYear}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              Create Time
            </h2>
            <p className="text-gray-600">
              {new Date(book.createdAt).toString()}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              Last Update Time
            </h2>
            <p className="text-gray-600">
              {new Date(book.updatedAt).toString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
