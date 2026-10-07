import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HallDetails.css";

const HallDetails = () => {
  const { id } = useParams();
  const [hall, setHall] = useState(null);

  useEffect(() => {
    fetchHall();
  }, []);

  const fetchHall = async () => {
    const res = await axios.get(
      `http://localhost:5001/api/vendors/${id}`
    );
    setHall(res.data);
  };

  if (!hall) return <p>Loading...</p>;

  return (
    <div className="hall-details">
      <h1>{hall.name}</h1>

      {/* IMAGE GALLERY */}
      <div className="gallery">
        {hall.images.map((img, i) => (
          <img
            key={i}
            src={`http://localhost:5001${img}`}
            alt="Hall"
          />
        ))}
      </div>

      <p><strong>Guests:</strong> {hall.guests}</p>
      <p><strong>Price:</strong> ETB {hall.price}</p>

      <p className="description">{hall.description}</p>

      {hall.link && (
        <a href={hall.link} target="_blank" rel="noreferrer">
          Visit Website
        </a>
      )}
    </div>
  );
};

export default HallDetails;