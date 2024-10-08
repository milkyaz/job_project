import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "store/filters/filter-selectors";
import { removeFilter, clearFilter } from "store/filters/filter-actions";

const FilterPanel = () => {
  const dispatch = useDispatch(clearFilter);
  const currentFilters = useSelector(selectFilters);
  //если панель поиска пустая, то возвращает значение null
  if (currentFilters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              onClear={() => dispatch(removeFilter(filter))}
              key={filter}
              variant="clearable"
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
