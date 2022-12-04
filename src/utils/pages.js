export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

// TODO: make hook usePagination
export const getPagesArray = (totalPages) => {
  const arr = []
  for (let i = 0; i < totalPages; i++) {
    arr.push(i + 1)
  }

  return arr
}