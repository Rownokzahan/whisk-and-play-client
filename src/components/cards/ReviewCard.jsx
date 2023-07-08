import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  const { image, name, description } = review;
  return (
    <div className="shadow p-8 rounded-ss-3xl rounded-ee-3xl space-y-4 bg-gray-50">
      <div className="flex gap-4 items-center">
        <img src={image} className="w-16 rounded-full" alt="" />

        <div className="space-y-2">
          <h6 className="text-lg font-medium">{name}</h6>

          <div className="flex items-center gap-px text-orange-400 text-lg">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ReviewCard;
