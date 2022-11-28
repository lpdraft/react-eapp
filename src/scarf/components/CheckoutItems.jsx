import { Card, Row, Col } from "react-bootstrap";
import { scarfsData } from "../../data/dbData";
export const CheckoutItems = () => {
  //   const checkItems = scarfsData.find((i) => i.id === id);

  return (
    <>
      <Row className="mt-3">
        <Col className="col-md-7">
          <Card>
            <Card.Title>
              <h6 className="text-center mt-3 fw-bold">Checkout Page</h6>
            </Card.Title>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="Write your name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input
                      type="address"
                      name="address"
                      className="form-control"
                      placeholder="Your full address"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group text-end">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-md-5">
          <table className="table">
            <thead>
              <tr>
                <th width="30%">Img</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{scarfsData.img}</td>
                <td>{scarfsData.title}</td>
                <td>{scarfsData.price}</td>
                <td>{scarfsData.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </>
  );
};
