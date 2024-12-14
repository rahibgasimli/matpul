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
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2024%2F09%2Fapple-introduces-iphone-16-and-iphone-16-plus%2F&psig=AOvVaw0PLuY1FJpwB6-h0125BEg8&ust=1733250412173000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC844rbiYoDFQAAAAAdAAAAABARhttps://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg" alt={Brand} />
        <h3 title={Brand}>{Brand} / {RAM} / {Colors}</h3>
        <p>{Model.replace("_","")} AZN</p>
    </div>
  )
}

export default ProductCard