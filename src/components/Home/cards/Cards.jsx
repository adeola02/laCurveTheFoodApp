import React from 'react';
import "./Cards.css";
import { FaShoppingBag ,FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

const Cards = () => {
    const data=[
        {
            "image_url": "https://i.pinimg.com/236x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg",
        },
        {
            "image_url": "https://i.pinimg.com/236x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg",
        },
        {
            "image_url": "https://i.pinimg.com/236x/91/40/8b/91408b73ba74750df808cbe0fd8d4f80.jpg",
        },
        {
            "image_url": "https://i.pinimg.com/236x/aa/26/03/aa2603fe85d9169ace5acdced4c46de8.jpg",
        },
    ]
  return (
    <div className='cards-holder'>
        <div className='cards-wrapper'>
        <FaArrowCircleLeft size={30} color='white' cursor="pointer"/>
            {
                data.map((e,index)=>(

                    <div className='cards' key={index}>
                        <img src={e.image_url} alt="" className='cardImg'/>
                        <div className='desc'style={{color:"white"}}>
                            <div>

                            <p >des</p>
                            <nav>
                                <h3>₦8938</h3>
                            </nav>
                            </div>
                        </div>
                    </div>
                ))
            }
            <FaArrowCircleRight size={30} color='white' cursor="pointer"/>
        </div>
    </div>
  )
}

export default Cards