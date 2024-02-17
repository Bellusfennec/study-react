import { Link } from "react-router-dom";
import locationList from "../../../mock/location.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";
import useSort from "../../../hooks/useSort";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";

const LocationList = () => {
  const { data } = useSort({ data: locationList });
  return (
    <CardWrapper>
      <h1>Локации</h1>
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

export default LocationList;
