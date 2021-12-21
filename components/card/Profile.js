import React from "react";


function Profile({ title, description }) {
  
  return (
    <div className="bg-gray-50 p-2 my-2 rounded shadow-lg max-w-4xl mx-auto">
      <p className="text-2xl text-center uppercase">{title}</p>
      <div  className="bg-gray-50 mx-auto text-center cmsContent"dangerouslySetInnerHTML={{__html:description.html}} />
    </div>
  );
}

export default Profile;
