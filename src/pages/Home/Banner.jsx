import banner from "../../assets//home-banner.avif"

const Banner = () => {
    return (
        <div className='bg-[#c3915e] rounded-md relative h-screen'>
            <img className='mx-auto w-full h-full object-cover md:object-contain' src={banner} alt="" />

            <div className='absolute space-y-7 md:max-w-sm text-center top-1/2  md:left-1/2 md:-translate-x-1/2 -translate-y-1/4'>
                <p className='text-4xl font-bold text-[#c3915e] font-josefin'>Discover a world of cooking toys that inspire creativity and learning.</p>
                <button className='text-xl px-8 py-3 bg-primary text-white font-semibold rounded-md'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;