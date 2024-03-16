/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const BookSingleCard = ({ book }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-purple-800">{book.title}</h2>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">Author:</span>
          <span className="text-gray-600">{book.author}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">Publish Year:</span>
          <span className="text-gray-600">{book.publishYear}</span>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/books/details/${book._id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            <BsInfoCircle className="text-2xl" />
          </Link>
          <Link
            to={`/books/edit/${book._id}`}
            className="text-yellow-500 hover:text-yellow-700"
          >
            <AiOutlineEdit className="text-2xl" />
          </Link>
          <Link
            to={`/books/delete/${book._id}`}
            className="text-red-500 hover:text-red-700"
          >
            <AiOutlineDelete className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookSingleCard;
