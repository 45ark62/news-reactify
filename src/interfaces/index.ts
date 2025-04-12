export interface INews{
    author:string,
    category:string[],
    description:string,
    id:string,
    image:string,
    language:string,
    published:string,
    title?:string,
    url?:string
}
export interface NewsApiResponse{
    news: INews[];
    page: number;
    status: string;
  }
  export interface CategoriesApiResponse{
    categories: string[];
    description: string;
    status: string;
  }
  
export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}
export interface IFilters{
    page_number:number,
    page_size:number,
    category:string | null,
    keywords:string    
}
export type ParamsType=Partial<IFilters>

