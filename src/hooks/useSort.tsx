import { useSearchParams } from "react-router-dom";
import { Direction } from "../types";

interface useSortProps {
  data: any[];
  direction?: Direction;
}

const useSort = (props: useSortProps) => {
  const { data, direction = "ASC" } = props;
  let [params] = useSearchParams();
  const query = (
    params.get("sort") === "ASC" || params.get("sort") === "DESC" ? params.get("sort") : direction
  ) as Direction;

  function getSorted(data: any[]) {
    const sortedData = [...data].sort((a: any, b: any) => {
      const aa = +new Date(a.created).getTime();
      const bb = +new Date(b.created).getTime();
      return query === "ASC" ? bb - aa : bb + aa;
    });
    return sortedData;
  }

  return { data: getSorted(data), direction };
};

export default useSort;
