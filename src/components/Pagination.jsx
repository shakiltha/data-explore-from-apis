import PropTypes from "prop-types";

const Pagination = ({ coronaPerPage, totalCorona, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCorona / coronaPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="lg:mx-auto lg:w-2/4 lg:h-auto mt-4 m-2">
      {pageNumbers.map((number) => (
        <div className="join mt-2" key={number}>
          <button className="join-item btn" onClick={() => paginate(number)}>
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  coronaPerPage: PropTypes.number.isRequired,
  totalCorona: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
