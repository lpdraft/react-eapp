import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getScarfById } from "../helpers";
import { currencyFormat } from "../../assets/utilities/currencyFormat";
import { Card, Button } from "react-bootstrap";

export const ScarfInfo = () => {
  const { scarfId } = useParams();
  // console.log(scarfId);

  const navigate = useNavigate();

  const scarf = getScarfById(scarfId);
  // console.log(scarf);

  // const scarf = useMemo(() => getScarfById(scarfId), [scarfId]);

  const onBackPrevPage = () => {
    // Vuelve a la página anterior
    navigate(-1);
  };

  // Si no no hay el producto que busco que me lleve al home
  if (!scarf) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <h6>ScarfInfo</h6>

      <Card className="p-1">
        <Card.Img
          src={scarf.img}
          height="600px"
          alt={scarf.title}
          className="img-thumbnail"
        />

        <Card.Body>
          <Card.Title>
            <h3 className="text-center fs-1">{scarf.title}</h3>
          </Card.Title>

          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item text-success fw-bold fs-2">
              {currencyFormat(scarf.price)}
            </li>
            <li className="list-group-item text-muted">{scarf.category}</li>
          </ul>

          <Button
            variant="outline-danger"
            onClick={onBackPrevPage}
            className="fw-bold"
          >
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
