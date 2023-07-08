import { BsPlay } from "react-icons/bs";
import banner from "../../assets/video-banner.avif";

const Video = () => {
  return (
    <div
      className="bg-slate-600 font-josefin w-full rounded-xl h-[80vh] bg-cover bg-center bg-blend-overlay"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="py-16">
        <h2 className="text-3xl md:text-6xl w-8/12 text-center text-white mx-auto ">
          We make your children happier with the best kitchen toys
        </h2>
        <div className="w-max mx-auto mt-4 md:mt-12">
          <button className="rounded-full p-4 bg-white hover:p-5 hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary duration-200">
            <BsPlay className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
