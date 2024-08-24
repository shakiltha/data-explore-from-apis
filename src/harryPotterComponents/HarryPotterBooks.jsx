import PropTypes from "prop-types";

const HarryPotterBooks = ({ book }) => {
  const { cover, description, pages, releaseDate, title } = book;

  return (
    <div className="lg:w-[40rem] p-2">
      <img className="py-2 mx-auto lg:mx-0" src={cover} alt={title} />
      <p className="font-bold pb-2">
        Description: <span className="font-normal">{description}</span>
      </p>
      <p className="font-bold pb-2">
        Title: <span className="font-normal">{title}</span>
      </p>
      <p className="font-bold pb-2">
        Pages: <span className="font-normal">{pages}</span>
      </p>
      <p className="font-bold">
        Release: <span className="font-normal">{releaseDate}</span>
      </p>
    </div>
  );
};

HarryPotterBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

export default HarryPotterBooks;
