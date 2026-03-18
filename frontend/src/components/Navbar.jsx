import React from 'react'
import {ShoppingCartIcon} from "lucide-react"

const Navbar = () => {
  return (
    <div className='bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50'>
      <div className='max-w-full ml-5 mx-auto '>
        <div className='navbar px-4 min-h-20 justify-between'>
            <div className="flex gap-5" >
              <ShoppingCartIcon className="size-9 text-primary" />
              <h1 className='text-3xl'> PERN Techstore </h1>
          </div>
          <div>
            Right section, margin it out later
          </div>
        </div>
      </div>
      


    </div>
  )
}

export default Navbar