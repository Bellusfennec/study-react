/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import heroList from "../../../mock/characters.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";
import useSort from "../../../hooks/useSort";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";
import useFetchMore from "../../../hooks/useFetchMore";
import { useCallback, useRef, useState } from "react";

const HeroList = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { data: heroList, isLoading, isError, isHasMore } = useFetchMore({ url, page, name });
  const { data } = useSort({ data: heroList });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastNodeRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      observerRef.current?.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible");
        }
      });
      if (node) {
        observerRef.current.observe(node);
      }
      console.log("node", node);
    },
    [isLoading, isHasMore]
  );

  const handlerChangeSearch = (event: any) => {
    setName(event.target.value);
    setPage(1);
  };
  return (
    <CardWrapper>
      <h1>Герои</h1>
      <SelectDirectionSort />
      <input type="text" onChange={handlerChangeSearch} />
      {data.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <div ref={lastNodeRef} key={item.id}>
              <Link to={`${item.id}`}>
                {item.name} ({new Date(item.created).toLocaleDateString()},{" "}
                {new Date(item.created).toLocaleTimeString()})
              </Link>
            </div>
          );
        }
        return (
          <div key={item.id}>
            <Link to={`${item.id}`}>
              {item.name} ({new Date(item.created).toLocaleDateString()}, {new Date(item.created).toLocaleTimeString()})
            </Link>
          </div>
        );
      })}
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка</p>}
    </CardWrapper>
  );
};

export default HeroList;
