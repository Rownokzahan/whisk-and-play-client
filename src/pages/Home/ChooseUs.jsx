import { MdChildFriendly } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { TbMoodBoy, TbHeartHandshake } from 'react-icons/tb';



const ChooseUs = () => {
    return (
        <div className="my-28">
            <h3 className="text-dark-gray font-josefin text-3xl text-center font-bold mb-12">Why Choose Us</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="border shadow rounded-md p-8 space-y-4">
                    <div className='mx-auto w-max text-5xl text-purple-400'>
                        <TbMoodBoy />
                    </div>
                    <h3 className="font-josefin text-2xl font-extrabold">Kids Safe Materials</h3>
                    <p className="text-gray-500">The toys are made from kid-friendly, non-toxic materials, ensuring a worry-free and enjoyable cooking experience.</p>
                </div>

                <div className="border shadow rounded-md p-8 space-y-4">
                    <div className='w-max mx-auto text-5xl text-[#b6d6db]'>
                        <MdChildFriendly />
                    </div>
                    <h3 className="font-josefin text-2xl font-extrabold">Quality Products</h3>
                    <p className="text-gray-500">We prioritize child safety, offering age-appropriate toys that meet the highest safety standards.</p>
                </div>
                <div className="border shadow rounded-md p-8 space-y-4 relative">
                    <div className='w-max mx-auto text-5xl text-[#b16a4c]'>
                        <TbHeartHandshake />
                    </div>
                    <h3 className="font-josefin text-2xl font-extrabold">Trusted Brands</h3>
                    <p className="text-gray-500">We partner with reputable brands known for their quality and commitment to child development.</p>
                </div>
                <div className="border shadow rounded-md p-8 space-y-4">
                    <div className='w-max mx-auto text-4xl text-green-300'>
                        <VscWorkspaceTrusted />
                    </div>
                    <h3 className="font-josefin text-2xl font-extrabold">Kids Appropriate</h3>
                    <p className="text-gray-500">We prioritize child safety, offering age-appropriate toys that meet the highest safety standards.</p>
                </div>
            </div>            
        </div>
    );
};

export default ChooseUs;