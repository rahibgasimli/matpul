import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({Brand,Model,RAM,CPU,Colors,Display_size}) {
  return (
    <div className='product'>
      <div className="icons">
        <MdFavoriteBorder/>
        <BsCartPlusFill/>
        <FaCodeCompare/>
      </div>
        <img src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-sbp-1105-sm-2524_1-5a4a2d03.webp" alt={Brand} />
        <h3 title={Brand}>{Brand} / {RAM} / {Colors}</h3>
        <p>{Model.replace("_","")} AZN</p>
    </div>
  )
}

export default ProductCard