import React, { useState, useEffect } from 'react';
import {
    Pagination
} from 'react-bootstrap';

interface Props {
    totalItemSize: number;
    pageSize: number;
    callbackForSetPage: (pageIndex: number)=> void
}
const CustomPaginationV3: React.SFC<Props> =  ({ totalItemSize, pageSize, callbackForSetPage }: Props)=> {
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState();

    useEffect(()=> {
        // setCurrentPage(1);
        setPages(totalItemSize / pageSize);
    });

    function setPage(pageIndex: number) {
        setCurrentPage(pageIndex);
        callbackForSetPage(pageIndex);
    }

    function range(start, stop, step=1) {
        try {
            return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
        } catch(ex) {
            return [];
        }
    }

    return (
    <Pagination>
        <Pagination.First disabled={currentPage === 1} onClick={()=> setPage(1)}/>
        <Pagination.Prev disabled={currentPage === 1} onClick={()=> setPage(currentPage-1)} />
        {range(1, pages+1).map((page,index)=> 
        <Pagination.Item key={index} active={currentPage === page}
          onClick={()=> setPage(page)}
        >{page}</Pagination.Item>
        )}
        <Pagination.Next disabled={currentPage === pages} onClick={()=> setPage(currentPage+1)}/>
        <Pagination.Last disabled={currentPage ===pages} onClick={()=> setPage(pages)} />
    </Pagination>
    );
}

export default CustomPaginationV3;