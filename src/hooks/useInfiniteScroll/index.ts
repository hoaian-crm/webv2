import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useInfiniteScroll = ({
  limit,
  total,
  step
} = {
    limit: 0,
    total: 100,
    step: 10
  }) => {

  const [pagination] = useSearchParams({
    limit: limit.toString(),
  });

  const _limit: number = useMemo(() => +(pagination.get('limit') || '0'), [pagination, limit])

  const next = () => {
    if (_limit >= total) return;
    pagination.set('limit', (_limit + step).toString());
  }

  return {
    limit: _limit,
    next
  }
}
