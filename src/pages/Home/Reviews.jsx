import ReviewCard from "../../components/cards/ReviewCard";

const reviews = [
  {
    _id: "01",
    description:
      "I highly recommend Whisk&Play for kitchen toys. The toy selection is amazing, and the quality of the toys at Whisk&Play is top-notch. My kids love playing with them!",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    _id: "02",
    description:
      "Whisk&Play is the go-to store for kitchen toys. Their range of toys is extensive, and the customer service at Whisk&Play is excellent. I'm a satisfied customer!",
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    _id: "03",
    description:
      "I can't praise Whisk&Play enough for their kitchen toys. The toys are educational and entertaining, and they have brought so much joy to my children. Thank you, Whisk&Play!",
    name: "David Rodriguez",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];



const Reviews = () => {
  return (
    <div className="my-28">
      <h3 className="text-dark-gray font-josefin text-3xl text-center font-bold mb-12">
        Our Customer Says
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
