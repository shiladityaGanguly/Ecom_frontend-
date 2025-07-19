// components/CategoryCard.jsx
export default function CategoryCard({ image, name, bgColor = "bg-gray-100" }) {
  return (
    <div className="rounded overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className={`text-center py-4 ${bgColor}`}>
        <p className="uppercase text-sm font-semibold tracking-wide text-gray-700 border-b-2 border-indigo-500 inline-block">
          {name}
        </p>
      </div>
    </div>
  );
}
