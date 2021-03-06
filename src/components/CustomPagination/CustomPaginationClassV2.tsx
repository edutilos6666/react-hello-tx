import React from 'react';
import {
    Pagination
} from 'react-bootstrap';

// const propTypes = {
//     items: PropTypes.array.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     initialPage: PropTypes.number   
// }
 
const defaultProps = {
    initialPage: 1
}

interface Props {
    items: Object[],
    onChangePage: (workerList:Object[])=>void,
    initialPage: number,
    totalSize: number,
    start: number,
    getStudentList: (first: number)=> Object[]
}
 
class CustomPaginationClassV2 extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }
 
    componentWillMount() {
        console.log(this.props);
        this.setPage(this.props["initialPage"]);
    }
 
    setPage(page) {
        var items = this.props["items"];
        var pager = this.state["pager"];
        let totalSize = this.props["totalSize"];
        
 
        if (page < 1 || page > pager.totalPages) {
            return;
        }
 
        // get new pager object for specified page
        pager = this.getPager(totalSize, page, items.length);
 
        // get new page of items from items array
        // var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        var pageOfItems = this.props["getStudentList"](pager.startIndex+ pager.endIndex+1 | 0);
        debugger
 
        // update state
        this.setState({ pager: pager });
 
        // call change page function in parent component
        this.props["onChangePage"](pageOfItems);
    }
 
    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;
 
        // default page size is 10
        pageSize = pageSize || 10;
 
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
        var pages = this.range(startPage, endPage + 1);
 
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
 
    range(start, stop, step=1) {
        return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
    }

    render() {
        var pager = this.state["pager"];
 
        return (
            <Pagination>
                <Pagination.First disabled={pager.currentPage === 1} onClick={()=> this.setPage(1)}/>
                <Pagination.Prev disabled={pager.currentPage === 1} onClick={()=> this.setPage(pager.currentPage-1)} />
                {pager.pages.map((page,index)=> 
                <Pagination.Item key={index} active={pager.currentPage === page}
                  onClick={()=> this.setPage(page)}
                >{page}</Pagination.Item>
                )}
                <Pagination.Next disabled={pager.currentPage === pager.totalPages} onClick={()=> this.setPage(pager.currentPage+1)}/>
                <Pagination.Last disabled={pager.currentPage === pager.totalPages} onClick={()=> this.setPage(pager.totalPages)} />
            </Pagination>
        );
    }
}
 
// CustomPaginationClass.propTypes = propTypes;
// CustomPaginationClass["defaultProps"];
export default CustomPaginationClassV2;