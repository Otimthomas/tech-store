import React from 'react';
import logo from '../images/logo.svg'
import {ProductContext} from '../context/ProductContext';
import styled from 'styled-components';
import {FaBars, FaCartPlus} from 'react-icons/fa';

export default function Navbar() {
	const {handleSidebar, handleSidecart, cartItems} = React.useContext(ProductContext);
	return (
		<NavWrapper>
			<div className="nav-center">
				<FaBars className="nav-icon" onClick={handleSidebar}/>
				<img src={logo} alt="tech store logo"/>
				<div className="nav-cart">
					<FaCartPlus className="nav-icon" onClick={handleSidecart}/>
	<div className="cart-items">{cartItems}</div>
				</div>
			</div>	
		</NavWrapper>
	)
}

const NavWrapper = styled.nav`
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	width: 100%;
	padding: 1rem 1.5rem;
	background: var(--mainGrey);
	border-bottom: 3px solid var(--primaryColor);
	.nav-center {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1170px;
		margin: 0 auto;
	}
	.nav-icon {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.nav-cart {
		position: relative;
	}
	.cart-items {
		position: absolute;
		top: -8px;
		right: -8px;
		border-radius: 50%;
		padding: 0 5px;
		font-size: 0.85rem;
		color: var(--mainWhite);
		background-color: var(--primaryColor);
	}
`