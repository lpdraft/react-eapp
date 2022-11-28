import { ProductItem } from "../components";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getScarfByName } from "../helpers";
import { Footer } from "../components/Footer";

export const Search = () => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const scarfName = getScarfByName(q);

  return (
    <>
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
      <Footer />
    </>
  );
};
