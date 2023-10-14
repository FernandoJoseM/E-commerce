import { useDispatch, useSelector } from "react-redux"
import Filter from "../components/Filter"
import { useEffect, useRef, useState } from "react"
import { filterByName, getProductsThunk } from "../store/slices/products"
import ProductsCard from "../components/ProductsCard"
const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const inputSearch=useRef()
  const products=useSelector(store=>store.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])
  useEffect(() => {
    dispatch(filterByName(inputValue))
  }, [inputValue])
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  return (
    <section className="home-container">
      <Filter/>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" placeholder="Search"/>
          <button>Search</button>
        </form>
      </div>
      <main className="main">
        {
          products?.map(el=>(
            <ProductsCard key={el.id}el={el}/>
          ))
        }
      </main>
    </section>
  )
}

export default HomePage