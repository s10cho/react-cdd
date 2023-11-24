import React, {useState} from 'react';

export const DashboardTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const data = Array.from({length: 101}, (_, index) => ({
        name: "user" + index,
        role: "Admin",
        email: "user" + index + "@example.com"
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        const newPage = currentPage - 10 < 1 ? 1 : currentPage - 10;
        setCurrentPage(newPage);
    };

    const handleNextClick = () => {
        const newPage = currentPage + 10 > totalPages ? totalPages : currentPage + 10;
        setCurrentPage(newPage);
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">대시보드 테이블</h1>
            <table className="min-w-full">
                <thead>
                <tr>
                    <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold">이름</th>
                    <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold">역할</th>
                    <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold">이메일</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{item.role}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {totalPages > 1 && (
                    <>
                        <button
                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-600' : 'bg-blue-500 text-white'}`}
                            onClick={handlePrevClick}
                        >
                            이전
                        </button>
                        {pageNumbers.slice(0, 10).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={`mx-1 px-3 py-1 rounded-md ${
                                    currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                                onClick={() => handleClick(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <button
                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-600' : 'bg-blue-500 text-white'}`}
                            onClick={handleNextClick}
                        >
                            다음
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
