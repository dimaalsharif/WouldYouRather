import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Row, Col } from "react-bootstrap";
class ProfileCard extends Component {
  render() {
    const { user } = this.props;
    const answered = Object.keys(user.answers).length;
    const created = user.questions.length;
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs={3} md={3}>
              <Image
                thumbnail
                src={user.avatarURL}
                alt="ejre"
                className="image"
              />
            </Col>

            <Col xs={6} md={6} className="inside">
              <Card.Title> {user.name} </Card.Title>
              <Card.Text className="setting">
                {" "}
                Answered Questions: {answered}{" "}
              </Card.Text>
              <div className="btm"></div>
              <Card.Text> Created Questions: {created}</Card.Text>
            </Col>

            <Col xs={3} md={3}>
              <div className="inside">
                <Card.Title className="score"> Score </Card.Title>
                <div className="score-result">
                  <span> {answered + created} </span>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user: user ? user : null,
  };
}

export default connect(mapStateToProps)(ProfileCard);
