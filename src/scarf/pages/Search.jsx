import { ProductItem } from "../components";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getScarfByName } from "../helpers";
// import searchCSS from "../../assets/css/search.css";

export const Search = () => {
  const location = useLocation();
  // console.log(location);

  const { q = "" } = queryString.parse(location.search);
  // // console.log(query);

  const scarfName = getScarfByName(q);

  return (
    <>
      <h6>SearchPage</h6>

      <div>
        {q === "" ? (
          <div className="alert alert-primary"> Search Scarf</div>
        ) : (
          scarfName.length === 0 && (
            <div className="alert alert-danger">
              <b>{q}</b> ? We can't find that scarf in our DB
            </div>
          )
        )}

        {scarfName.map((scarf) => (
          <ProductItem key={scarf.id} {...scarf} />
        ))}
      </div>
    </>
  );
};
