import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { HiOutlineTrash } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(true);


    useEffect(() => {
        fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/my-toys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [user, control])


    const handleDelete = (id, name = "Toy") => {
        Swal.fire({
            title: "Are you sure to delete it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6899',
            cancelButtonColor: '#DC2626',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0)
                            Swal.fire(
                                'Deleted!',
                                `${name} has been deleted.`,
                                'success'
                            )

                        setControl(() => !control)
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    return (
        <div className="my-12">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 whitespace-nowrap">
                        <tr>
                            <th scope="col" className="p-6">
                                Toy Image
                            </th>
                            <th scope="col" className="p-6">
                                Toy Name
                            </th>
                            <th scope="col" className="p-6">
                                Category
                            </th>
                            <th scope="col" className="p-6">
                                Price
                            </th>
                            <th scope="col" className="p-6">
                                Avail. Qty
                            </th>
                            <th scope="col" className="p-6">
                                Ratings
                            </th>
                            <th scope="col" className="p-6">
                                Seller Name
                            </th>
                            <th scope="col" className="p-6">
                                Seller Email
                            </th>
                            <th scope="col" className="p-6">
                                Description
                            </th>
                            <th scope="col" className="p-6">
                                Action
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        {toys?.map(toy => <tr key={toy?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={toy?.imageURL} className="w-12 rounded-md" alt="" />
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {toy?.ToyName}
                            </th>
                            <td className="px-6 py-4">
                                {toy?.category}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.price}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.availableQuantity}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.ratings}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.sellerName}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.sellerEmail}
                            </td>
                            <td className="px-6 py-4">
                                {toy?.description.slice(0, 45)}...
                            </td>
                            <td className="px-6 py-4">
                                <div className=" text-primary text-xl flex items-center gap-6">
                                    <Link to={`edit/${toy?._id}`}>
                                        <CiEdit className="text-2xl text-dark-gray" />
                                    </Link>
                                    <button onClick={() => handleDelete(toy?._id, toy?.ToyName)}>
                                        <HiOutlineTrash className="text-2xl text-red-600" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;