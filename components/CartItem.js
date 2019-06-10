// module
import React from 'react'
import firebaseAppDB from '../static/connectServer/firebase_server'
const database = firebaseAppDB.firestore()
export default class CartItem extends React.Component {
    cancel = (book_name) => {
        database.collection("cart").doc(book_name).delete();
    }
    render() {
        let { book_name, cover, price, quantity, total, category } = this.props;
        return (
            <div>
                <div id="cart" className="media col-md-12">
                    <div className="coverImage col-md-5">
                        <img src={cover} alt={book_name} />
                    </div>
                    <div className="media-body ItemDetail">
                        <h6 className="mt-0">
                            <strong>{book_name}</strong>
                        </h6>
                        <div>
                            <p>{'Quantity : ' + quantity}</p>
                            <p>{'Price : ' + price + ' THB'}</p>
                            <p><strong>{'Include All : '}</strong>{total + ' THB'}</p>
                            <br />
                            <span onClick={this.cancel.bind(this, book_name)} className="cancelBtn" style={{ cursor: 'pointer' }}>
                                <i style={{ marginRight: 10 }}
                                    className="far fa-trash-alt"></i>
                                Cancel order
                            </span>
                        </div>
                    </div>
                </div>
                <style>{`
                    .coverImage {
                        height: 260px;
                        overflow: hidden;
                    }
                    .coverImage img {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        object-fit: cover;
                    }
                    .ItemDetail {
                        margin-top:20px;
                        margin-bottom: 20px;
                        height: 260px;
                        padding: 20px;
                        padding-top:0;
                        overflow: hidden;
                    }
                    .ItemDetail h6 {
                        line-height: 27px;
                    }
                    .ItemDetail p {
                        font-size: 13px;
                        text-transform : capitalize;
                        margin-bottom:7px;
                    }
                    .cancelBtn:hover {
                        color: red
                    }
                `}</style>
            </div>
        )
    }
}