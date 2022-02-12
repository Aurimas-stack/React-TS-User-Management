import { FC } from 'react';
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import FilterTab from "./components/FilterTab"
import { getItemCount } from '~/utils/getFunctions';

import './filter-style.scss';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({items}) => {
  
  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users}/>
      <FilterTab title="Wrong" count={getItemCount(items, "email")} path={Routes.Weak}/>
      <FilterTab title="Reused" count={getItemCount(items)} path={Routes.Reused}/>
      <FilterTab title="Old" count={getItemCount(items, "age")} path={Routes.Old} /> 
    </div>
  );
};

export default Filter;
