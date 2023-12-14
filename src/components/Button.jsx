import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 mt-6 bg-blue-gradient rounded-tr font-poppins font-medium text-[18px] text-primary ouline-none ${styles} rounded-[10px]` }>
      Get Started
    </button>
  )
}

export default Button
