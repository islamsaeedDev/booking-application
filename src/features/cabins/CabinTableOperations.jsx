import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFiled="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-asc", label: "sort by name (a-z)" },
          { value: "startDate-desc", label: "sort by name (z-a)" },
          { value: "regularPrice-asc", label: "sort by price (low first" },
          { value: "regularPrice-desc", label: "sort by price (high first" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first" },
          { value: "maxCapacity-desc", label: "sort by capacity (high first" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
