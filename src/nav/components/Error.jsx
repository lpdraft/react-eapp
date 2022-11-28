import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
export const Error = () => {
  return (
    <>
      <Card className="mt-3">
        <section className="p-3">
          <h1 className="text-center text-danger">404!</h1>
          <h3 className="text-center">
            Sorry, we can not find the page you looking for..
          </h3>
        </section>

        <Link to="/home" className="btn btn-danger">
          Back To Home Page
        </Link>
      </Card>
    </>
  );
};
