import PropTypes from "prop-types";

const HarryPotterCharacters = ({ character }) => {
  const {
    birthdate,
    children, // Array
    fullName,
    hogwartsHouse,
    image,
    interpretedBy,
    nickname,
  } = character;

  return (
    <div className="mt-14">
      <p className="pb-2">
        <img className="mx-auto lg:mx-0" src={image} alt={fullName} />
      </p>
      <p className="font-bold pb-2">
        full name: <span className="font-normal">{fullName}</span>
      </p>
      <p className="font-bold pb-2">
        nickname: <span className="font-normal">{nickname}</span>
      </p>
      <p className="font-bold py-2">
        birth date: <span className="font-normal">{birthdate}</span>
      </p>
      <p className="font-bold pb-2">
        children:{" "}
        {children.map((child, idx) => (
          <span key={idx} className="font-normal px-2">
            {child}
          </span>
        ))}
      </p>
      <p className="font-bold pb-2">
        hog warts house: <span className="font-normal">{hogwartsHouse}</span>
      </p>
      <p className="font-bold pb-2">
        interpreted By: <span className="font-normal">{interpretedBy}</span>
      </p>
    </div>
  );
};

HarryPotterCharacters.propTypes = {
  character: PropTypes.object.isRequired,
};

export default HarryPotterCharacters;
