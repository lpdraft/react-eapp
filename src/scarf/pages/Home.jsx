import { Container, Card } from "react-bootstrap";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <>
      <Container>
        <Card className="mt-1">
          <Card.Title className="mt-3  text-center">
            <h2 className="fs-1">
              In a ball of yarn is the potential to make a{" "}
              <span className="text-success">dream</span> that your have{" "}
              <span className="text-success">come true</span>
            </h2>
          </Card.Title>

          <Card.Body className="text-center text-muted">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex
              velit doloribus doloremque ipsa qui, aut voluptas. Animi mollitia
              ipsum porro.
            </p>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};
