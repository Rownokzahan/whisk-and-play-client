import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/UseTitle";

const EditToy = () => {

    useTitle("Edit Toy");

    const {
        _id,
        sellerName,
        sellerEmail,
        ToyName,
        imageURL,
        category,
        price,
        ratings,
        availableQuantity,
        description,
    } = useLoaderData()[0];


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const ToyName = form.ToyName.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const upadatedToy = {
            sellerName,
            sellerEmail,
            ToyName,
            imageURL,
            category,
            price,
            ratings,
            availableQuantity,
            description,
        };

        fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(upadatedToy),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Toy has been updated successfully!`);
                }

                if (data.modifiedCount == 0) {
                    toast.error(`You haven't changed Anything!`);
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="md:w-[40rem] mx-auto my-12 py-8 px-4 md:p-12 border rounded shadow font-josefin tracking-wide">
            <div className="text-center text-2xl font-bold tracking-tight">Update Toy</div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" defaultValue={sellerName} name="sellerName" placeholder="Seller Name" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="sellerEmail" defaultValue={sellerEmail} name="sellerEmail" placeholder="Seller Email" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" readOnly />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" defaultValue={ToyName} name="ToyName" placeholder="Toy Name" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" defaultValue={imageURL} name="imageURL" placeholder="Photo Url" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <select type="text" defaultValue={category} name="category" placeholder="Category" className="w-full py-3 pl-3 border rounded focus:outline-2 focus:outline-slate-300" required>
                        <option value="Baking Kits">Baking Kits</option>
                        <option value="Utensils">Utensils</option>
                        <option value="Food Prep Tools">Food Prep</option>
                    </select>

                    <input type="text" defaultValue={price} name="price" placeholder="Price" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" defaultValue={ratings} name="ratings" placeholder="Ratings" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" defaultValue={availableQuantity} name="availableQuantity" placeholder="Quantity" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                </div>

                <textarea type="text" defaultValue={description} name="description" placeholder="Description" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />

                <button type="submit" className="bg-primary text-white font-semibold text-xl py-3 w-full rounded mt-6">Update</button>
            </form>
        </div>
    );
};

export default EditToy;