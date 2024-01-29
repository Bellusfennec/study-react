import useFetch from "../../hooks/useFetch";

interface Item {
  id: string;
  title: string;
}

function DemoFetch() {
  const { data, isLoading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <div>
        <button onClick={() => refetch({ params: { _limit: 3 } })}>Перезапросить</button>
      </div>
      {isLoading && "Загрузка..."}
      {error && "Произошла ошибка"}
      {data && !isLoading && data.map((item: Item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}
export default DemoFetch;
