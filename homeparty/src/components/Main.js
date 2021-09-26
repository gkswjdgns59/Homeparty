import React from 'react';
import styles from './Main.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import FieldDice from './FieldDice';
import FieldCard from './FieldCard';
import FieldTeam from './FieldTeam';

export default function Main() {

    return (
        <div>
            <Container className={styles.contain}>
                <Row className={styles.rowUp}>
                    <Col xs={6} className={styles.colDice}>
                        <FieldDice/>
                    </Col>
                    <Col xs={6} className={styles.colCard}>
                        <FieldCard/>
                    </Col>
                </Row>
                <Row className={styles.rowDown}>
                    <Col xs={12} className={styles.colTeam}>
                        <FieldTeam/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

