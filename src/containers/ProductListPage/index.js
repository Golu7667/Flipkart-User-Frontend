import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySLug } from '../../actions';
import './style.css'
import { generatePublicUrl } from '../../urlConfig';
import { useParams } from 'react-router-dom';


function ProductListPage(props) {
 
   let params=useParams()

  const product = useSelector(state => state.product)
   const [priceRange,setPriceRange]=useState({
    under5k:5000,
    under10k:10000,
    under15k:15000,
    under20k:20000,
    under30k:30000
   })


  const dispatch = useDispatch();
  useEffect(() => {
  
    console.log(props)
    dispatch(getProductsBySLug(params.slug))
  }, [])

  return (
    <div>
      <Layout>
        {
          Object.keys(product.productsByPrice).map((key, index) => {
            return (
              <div className='card'>
                <div className='cardHeader'>
                  <div >Smasung mobile</div>
                  <button>view all</button>
                </div>
                <div>{
                  product.productsByPrice[key].map(product =>
                
                    <div className='productContainer'>
                      <div className='productImgContainer'>
                        <img src={generatePublicUrl( product.productPictures[0].img)} alt='jj'></img>
                      </div>
                      <div className='productInfo'>
                        <div>{product.name}</div>
                        <div>
                          <span>4.3</span>&nbsp;
                          <span>3353</span>
                        </div>
                        <div className='productPrice'>{product.price}</div>
                      </div>
                    </div>
                  )
                 }
                </div>
                </div> 
                )
              
          })
        }

              </Layout>

    </div>
  )
}

export default ProductListPage