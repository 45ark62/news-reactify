import React from "react";
import Skeleton from "@components/Skeleton";

function withSkeleton(Component, type, count,direction) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProrps } = props;
    if (isLoading){
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...restProrps} />;
  };
}

export default withSkeleton;
