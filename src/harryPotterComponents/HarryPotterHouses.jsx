import PropTypes from "prop-types";

const HarryPotterHouses = ({ houses }) => {
  const {
    animal,
    colors, // Array
    emoji,
    founder,
    house,
  } = houses;
  return (
    <div className="mt-14">
      <p className="my-2 font-bold">
        animal: <span className="font-normal">{animal}</span>
      </p>
      <p className="mb-2 font-bold">
        colors:{" "}
        {colors.map((color, idx) => (
          <span className="font-normal px-2" key={idx}>
            {color}
          </span>
        ))}
      </p>
      <p className="mb-2 font-bold">
        emoji: <span className="font-normal">{emoji}</span>
      </p>
      <p className="mb-2 font-bold">
        founder: <span className="font-normal">{founder}</span>
      </p>
      <p className="mb-2 font-bold">
        house: <span className="font-normal">{house}</span>
      </p>
    </div>
  );
};

HarryPotterHouses.propTypes = {
  houses: PropTypes.object.isRequired,
};
export default HarryPotterHouses;
