/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-purple-200">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Author</th>
            <th className="border border-gray-300 p-2">Publish Year</th>
            <th className="border border-gray-300 p-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="text-center">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{book.title}</td>
              <td className="border border-gray-300 p-2">{book.author}</td>
              <td className="border border-gray-300 p-2">{book.publishYear}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex justify-center gap-x-4">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-800 hover:text-black"
                  >
                    <BsInfoCircle className="text-2xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-600 hover:text-black"
                  >
                    <AiOutlineEdit className="text-2xl" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-600 hover:text-black"
                  >
                    <AiOutlineDelete className="text-2xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
