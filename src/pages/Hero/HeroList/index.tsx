import { Link } from "react-router-dom";
import heroList from "../../../mock/characters.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";
import useSort from "../../../hooks/useSort";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";

const HeroList = () => {
  const { data } = useSort({ data: heroList });
  return (
    <CardWrapper>
      <h1>Герои</h1>
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

export default HeroList;
