import React from "react";
import { useNavigate } from "react-router-dom";
const CompCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={() => {
        navigate(`/companies/${company.name}`);
      }}
    >
      <img
        className="w-full h-48 object-cover object-center"
        src={company.image}
        alt={company.name}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{company.name}</h2>
        {/* <p className="mt-2 text-gray-600">{companies.description}</p> */}
        <div className="mt-4">
          <a
            href={company.website}
            className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompCard;
