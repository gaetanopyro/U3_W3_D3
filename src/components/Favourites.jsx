import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Container>
      <h1 className="display-4">Favourites</h1>
      {favourites.map((jobData, index) => (
        <Row key={index} className="mx-0 mt-3 p-3 justify-content-between" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
          <Col xs={8}>
            <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
          </Col>
          {jobData.company_name && (
            <Col xs={2}>
              <a href={jobData.url} target="_blank" rel="noreferrer">
                {jobData.title}
              </a>
            </Col>
          )}
        </Row>
      ))}
    </Container>
  );
};
export default Favourites;
