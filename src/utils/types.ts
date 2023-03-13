export interface PaginatedData<TData> {
  data: TData[];
  limit: number;
  skip: number;
  total: number;
}
