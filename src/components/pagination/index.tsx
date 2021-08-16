import React , {useState} from 'react'
import "./styles.css";

const Index: React.FC<{pagination: number, currentPage: number, setCurrentPage: Function, fetchAllData: Function}> = ({pagination, currentPage, setCurrentPage, fetchAllData}) => {

    const [curPage, setCurrPage] = useState(1);
    let totalPageCount: Array<number> = [];
    for(let i =0; i < Math.ceil(pagination/50); i++) {
        totalPageCount.push(i);
    }

    function fetchNextPage(offset: number, pageSelected: number) {
        setCurrPage(pageSelected);
        const searchParams = {
            "limit": 50,
            "offset": offset
        }
        fetchAllData(searchParams)
    }
    
    function createPagination() {
        let paginationRow = totalPageCount.map((pageNumber, index) => {
            return (
                <div onClick={()=>fetchNextPage(index*50, pageNumber+1)} className={curPage === pageNumber+1 ? "selectedPage paginationCell" : "paginationCell"} key={index}>
                    <span>{pageNumber+1}</span>
                </div>
            )
        })
        return paginationRow;
    }

    return (
        <div className="paginationWrapper">
            {createPagination()}
        </div>
    )
}

export default Index;