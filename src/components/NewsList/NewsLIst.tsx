import styles from "./styles.module.css";
import NewsItem from "@components/NewsItem";
import withSkeleton from "@helpers/hocs/withSkeleton";
import { INews } from "@interfaces/index";
interface Props {
  news?: INews[];
}

function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
