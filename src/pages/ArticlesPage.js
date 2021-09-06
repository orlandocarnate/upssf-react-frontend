import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard.js';
import { Row, Col, Image, ListGroup, Button, Card, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios';

export default function Articles() {
    const [articles, setArticles] = useState([])
    // const apiUrl = 'http://api.upssf.org'

    useEffect(() => {

        async function fetchArticles() {
            const { data } = await axios.get(`/api/articles/`)
            console.log(data)
            setArticles(data)
        }

        fetchArticles()

    }, [])

    const max_length = 200


    return (
        <div className="mt-3 mb-5">
                {articles.map(article =>
                (
                    <Row>
                    <div key={article._id} sm={12} md={6} lg={4} xl={3} className="my-4">
                        <h3><Link to={`/article/${article.slug}`}>{article.title}</Link></h3>
                        Author: {article.officer_name}<br />
                        <em>
                            Published: {new Intl.DateTimeFormat(
                            'en-US',
                            {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                            }).format(new Date(article.publishDate))}
                        </em>
                        <br />

                        <hr />

                    </div>
            </Row>
                )
                )}

        </div>
    )
}

