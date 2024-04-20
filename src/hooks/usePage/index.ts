import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"

type Props = {
  defaultLimit?: number;
  defaultPage?: number;
}

export const usePage = (props: Props = {}) => {

  const [pagination] = useSearchParams({
    limit: props.defaultLimit?.toString() || "10",
    page: props.defaultPage?.toString() || "0"
  });

  const page: number = useMemo(() => {
    return +(pagination.get("page") || 0);
  }, [pagination]);

  const limit: number = useMemo(() => {
    return +(pagination.get("limit") || 0);
  }, [pagination])

  const jump = (page: number) => {
    pagination.set('page', page.toString());
  }

  const next = () => {
    jump(page + 1);
  }

  const pre = () => {
    if (page) {
      jump(page - 1);
    }
  }

  return {
    limit,
    page,
    next,
    pre
  }
}
