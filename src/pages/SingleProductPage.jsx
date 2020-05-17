import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {ProductContext} from "../context/ProductContext";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpeg";

export default function SingleProductPage() {
  const {id} = useParams();
  const history = useHistory();
  const {storeProducts, addToCart} = React.useContext(ProductContext);
  const product = storeProducts.find((item) => item.id === parseInt(id));
  console.log(product);
  //   console.log(price);

  if (storeProducts.length === 0) {
    return <Loading />;
  } else {
    const {price, title, description, id, image, company} = product;

    return (
      <>
        <Hero img={singleProductBcg} title='single product' />
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                <img src={`../${image}`} alt={title} className='img-fluid' />
              </div>
              <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                <h5 className='text-title mb-4'>model :{title}</h5>
                <h5 className='text-capitalize text-muted mb-4'>
                  company : {company}
                </h5>
                <h5 className='text-main text-capitalize mb-4'>
                  price : ${price}
                </h5>
                <p className='text-capitalize text-title mt-3'>
                  some info about product:
                </p>
                <p>{description}</p>
				<button type="button" className="main-link" style={{margin: '0.75rem'}}
				onClick={() => {
					addToCart(id);
					history.push('/products')
				}}>
					add to cart
				</button>
				<Link to="/products" className="main-link" style={{margin: '0.75rem'}}>
					back to products
				</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
