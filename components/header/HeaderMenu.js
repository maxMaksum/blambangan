
import Link from 'next/link'
// import {Category}from "../MockData"
// import {staticPages}from "../MockData"

function HeaderMenu({changeMenu, menu}) {

  // const uniqueC = new Set()

  // const uniqueCategory = Category.filter((cat)=>{
  //   const isPresent = uniqueC.has(cat.category)
  //   uniqueC.add(cat.category)
  //   return !isPresent
  // })

    return (
      <div
        className={
          menu
            ? `hidden`
            : ` h-screen  justify-start bg-gray-50 absolute top-0 right-0 items-start w-64 justify-around text-gray-900 text-s`
        }
      >
        {/* <div className="flex justify-end">
          <h1 onClick={() => changeMenu()} className="link py-4 pr-8">
            X
          </h1>
        </div>

        <div className="mt-8">
          <div>
            {staticPages.map((p, i) => (
              <div key={i}>
                <Link href={`/${p.title}`}>
                  <p className=" p-2 uppercase cursor-pointer link">{p.title}</p>
                </Link>
              </div>
            ))}
          </div>

          {uniqueCategory.map((data) => (
            <div key={data.id}>
              <Link href={`/page/${data.category}`}>
                <p className=" p-2  uppercase link">{data.category}</p>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    );
}

export default HeaderMenu

