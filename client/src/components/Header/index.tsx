import React from 'react'

type Props = {
    name:string;
    buttonComponent?:any;
    isSmallText?: boolean;

}

const index = ({name, buttonComponent, isSmallText}: Props) => {
  return (
    <div className='mb-5 flex-full items-center justify-between'>
      <h1 className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold `}>
        {name}
    
      </h1>
      {buttonComponent}
    </div>
  )
}

export default index