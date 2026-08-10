import React from 'react'

const RightCardContent = (props) => {

    console.log(props.color);
    
    return (
        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
            <h2 className='bg-white text-l font-semibold rounded-full h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-4xs text-xl  text-white mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='text-white font-medium px-3 py-2  bg-blue-950 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent