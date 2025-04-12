import Skeleton from "@components/Skeleton";

interface Props {
  
  isLoading: boolean;
}
function withSkeleton<P extends object>(Component:React.ComponentType<P>, type?:'banner'|'item', count?:number,direction?:'row'|'column'

) {
  return function WithSkeleton(props:Props & P) {
    const { isLoading, ...restProrps } = props;
    if (isLoading){
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...(restProrps as P)} />;
  };
}

export default withSkeleton;
