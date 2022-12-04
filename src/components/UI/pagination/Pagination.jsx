import React from 'react'
import { getPageCount, getPagesArray } from '../../../utils/pages';

export default function Pagination({totalPages, currentPage, onChangePage}) {
  // TODO: pagination remake with useMemo(don't rerender each time)
  let pagesArray = getPagesArray(totalPages)

  return (
    <div className='pagination'>
    {
      pagesArray.map(p =>
        <span
          onClick={() => onChangePage(p)}
          className={p === currentPage ? 'page active' : 'page'}
          key={p}
        >
          {p}
        </span>
      )
    }
  </div>
  )
}
