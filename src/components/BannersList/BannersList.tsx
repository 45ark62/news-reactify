import styles from "./styles.module.css";
import withSkeleton from '@helpers/hocs/withSkeleton';
import NewsBanner from '@components/NewsBanner';
import { INews } from "@interfaces/index";
interface Props {
  banners?: INews[]|null;
}
function BannersList({banners}:Props) {
  return (
    <ul className={styles.banners}>
    {banners?.map((banner)=>{
        return (
            <NewsBanner key={banner.id} item={banner}/>
        )
    })}
    </ul>
  )
}
const BannersListWithSkeleton = withSkeleton<Props>(BannersList,"banner",10,'row')
export default BannersListWithSkeleton