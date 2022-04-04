import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans'>
            <div className='first-ques'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://miro.medium.com/max/866/1*C_pRaGwyTZ-sjBzEXLVifQ.png" />
                    <Card.Body>
                        <Card.Title><h2>1. What is Context API?</h2></Card.Title>
                        <Card.Text>
                            <p>The <span className='highlight'>Context API</span> is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.
                                It’s aimed at solving the problem of prop drilling. <span className='highlight'>Context API</span> is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
                                Using <span className='highlight'>context</span>, we can avoid passing props through intermediate elements.

                                Without above the information, I can also added that The Context API makes it easier to have our global and app-wide data available to all components therefore, making it easier and more accessible.
                                The Context API has been considered as one of the key features of the react framework and a prominent improvement in the recent releases of the framework.</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='sec-ques'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://assets.hongkiat.com/uploads/html-5-semantics/document-outline-example.jpg" />
                    <Card.Body>
                        <Card.Title><h2>2. What is <span className='semen-color'>sementic tag</span> ?</h2></Card.Title>
                        <Card.Text>
                            <p><small>Before we know what a <span className='semen-color'>sementic tag</span> is, we need to know why we need to use a <span className='semen-color'>sementic tag</span>. Some important points were discussed in this regard:</small><br /><br />
                                <span className='weight'>The are several advantages of using <span className='semen-color'>sementic tag</span> in HTML:</span>
                                <ul>
                                    <li>The <span className='semen-color'>sementic tag</span> help the search engines and other user devices to determine the importance and context of web pages.</li>
                                    <li>The pages made with semantic elements are much easier to read.</li>
                                    <li>It has greater accessibility. It offers a better user experience.</li>
                                </ul>

                                Now I can say, The <span className='semen-color'>sementic tag</span> refers to the tags that provide meaning to an HTML page rather than just presentation.
                                It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;