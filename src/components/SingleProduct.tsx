import React, { useState } from 'react'

const SingleProduct = (props: any) => {

    let productList = props.productList
    const [editable, setEditable] = useState(false)

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

        productList = productList.map((product: any) => {
            if (product.id == id) {
                product.name = name
                product.price = price
                product.stock = stock

            }
            return product
        })


    }

    return (

            <span className='flex gap-2 w-[600px] h-26' >

                <div key={`${props.product.id}`} className=' basis-8/12 flex  flex-wrap flex-row  w-full rounded-lg bg-gray-300  '>
                    <span className=' justify-between  flex basis-[100%] p-2 '>



                        <span contentEditable={`${editable?true:false}`} id={`${props.product.id}-name`} defaultValue={`${props.product.name}`} className=' outline-none text-sm font-sans font-medium'>{props.product.name}</span>
                        <span contentEditable={`${editable?true:false}`} id={`${props.product.id}-price`} className=' font-medium'>{`${props.product.price}`}</span>

                    </span>
                    <span className='flex  basis-[100%]  place-content-end  text-xs '>
                        stock:<span contentEditable={`${editable?true:false}`} id={`${props.product.id}-stock`}>{`${props.product.stock}`}</span>
                    </span>
                </div>
                {editable ? <button type='submit' onClick={(e) => handleSave(e, Number(props.product.id))} className='bg-red-500 rounded-lg basis-2/12'> Save </button>
                    : <button type='submit' onClick={(e) => handleEdit(e, Number(props.product.id))} className='bg-gray-300 rounded-lg basis-2/12'> Edit </button>
                }
                <button type='submit' onClick={(e) => { }} className='bg-gray-300 rounded-lg basis-2/12'> Delete </button>

            </span>

   
    )
}

export default SingleProduct
