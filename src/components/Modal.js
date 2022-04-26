import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {ButtonContainer} from "./Button";
class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    console.log(value);
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.detailProduct;
                    if(!modalOpen){
                        return null;
                    }else{
                       return(
                           <ModalContainer>
                               <div className="container">
                                   <div className="row">
                                       <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                           <h5 style={{marginTop: '20px'}}>item added to the cart</h5>
                                           <img src={img} className="img-fluid" alt="product"/>
                                           <h5>{title}</h5>
                                           <h5 className="text-muted">price : $ {price}</h5>
                                           <div style={{marginTop: '20px',marginBottom: '20px'}}>
                                           <Link to='/'>
                                               <ButtonContainer onClick={() =>closeModal()} style={{margin: '0px 20px'}}>
                                                   store
                                               </ButtonContainer>
                                           </Link>
                                           <Link to='/cart'>
                                               <ButtonContainer cart onClick={() =>closeModal()} style={{margin: '0px 20px'}}>
                                                   go to cart
                                               </ButtonContainer>
                                           </Link></div>
                                       </div>
                                   </div>
                               </div>
                           </ModalContainer>
                       )
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;
const ModalContainer = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
    background: white;
  }
`
