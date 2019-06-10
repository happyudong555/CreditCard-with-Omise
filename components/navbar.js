import React from 'react'
import Link from 'next/link'
import ShoppingCart from '../components/shoppingCart'
export default class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-light"
                        style={{ backgroundColor: '#414a52' }}>
                        <a style={{ color: '#fff' }} className="navbar-brand" href="/">I-shop</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link href={'/'}><a className="nav-link"
                                        style={{ color: '#fff' }}>Home</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link><a data-toggle="modal"
                                        data-target="#shoppingCart" className="nav-link"
                                        style={{ color: '#fff', cursor: 'pointer' }}>Cart</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ShoppingCart />
                    </nav>

                </div>
                <style>{`
                    .Navbar {
                        background-color: #404a52;
                    }
                `}</style>
            </div>
        )
    }
}