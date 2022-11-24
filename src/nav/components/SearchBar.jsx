import { useForm } from "../../scarf/hooks/useForm";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);

  // leo las query que mando al url
  const { q = "" } = queryString.parse(location.search);
  // console.log(query);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <div className="search-container">
        <form className=" text-start text-white" onSubmit={onSearchSubmit}>
          <input
            type="text"
            autoComplete="off"
            className="border search-input text-white form-control bg-transparent"
            placeholder="Search..."
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
      </div>
    </>
  );
};
