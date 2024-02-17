import { Link } from "react-router-dom";
import episodeList from "../../../mock/episode.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";
import useSort from "../../../hooks/useSort";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";

const EpisodeList = () => {
  const { data } = useSort({ data: episodeList });
  return (
    <CardWrapper>
      <h1>Эпизоды</h1>
      <SelectDirectionSort />
      {data.map((item) => (
        <div key={item.id}>
          <Link to={`${item.id}`}>
            {item.name} ({new Date(item.created).toLocaleDateString()}, {new Date(item.created).toLocaleTimeString()})
          </Link>
        </div>
      ))}
    </CardWrapper>
  );
};

export default EpisodeList;
