import { Autocomplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import trading from "../images/Trading.png";

export const StockOverViewPage = () => {
  return (
    <div>
      <div className="text-center">
        <img src={trading} />
      </div>
      <Autocomplete />
      <StockList />
    </div>
  );
};
