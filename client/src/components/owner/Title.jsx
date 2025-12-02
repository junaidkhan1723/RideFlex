import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <>
    <h1 className='font-medium text-3xl'>{title}</h1>
    <p className='text-sm md:text-base text-text-muted mt-2 max-w-1156'>{subTitle}</p>
    </>
  )
}

export default Title;