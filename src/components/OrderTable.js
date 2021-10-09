import React, { useMemo, useState } from 'react'
import {useTable, usePagination} from 'react-table'
import ReactPaginate from 'react-paginate'
import orderData from '../Data/Order_Data.json'
import {tableColumns} from '../Data/data'
import './OrderTable.module.css'
import './TableTags.css'

export const OrderTable = () => {

    const columns = useMemo(()=> tableColumns, []);
    const data = useMemo(()=> orderData, []);

    // const [users, setUsers] = useState(orderData.slice(0,20));
    // const [pageNumber, setPageNumber] = useState(0);
 
    // const usersPerPage = 5;
    // const pageVisited = pageNumber * usersPerPage;
    // const pageCount = Math.ceil(users.length / usersPerPage);

    // const changePage = ({selected}) => {
    //     setPageNumber(selected);
    // };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    } = useTable({columns, data, initialState:{pageSize:5} }, usePagination);

    // const {pageIndex} = state;

    // const displayUsers = users
    // .slice(pageVisited, pageVisited + usersPerPage)
    // .map((user) => {});
    
  

     return (
        <>
        <table{...getTableProps()}>
            <thead> 
                {headerGroups.map((headerGroups) =>(
                  <tr {...headerGroups.getHeaderGroupProps()}>
                      {headerGroups.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                  </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        <div className="pagination">
            <button className="backBtn" onClick={() => previousPage()} disabled={!canPreviousPage}>
                Back</button>

                {/*----------   Need to fix pagination here  ---------------*/}

            <button className="firstBtn" onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'1'}
            </button>{' '}
            <button className="secondBtn" onClick={() => nextPage()} disabled={!canNextPage}>
                {'2'}
            </button>{' '}
            <button className="nextBtn" onClick={() => nextPage()} disabled={!canNextPage}>
                Next</button>
        </div>
        </> 
    )
}

export default OrderTable
