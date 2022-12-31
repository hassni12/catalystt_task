import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "../components/Image";
import { Context } from "../Context";


const Photos = () => {
  const { allData } = useContext(Context);


  const images = allData.map((img, i) => {
    return <Image key={img._id} img={img} />;
  });

  return (
    <main >
      <Container>
        <Row>{images}</Row>
      </Container>
    </main>
  );
};

export default Photos;
