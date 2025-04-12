
import { IPaginationProps } from '@interfaces/index';
import styles from './styles.module.css'

function Pagination({totalPages,handleNextPage,handlePreviousPage,handlePageClick,currentPage}:IPaginationProps) {
  return (
    <div className={styles.pagination}>
    <button disabled={currentPage<=1} className={styles.arrow} onClick={handlePreviousPage}>{'<'}</button>
    <div className={styles.list}>
        {[...Array(totalPages)].map((_,index)=>{
            return (
              <button
                key={index}
                className={styles.pageNumber}
                onClick={() => handlePageClick(index + 1)}
                disabled={index + 1 === currentPage}
              >
                {index + 1}
              </button>
            );

        })}
    </div>
    <button disabled={currentPage>=10} className={styles.arrow} onClick={handleNextPage}>{'>'}</button>
    </div>
  )
}

export default Pagination