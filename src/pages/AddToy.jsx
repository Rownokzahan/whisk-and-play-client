import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../hooks/UseTitle";

const AddToy = () => {

    useTitle("New Toy");
    const { user } = useContext(AuthContext);

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

        const newToy = {
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

        fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys`, {
            method: "POST",
            body: JSON.stringify(newToy),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    toast.success(`${ToyName} has been added successfully!`);
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="md:w-[40rem] mx-auto my-12 py-8 px-4 md:p-12 border rounded shadow font-josefin tracking-wide">
            <div className="text-center text-2xl font-bold tracking-tight">Add A Toy</div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Seller Name" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="sellerEmail" defaultValue={user?.email} name="sellerEmail" placeholder="Seller Email" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="ToyName" placeholder="Toy Name" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" name="imageURL" placeholder="Photo Url" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <select type="text" name="category" placeholder="Category" className="w-full py-3 pl-3 border rounded focus:outline-2 focus:outline-slate-300" required>
                        <option value="Baking Kits">Baking Kits</option>
                        <option value="Utensils">Utensils</option>
                        <option value="Food Prep Tools">Food Prep</option>
                    </select>

                    <input type="text" name="price" placeholder="Price" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" name="ratings" placeholder="Ratings" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                    <input type="text" name="availableQuantity" placeholder="Quantity" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />
                </div>

                <textarea type="text" name="description" placeholder="Description" className="w-full p-3 border rounded focus:outline-2 focus:outline-slate-300" required />

                <button type="submit" className="bg-primary text-white font-semibold text-xl py-3 w-full rounded mt-6">Submit</button>
            </form>
        </div>
    );
};

export default AddToy;