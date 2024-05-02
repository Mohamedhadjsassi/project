import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function FoodO({ title, price, image,id,quantity }) {
    const foodRef = useRef(null);

    useEffect(() => {
        const foodElement = foodRef.current;
        foodElement.classList.add('slide-in');
    }, []);
//------------------------------------------------------------------------------------------------------------


    return (
        <Card style={{ width: '18rem',height:'400px', display: 'flex', flexDirection: 'column', alignItems: 'center',padding:'0px' }} ref={foodRef} className="food-card">
            
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                <Card.Img  variant="top" src={image} style={{ width: '100%', height: 'auto',padding:'0px' }} />
            </div>
            <Card.Body style={{ marginTop: 'auto', padding: '10px' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Price : {price}</Card.Text>
                <Card.Text>quantity : {quantity}</Card.Text>
                    
            </Card.Body>
            
        </Card>
    );
}

export default FoodO;