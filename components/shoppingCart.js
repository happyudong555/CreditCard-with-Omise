// module
import React from 'react'
import Head from 'next/head'
import CartItem from '../components/CartItem'
import Script from 'react-load-script'
import axios from 'axios'
// database
import firebaseAppDB from '../static/connectServer/firebase_server'
const database = firebaseAppDB.firestore()
let OmiseCard;
export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            total: []
        }
    }
    componentDidMount() {
        database.collection("cart").onSnapshot((snapshot) => {
            let findItem = snapshot.docs.map((doc)=> {
                return doc.data()
            });
            let totalPrice = snapshot.docs.map((doc)=> {
                return doc.data().total
            });
            this.setState({
                item : findItem,
                total: totalPrice
            })
        });
    }
    LoadScript = () => {
        OmiseCard = window.OmiseCard
        OmiseCard.configure({
            publicKey: 'pkey_test_5g3s89m0e7gk63jo17o',
            currency: 'thb',
            frameLabel: 'I-shop',
            submitLabel: 'PAY NOW',
            buttonLabel: 'Pay with Omise'
        });
    }
    CreditCard_config = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
            otherPaymentMethods: []
        });
        OmiseCard.configureButton('#credit_card');
        OmiseCard.attach();
    }
    OmiseToken = () => {
        let book_name = this.state.item.map((item) => item.book_name)
        let price = this.state.total;
        let total = (price.reduce((sum, price) => sum += price, 0) * 100)
        OmiseCard.open({
            frameDescription: 'Invoice #3847',
            amount: total,
            onCreateTokenSuccess: (token) => {
                //API server
                axios({
                    method: 'post',
                    url: '/pay',
                    data: {
                        book_name,
                        total,
                        token
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            },
            onFormClosed: () => {
                /* Your handler when form was closed */
            },
        })
    }
    pay = (e) => {
        e.preventDefault();
        this.CreditCard_config();
        this.OmiseToken();
    }
    render() {
        let price = this.state.total;
        let total = price.reduce((sum, price) => sum += price, 0);
        return (
            <div>
                <Script
                    url="https://cdn.omise.co/omise.js"
                    onLoad={this.LoadScript.bind(this)}
                />
                <div className="modal fade" id="shoppingCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 style={{ marginLeft: 10 }} className="modal-title"
                                    id="exampleModalLabel">
                                    Shopping Cart
                            </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <br />
                                {
                                    this.state.item.map((product) => (
                                        <CartItem
                                            cover={product.cover}
                                            book_name={product.book_name}
                                            quantity={product.quantity}
                                            price={product.price}
                                            total={product.total}
                                            category={product.category} />
                                    ))
                                }
                            </div>
                            <div className="paymentform">
                                <h6 className="page-header">{'Total : ' + total + " THB"}</h6>
                                <br />
                                <form>
                                    <input onClick={this.pay.bind(this)} value="PAY NOW" type="button" id="credit_card"
                                        style={{ borderRadius: 0 }}
                                        className="btn btn-block btn-pay" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <style>{`
                    .paymentform {
                        width: 100%;
                        height: auto;
                        border-top: 1px solid #ddd;
                        padding:23px;
                    }
                    .btn-pay {
                        height: 38px !important;
                        background-color: #ffb916;
                        color: #fff !important;
                        font-weight:bold;
                    }
                `}</style>
                </div>
            </div>
        )
    }
}