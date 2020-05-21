import React from "react";
import styled from "styled-components";
import {ProductContext} from "../../context/ProductContext";

const FilterProducts = () => {
  const {
   inputs,
    handleChange,
    storeProducts,
  } = React.useContext(ProductContext);

  let companies = new Set();
  companies.add('all');
  for (let product in storeProducts) {
    companies.add(storeProducts[product]["company"]);
  }
  companies = [...companies];
  // console.log(companies);

  // console.log(React.useContext);
  return (
    <div className='row my-5'>
      <div className='col-10 mx-auto'>
        <FilterWrapper>
          {/* text search */}
          <label htmlFor='search'>search products</label>
          <input
            type='text'
            name='search'
            id='search'
            onChange={handleChange}
            value={inputs.search}
            className='filter-item'
          />
          {/* end of text search */}
          {/* category search */}
          <label htmlFor='company'>company</label>
          <select
            name='company'
            id='company'
            onChange={handleChange}
            value={inputs.company}
            className='filter-item'>
              {companies.map((company, index) => {
                return <option key={index} value={company}>
                  {company}
                </option>
              })}
          </select>
          {/* end of category search */}
          {/* price range */}
          <div className=''>
            <label htmlFor='price'>
              <p className='mb-2'>
                product price : <span>$ {inputs.price}</span>
              </p>
            </label>
            <input
              type='range'
              id='price'
              name="price"
              className='filter-price'
              value={inputs.price}
              min={inputs.min}
              max={inputs.max}
              onChange={handleChange}
            />
          </div>
          {/* end of price range */}
          {/* free shipping */}
          <div>
            <label htmlFor='shipping' className='mx-2'>
              free shipping
            </label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              value={inputs.shipping && true}
              onChange={handleChange}
            />
          </div>
          {/* end of free shipping */}
        </FilterWrapper>
      </div>
    </div>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;

  label {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export default FilterProducts;
