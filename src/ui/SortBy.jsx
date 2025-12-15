import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options, value }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    setSearchParams({ sortBy: e.target.value });
    searchParams.get("sortBy");
    console.log(searchParams.get("sortBy"));

    //    searchParams.set("sortBy", e.target.value);
    //    setSearchParams(searchParams);
    //    console.log(searchParams);
  }
  return (
    <Select
      onChange={handleChange}
      type="white"
      options={options}
      value={sortBy}
    />
  );
}

export default SortBy;
