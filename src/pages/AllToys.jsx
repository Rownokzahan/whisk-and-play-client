import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {

    const [toys, setToys] = useState(useLoaderData());

    const handleSearch = (searchText) => {
        fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/all-toys?search=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };

    return (
        <div className="my-12">
            <div className="relative mb-6">
                <div className="absolute inset-y-0 right-72 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={(e)=>handleSearch(e.target.value)} type="text" id="table-search-users" className="ml-auto block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="Search for toys"/>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-6">
                                Sl
                            </th>
                            <th scope="col" className="p-6">
                                Toy Name
                            </th>
                            <th scope="col" className="p-6">
                                Seller name
                            </th>
                            <th scope="col" className="p-6">
                                Category
                            </th>
                            <th scope="col" className="p-6">
                                Price
                            </th>
                            <th scope="col" className="p-6">
                                Available Quantity
                            </th>
                            <th scope="col" className="p-6">
                                Action
                            </th>
                        </tr>

                    </thead>
                    <tbody>

                        {toys?.map((toy,index) => <tr key={toy?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index+1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {toy?.ToyName}
                            </th>
                            <td className="px-6 py-4">
                                {toy?.sellerName}
                            </td>
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
                                <Link to={`/toy-details/${toy._id}`} className="text-primary hover:underline duration-100 whitespace-nowrap">View Details</Link>
                            </td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;