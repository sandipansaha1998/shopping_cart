import React from 'react';

class CartItem extends React.Component{
    constructor()
    {
        super();
        this.state = {
            title:'Budwiser Magnum',
            price:3.99,
            qty:1,
            img:''
        }
    }
    //setState is a function of React Component
    increaseQuantity = () =>{
        this.setState({
            qty:this.state.qty+1
        })  
    }
    decreaseQuantity = ()=>{
        console.log("click")
        if(this.state.qty >1)
        {
            this.setState((prevState) => {
                return {
                    qty:prevState.qty-1
                }
            },()=>{console.log(this.state.qty)});
            this.setState((prevState) => {
                return {
                    qty:prevState.qty-3
                }
            },()=>{console.log(this.state.qty)});
        }
      
    }
    render(){
        const {title,price,img,qty} = this.state
        return(
            <div className='container cart-item test d-flex col-12 col-lg-4 p-2'>
            <div className='cart-item-image-container'>
            <img style={styles.image}/>
            </div>
            <div className='cart-item-right-container test d-flex flex-column align-items-start container '>
                <h5 className='item-name mb-0  test'>{title}</h5>
                <h7 className='item-description test'>Beer 500 ml</h7>
                
                <div className='d-flex test container-fluid  justify-content-start p-0 mt-auto'>
                    <h4 className='item-price  test '>${price}</h4>
                    <div className="changeQtyButtonContainer d-flex justify-content-between  col-8 col-sm-7 col-lg-7 ms-auto me-1 mx-1 test p-1 rounded-pill">
                        <span id='decrease' className='button col-4' onClick={this.decreaseQuantity}>-</span>
                        <span className='quantity col-4'>{qty}</span>
                        <span id='increase' className='button col-4' onClick={this.increaseQuantity}>+</span>
                    </div>
                </div>
               </div>
            </div>
        ); 
        }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;