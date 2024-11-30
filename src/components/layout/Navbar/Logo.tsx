import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <span className="sm:text-3xl text-2xl font-mono">
          <span className="text-gray-400">&lt;</span>
          <span className="text-blue-600">grBodin</span>
          <span className="text-gray-400">/&gt;</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
