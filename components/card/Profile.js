import React from 'react'

function Profile({title, description}) {
    return (
        <div className="bg-gray-50 p-2 my-2 rounded shadow-lg max-w-4xl mx-auto">
            <p className="text-2xl text-center">{title}</p>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default Profile
