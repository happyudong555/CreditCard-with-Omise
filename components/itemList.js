import React from 'react'
import Head from 'next/head'
import firebaseAppDB from '../static/connectServer/firebase_server'
const database = firebaseAppDB.firestore()
export default class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: this.props,
            qty: 1
        };
    }
    increase = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decrease = () => {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            })
        }
    }
    addCart = (quantity, book_name, cover, price, total, category) => {
        database.collection("cart").doc(book_name).set({
            quantity, book_name, cover, price, total, category
        })
    }
    render() {
        let total = (this.state.product.price * this.state.qty);
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
                    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                </Head>
                <div className="container">
                    <div className="media" style={{ marginBottom: 30 }}>
                        <div className="item col-md-4">
                            <img src={this.state.product.cover} />
                        </div>

                        <div style={{ marginTop: 20 }} className="media-body productDetail col-md-6">
                            <h4 className="mt-0"><strong>{this.state.product.book_name}</strong></h4>
                            <p>{this.state.product.detail}</p>
                            <button style={{ backgroundColor: '#e6e5e5' }}
                                onClick={this.increase} className="increase btn">+</button>
                            <span className="qty">{this.state.qty}</span>
                            <button style={{ backgroundColor: '#e6e5e5' }}
                                onClick={this.decrease} className="decrease btn">-</button>
                            <button onClick={this.addCart.bind(this, this.state.qty, this.state.product.book_name,
                                this.state.product.cover, this.state.product.price, total, this.state.product.category)}

                                style={{ color: '#fff', marginLeft: 10 }} className="btn btn-danger">Add cart</button>
                            <p><span style={{ fontWeight: 'bold' }}>{'Total : '}</span>{total}</p>
                        </div>
                    </div>
                </div>
                <style>{`
                    .item {
                        height:260px;
                        margin-bottom:30px;
                        overflow:hidden;
                    }
                    .item img {
                        width:100%;
                        height:100%;
                        object-fit:contain;
                    }
                    .productDetail p{
                        margin-top:16px;
                        line-height:26px;
                    }
                    .increase, .decrease {
                        margin-right: 15px;
                    }
                    .qty {
                        margin-right:15px;
                    }
                `}</style>
            </div>
        )
    }
}