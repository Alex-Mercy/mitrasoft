import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { useMatch } from "react-router-dom";
import { Card, Col, Container, Row } from 'react-bootstrap'

import { onSetPhotoDetails } from '../store/actions/galeryAC';
import Loader from '../components/Loader';


function PictureDetails() {
  const dispatch = useDispatch();
  const { photoDetails: photo, isLoaded } = useSelector(({ galery }) => galery);

  const match = useMatch("/details/:id/");
  const photoId = match.params.id;

  React.useEffect(() => {
    dispatch(onSetPhotoDetails(photoId));
  }, []);

  return (
    <Container>
      {isLoaded
        ? <Row className="justify-content-center my-4">
          <Col xs={8}>
            <Card>
              <Card.Img height='400' variant="top" src={photo.url} />
              <Card.Body>
                <Card.Text>
                  {photo.details}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        : <Loader />
      }


    </Container>
  )
}

export default PictureDetails