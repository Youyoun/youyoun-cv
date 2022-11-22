import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

type Props = {
    title: string,
    subTitle: string
}

export default function SectionHeader({title, subTitle}: Props) {
    return (
        <Row>
            <Col md={12}>
                <span className="heading">{title}</span>
                <h2 className="headingMeta">{subTitle}</h2>
            </Col>
        </Row>
    )
}
