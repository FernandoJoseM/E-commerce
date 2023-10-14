import axios from 'axios'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../helpers/getConfig'
const PurchasesPage = () => {
  const dispatch=useDispatch()
  const [purchases, setPurchases] = useState([])
  useEffect(() => {
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases',getConfig())
    .then(res=>{
      setPurchases(res.data)
    })
    .catch(err=>console.log(err))
  }, [])
  console.log(purchases);
  return (
    <main className='purchases'>
      <h1>Purchases</h1>
      <ul className='purchases-ul'>
        {
          purchases?.map(el=>(
            <li key={el.id}>
              
              <img src={el.product.images[0].url}/>
              <h2>{el.product.title}</h2>
              <p>Quantity: {el.quantity}</p>
              <p>price: {el.product.price}</p>
              <p>{el.createdAt.split('T')[0]}</p>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default PurchasesPage