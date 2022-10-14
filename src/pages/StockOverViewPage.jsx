import { Autocomplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";

export const StockOverViewPage = () => {
  return (
    <div>
      <Autocomplete />
      <StockList />
    </div>
  );
};
