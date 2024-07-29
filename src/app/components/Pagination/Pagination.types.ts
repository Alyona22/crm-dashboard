export interface PaginationTypes {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
