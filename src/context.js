import React, {Component} from 'react';
import {storeProducts,detailProduct} from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct:detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct:detailProduct,
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() =>{
            return {modalProduct: product,modalOpen: true}
        }
        )
    }
    closeModal = id => {
        this.setState(()=> {
            return {modalOpen:false}
        })
    }
    componentDidMount() {
        this.setProduct();
    }

    setProduct = () =>{
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts,singleItem];
        });
        this.setState(()=>{
            return {products: temProducts};
        });
}
getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
}
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return {products: tempProducts,cart: [...this.state.cart,product]};
        },()=> {
            console.log(this.state)
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
