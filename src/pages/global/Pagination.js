// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", marginTop: "16px" }}>
            <i
                className="fa-solid fa-angle-left"
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                style={{ cursor: currentPage > 1 ? 'pointer' : 'not-allowed', opacity: currentPage > 1 ? 1 : 0.5 }}
            />
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    style={{
                        backgroundColor: currentPage === index + 1 ? "lightblue" : "white",
                        color: currentPage === index + 1 ? "white" : "black",
                        padding: "2px 8px",
                        borderRadius: "4px",
                    }}
                >
                    {index + 1}
                </button>
            ))}
            <i
                className="fa-solid fa-angle-right"
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                style={{ cursor: currentPage < totalPages ? 'pointer' : 'not-allowed', opacity: currentPage < totalPages ? 1 : 0.5 }}
            />
        </div>
    );
};

export default Pagination;
