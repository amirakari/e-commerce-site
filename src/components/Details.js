import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,title,img,price,company,info,inCart} = value.detailProduct;
                    console.log(inCart);
                    return(
                        <div className="container py-5">
                            {/* tile */}
                            <div className="rom">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span> $</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize mt-3 mb-0" style={{fontWeight: 'bold'}}>
                                        some info about product :
                                    </p>
                                    <br/>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div style={{display: 'inline-flex',marginLeft : -160}}>

                                        <Link to="/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer cart
                                            disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart? "in Cart" : "add to cart"}
                                        </ButtonContainer></div>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
