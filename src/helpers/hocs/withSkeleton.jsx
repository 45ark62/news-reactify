import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton"

function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProrps } = props;
    if (isLoading){
      return <Skeleton count={count} type={type} />;
    }
    return <Component {...restProrps} />;
  };
}

export default withSkeleton;
