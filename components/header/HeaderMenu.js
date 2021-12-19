import { useState } from 'react';
import Link from 'next/link'
// import {Category}from "../MockData"
// import {staticPages}from "../MockData"

function HeaderMenu({changeMenu, navigation, categories}) {

  // const uniqueC = new Set()

  // const uniqueCategory = Category.filter((cat)=>{
  //   const isPresent = uniqueC.has(cat.category)
  //   uniqueC.add(cat.category)
  //   return !isPresent
  // })

  const [showCategories, setShowCategories]=useState(false)

    return (
      <div
        className={` w-64  flex flex-col  ml-4 text-gray-900 text-s`
        }
      >
        {/* <div className="flex justify-end">
          <h1 onClick={() => changeMenu()} className="link py-4 pr-8">
            X
          </h1>
        </div> */}

        <div className="mt-8">
          <div className='flex flex-col'>
            {navigation.map((p) => (
              <div key={p.id}>
                <Link href={`/${p.title.toLowerCase()}`}>
                  <p className=" p-2 uppercase cursor-pointer link">
                    {p.title}
                  </p>
                </Link>
              </div>
            ))}
            <p onClick ={()=>setShowCategories(!showCategories)}className=" p-2 uppercase cursor-pointer link">Category</p>
          </div>

          { showCategories&&( <div>
            {categories.map((data) => (
              <div key={data.id}>
                <Link href={`/categories/${data.id}`}>
                  <p className=" p-2 ml-4 uppercase link cursor-pointer bg-gray-200">{data.title}</p>
                </Link>
              </div>
            ))}
          </div>)
           
          }
          
        </div>
      </div>
    );
}

export default HeaderMenu

