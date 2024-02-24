import { Link, useSearchParams } from "react-router-dom";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";
import useSort from "../../../hooks/useSort";
import { useRef, useState } from "react";
import useFetchMore from "../../../hooks/useFetchMore";

const EpisodeList = () => {
  const url = "https://rickandmortyapi.com/api/episode";
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { data: heroList, isLoading, isError, isHasMore } = useFetchMore({ url, page, name });
  const { data } = useSort({ data: heroList });
  const observerRef = useRef<IntersectionObserver | null>(null);
  let [, serParams] = useSearchParams();

  const lastNodeRef = (node: any) => {
    if (isLoading) return;
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isHasMore) {
        serParams({ sort: "null" });
        setPage((state) => state + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  };

  const handlerChangeSearch = (event: any) => {
    setName(event.target.value);
    setPage(1);
  };
  return (
    <CardWrapper>
      <h1>Эпизоды</h1>
      <SelectDirectionSort />
      <input type="text" onChange={handlerChangeSearch} />
      {data.map((item, index) => {
        if (data.length === index + 1) {
          console.log(data, data.length, index + 1);
          return (
            <div ref={lastNodeRef} key={item.id}>
              <Link to={`${item.id}`}>
                {item.id} {item.name} ({new Date(item.created).toLocaleDateString()},{" "}
                {new Date(item.created).toLocaleTimeString()})
              </Link>
            </div>
          );
        } else {
          return (
            <div key={item.id}>
              <Link to={`${item.id}`}>
                {item.id} {item.name} ({new Date(item.created).toLocaleDateString()},{" "}
                {new Date(item.created).toLocaleTimeString()})
              </Link>
            </div>
          );
        }
      })}
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка</p>}
    </CardWrapper>
  );
};

export default EpisodeList;
