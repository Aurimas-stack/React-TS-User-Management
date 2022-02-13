import { FC } from "react";

import { Routes } from "~/constants";
import { IItem } from "~/constants";
import { getItemCount } from "~/utils/getFunctions";
import FilterTab from "./components/FilterTab";

import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }): JSX.Element => {
  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab
        title="Wrong"
        count={getItemCount(items, "email")}
        path={Routes.Weak}
      />
      <FilterTab
        title="Reused"
        count={getItemCount(items)}
        path={Routes.Reused}
      />
      <FilterTab
        title="Old"
        count={getItemCount(items, "age")}
        path={Routes.Old}
      />
    </div>
  );
};

export default Filter;
