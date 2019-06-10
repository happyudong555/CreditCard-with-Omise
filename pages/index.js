// module
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ItemList from '../components/itemList'
import Navbar from '../components/navbar'
// database
import firebaseAppDB from '../static/connectServer/firebase_server'
const database = firebaseAppDB.firestore()
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: [
                {
                    "book_name": "Hook model",
                    "cover": "https://www.akshaychauhan.com/wp-content/uploads/2016/05/hooked-by-nir_Akshay-recommends-product-designers.png",
                    "price": 269,
                    "category": "book",
                    "detail": "the Hook Model helps us understand how a product managed to become a habit for users."
                },
                {
                    "book_name": "Fantastic Beasts: The Crimes of grindelwald",
                    "cover": "http://hdcovers.psichogios.gr/EN/9786180128833_3D.jpg",
                    "price": 540,
                    "category": "book",
                    "detail": "The second installment of the Fantastic Beasts series featuring the adventures of Magizoologist Newt Scamander."
                },
                {
                    "book_name": "Design Sprint",
                    "cover": "https://static1.squarespace.com/static/56778f460ab377c981686546/t/5ae8d708758d462d1c9e5f3c/1559138461253/?format=500w",
                    "price": 280,
                    "category": "book",
                    "detail": "Created by three partners at Google Ventures, the sprint is a unique five-day process aimed at helping businesses to answer crucial questions and deliver the best results in the least time"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <script typ="text/javascript" src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
                    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                    <title>Home</title>
                </Head>
                <Navbar/>
                <div style={{marginTop:60,marginBottom:60}}>
                {
                    Object.values(this.state.shop).map((item) => (
                        <ItemList
                            cover={item.cover}
                            book_name={item.book_name}
                            detail={item.detail}
                            price={item.price}
                            category={item.category}
                        />
                    ))
                }
                </div>
            </div>
        )
    }
}