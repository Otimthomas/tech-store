import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ProductContext} from "../context/ProductContext";

export default function Sidebar() {
  const {sidebar, sidebarOpen, handleSidebar} = React.useContext(ProductContext);
  return (
    <SidebarWrapper show={sidebar}>
      <ul>
        <li className='nav-item'>
          <Link className='sidebar-link' onClick={handleSidebar} to='/' exact>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='sidebar-link' onClick={handleSidebar} to='/about'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='sidebar-link' onClick={handleSidebar} to='/products'>
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='sidebar-link' onClick={handleSidebar} to='/contact'>
            Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='sidebar-link' onClick={handleSidebar} to='/cart'>
            Cart
          </Link>
        </li>
      </ul>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 10;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? 'translateX(0)': 'translateX(-100%)')};

  ul {
	  list-style-type: none;
	  padding: 0 !important;
  }

  .sidebar-link:link,
  .sidebar-link:visited {
	  display: block;
	  font-size: 1.5rem;
	  text-transform: capitalize;
	  color: var(--mainBlack);
	  padding: 0.5rem 1.5rem;
	  background: transparent;
	  transition: var(--mainTransition);
  }

  .sidebar-link:hover,
  .sidebar-link:active {
	  text-decoration: none;
	  color: var(--mainWhite);
	  background-color: var(--primaryColor);
	  padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
	 width: 20rem;
  }
`;
