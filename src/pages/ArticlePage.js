import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard.js';
import { Row, Col, Image, ListGroup, Button, Card, Collapse } from 'react-bootstrap'

import axios from 'axios';

export default function Article({ match }) {
    const [article, setArticle] = useState([])
    const apiUrl = 'http://api.upssf.org'

    console.log('MATCH ' + match.params.slug)

    useEffect(() => {

        async function fetchArticle() {
            const { data } = await axios.get(`${apiUrl}/api/article/${match.params.slug}`)
            setArticle(data)
        }

        fetchArticle()

    }, [])


    return (
        <div className="mt-3 mb-5">
            <Row>
                <div key={article._id} sm={12} md={6} lg={4} xl={3} className="my-4">
                    <h3>{article.title}</h3>
                        Author: {article.officer_name}<br />
                    <em>
                        Published:
                    </em>
                    <br />
                    <div className="my-4" dangerouslySetInnerHTML={{ __html: article.body }}></div>

                    <hr />

                </div>
            </Row>

        </div>
    )
}

