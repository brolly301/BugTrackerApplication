export const Pagination = (
  currentPage,
  setCurrentPage,
  ticketsPerPage,
  searchBy
) => {
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = searchBy.slice(indexOfFirstTicket, indexOfLastTicket);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket };
};
