const Pagination = ({ postPerPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <p
                onClick={() => paginate(number)}
                href="/"
                className="page-link"
              >
                {number}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
