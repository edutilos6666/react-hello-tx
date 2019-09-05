import React, { useState, useEffect } from 'react';
import {
    Pagination
} from 'react-bootstrap';
import PagerInput from './PagerInput';

const defaultProps = {
    initialPage: 1
}

interface Props {
    items: Object[],
    onChangePage: (workerList:Object[])=>void,
    initialPage: number
}
 
const CustomPagination: React.SFC<Props> = ({items, onChangePage, initialPage}: Props)=> {
    let [pager] = useState<PagerInput>();

  
    useEffect(()=> {
        console.log(items, initialPage);
        setPage(initialPage);
    });

    const setPage = (page: number)=> {
        // let items = items;
    
 
        if (page < 1 || (pager && page > pager.totalPages)) {
            return;
        }
 
        // get new pager object for specified page
        const customPager: PagerInput = getCustomPager(items.length, page, 10);
        
        // setPager({...pager, ...getCustomPager(items.length, page, 10)});
        pager = customPager;
        console.log(customPager, pager);
        debugger;
 
        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
 
        // update state
        // setPager(pager);
        // setState({ pager: pager });
 
        // call change page function in parent component
        onChangePage(pageOfItems);
    }
 
    const getCustomPager = (totalItems: number, currentPage: number = 1, pageSize: number = 10)=> {
        // default to first page
        // currentPage = currentPage || 1;
 
        // default page size is 10
        // pageSize = pageSize || 10;
 
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
 
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        var pages = range(startPage, endPage + 1);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    function range(start, stop, step=1) {
        return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
    }
 
        // var pager = state.pager;
    //     <ul className="pagination">
    //     <li className={pager.currentPage === 1 ? 'disabled' : ''}>
    //         <a onClick={() => setPage(1)}>First</a>
    //     </li>
    //     <li className={pager.currentPage === 1 ? 'disabled' : ''}>
    //         <a onClick={() => setPage(pager.currentPage - 1)}>Previous</a>
    //     </li>
    //     {pager.pages.map((page, index) =>
    //         <li key={index} className={pager.currentPage === page ? 'active' : ''}>
    //             <a onClick={() => setPage(page)}>{page}</a>
    //         </li>
    //     )}
    //     <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
    //         <a onClick={() => setPage(pager.currentPage + 1)}>Next</a>
    //     </li>
    //     <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
    //         <a onClick={() => setPage(pager.totalPages)}>Last</a>
    //     </li>
    // </ul>
        return (
            <Pagination>
                <Pagination.First disabled={pager.currentPage === 1} onClick={()=> setPage(1)}/>
                <Pagination.Prev disabled={pager.currentPage === 1} onClick={()=> setPage(pager.currentPage-1)} />
                {pager.pages.map((page,index)=> 
                <Pagination.Item key={index} active={pager.currentPage === page}>{page}</Pagination.Item>
                )}
                <Pagination.Next disabled={pager.currentPage === pager.totalPages} onClick={()=> setPage(pager.currentPage+1)}/>
                <Pagination.Last disabled={pager.currentPage === pager.totalPages} onClick={()=> setPage(pager.totalPages)} />
            </Pagination>
        );
}

 
// Pagination.propTypes = propTypes;
// Pagination.defaultProps
export default CustomPagination;