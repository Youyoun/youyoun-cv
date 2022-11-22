import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const heading = {
  marginBottom: "15px",
  display: "block",
  fontSize: "10px",
  textTransform: "uppercase",
  color: "#999999",
  fontWeight: "500",
  letterSpacing: "5px",
} as const;

const headingMeta = {
  fontSize: "18px",
  marginBottom: "3em",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "5px",
  lineHeight: "1.8",
  position: "relative",
} as const;

type Props = {
  title: string,
  subTitle: string
}

export default function SectionHeader({title, subTitle}: Props) {
  return (
    <Row className="row">
      <Col md={6}>
        <span style={heading}>{title}</span>
        <h2 style={headingMeta}>{subTitle}</h2>
      </Col>
    </Row>
  )
}
