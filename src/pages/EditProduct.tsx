import SingleProduct from '@/components/SingleProduct'
import React, { useRef, useState } from 'react'
import { PaginatedList } from 'react-paginated-list'
import styled from 'styled-components';
import { Pagination } from '@mui/material';


type productType = {
  id: Number,
  name: String,
  price: Number,
  stock: Number
}


let productList: Array<productType> = [
  { id: 1, name: "apple", price: 20, stock: 10 },
  { id: 2, name: "banana", price: 30, stock: 11 },
  { id: 3, name: "grape", price: 40, stock: 15 },
  { id: 4, name: "mango", price: 50, stock: 90 },

]



const EditProduct = () => {

  const [editable, setEditable] = useState(false)
  const [page,setPage] =useState(0)

  const handleEdit = (e: any, id: number) => {

    e.preventDefault()
    setEditable(!editable)
  }


  const handleSave = (e: any, id: number) => {

    e.preventDefault()
    setEditable(!editable)

    let name = String(document.getElementById(`${id}-name`)?.innerHTML)
    let price = Number(document.getElementById(`${id}-price`)?.innerHTML)
    let stock = Number(document.getElementById(`${id}-stock`)?.innerHTML)

    productList = productList.map((product) => {
      if (product.id == id) {
        product.name = name
        product.price = price
        product.stock = stock

      }
      return product
    })


  }


  return (
    <div className='flex bg-green-200 justify-center items-center  min-h-screen w-full'>
      <div className='flex w-[800px] justify-around bg-white h-[600px] shadow-md items-center border-2 border-gray-100 rounded-md flex-col gap-2'>

        {/* <PaginatedList
          PaginatedListContainer={styled.div`height:600px; width:800px; justify-content:space-around`}
          list={productList}
          itemsPerPage={5}
          renderList={(list) => (
            <>
              {list.map((product) => <SingleProduct product={product} productList={productList} />)}
            </>
          )}
        /> */}
        
        {

          productList.slice((page*50+0),2).map((product) => <SingleProduct product={product} productList={productList}/>

          )
        }
        <Pagination count={10} onClick={(e)=>{console.log(typeof(e.target))}} />
      </div>


    </div>
  )
}




export default EditProduct
