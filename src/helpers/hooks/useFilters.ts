import { IFilters } from "@interfaces/index";
import { useState } from "react";
export const useFilters = (initialFilters:IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: string | number | null):void => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
