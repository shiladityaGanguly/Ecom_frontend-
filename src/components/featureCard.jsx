import {
  FaUtensils,
  FaLeaf,
  FaHeartbeat,
  FaHandsHelping,
  FaRegSmile,
  FaUserNurse,
  FaBox,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils size={28} />,
    title: "Variety",
    description: (
      <>
        <span className="text-green-600">Roasted</span> – copra pieces are roasted. <br />
        <span className="text-green-600">Cold Press</span> – copra pieces are not roasted. <br />
        <span className="text-green-600">Virgin</span> – milk from fresh coconut is used.
      </>
    ),
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Pure",
    description:
      "All varieties of coconut oil supplied by Cocoguru are 100% pure. Free from any adulteration, perfumes, additives, preservatives and chemicals.",
  },
  {
    icon: <FaHandsHelping size={28} />,
    title: "Long Shelf Life",
    description:
      "Sourcing of good quality coconut / copra, thorough drying to remove all moisture, fine filtering and tight packing ensures long shelf life.",
  },
  {
    icon: <FaUtensils size={28} />,
    title: "Edible Use",
    description:
      "This coconut oil is suitable for use in all types of cooking. Salad dressing, deep frying, shallow frying and raw consumption. Popular in Konkan / Malabar delicacies.",
  }
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white">
      {features.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-sm p-4 hover:shadow-md transition bg-white flex flex-col gap-3"
        >
          <div className="text-green-700">{item.icon}</div>
          <h3 className="font-semibold text-lg text-green-700">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
