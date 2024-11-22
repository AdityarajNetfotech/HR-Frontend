const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxButtons = 5; // Limit of 5 buttons
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage < maxButtons - 1) {
        startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "16px",
                }}>
                <div>
                    Showing <span style={{ color: "steelblue" }}>{currentPage}-{totalPages}</span> from <span style={{ color: "steelblue" }}>{totalPages}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                    }}>
                    <i
                        className="fa-solid fa-angle-left"
                        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                        style={{
                            cursor: currentPage > 1 ? "pointer" : "not-allowed",
                            opacity: currentPage > 1 ? 1 : 0.5,
                        }}
                    />
                    {[...Array(endPage - startPage + 1)].map((_, index) => {
                        const pageNumber = startPage + index;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                                style={{
                                    backgroundColor: currentPage === pageNumber ? "lightblue" : "white",
                                    color: currentPage === pageNumber ? "white" : "black",
                                    padding: "2px 8px",
                                    borderRadius: "4px",
                                }}>
                                {pageNumber}
                            </button>
                        );
                    })}
                    <i
                        className="fa-solid fa-angle-right"
                        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                        style={{
                            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
                            opacity: currentPage < totalPages ? 1 : 0.5,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Pagination;