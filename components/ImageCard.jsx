// components/ImageCard.js
const ImageCard = ({ src, title }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={src} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default ImageCard;
  