function contactDraft() {
    return (
        <div>
            
        </div>
    )
}

export default contactDraft

// import React from 'react'
// import { useForm } from "react-hook-form";
// import {useRouter} from 'next/router'
// function Form() {
  
//     const { register, handleSubmit, errors,reset } = useForm();

//     const router = useRouter()
//    const onSubmit =   async data => {
//     try {
//        const response = await fetch('/api/contactForm', {
//             method:"POST", 
//             headers:{
//             'Content-Type':'application/json'
//             },
            
//             body:
//                 JSON.stringify(
//                 {name:data.name,
//                 email:data.email,
//                 message:data.message
//         })})

      
//         if(response.status==200){
//             console.log('suksess')
//             reset()
//             router.push('/')
//         }

    

//     } catch (error) {
//         return error
//     }
       
//     }

//     return (
//         <div className="container">

//             <h3 className="card-title card-title text-white text-center fw-bold pt-5 ">
//             Contact Form
//             </h3>
//          <form onSubmit={handleSubmit(onSubmit)} className="text-dark">
//             <div className="form-group">
//             <label htmlFor="exampleInputName"> Name</label>
//                 <input 
//                 type="text" 
//                 name="name"
//                 ref={
//                 register({ 
//                 required: {
//                     value:true,
//                     message:"You Must Enter Your Name"
//                 },
//                 minLength:{
//                     value:3,
//                     message:"this is not long enough"
//                 },
//                 maxLength:{
//                     value:120,
//                     message:"this is too long"
//                 }

//                  })}
//                 className="form-control" 
//                 id="exampleInputName" 
//                 aria-describedby="nameHelp" placeholder="Enter Your Name"
                
//                 />
//                 <span>{errors?.name?.message}</span>
               
//             </div>

//             <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Email address</label>
//                 <input 
//                 type="email" 
//                 name="email"
//                 ref={register({ 
//                     required: {
//                         value:true,
//                         message:"You Must Enter Your Email"
//                     },
        
//                     pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                         message: "Enter a valid e-mail address",
//                       }
//                  })}
//                 className="form-control" 
//                 id="exampleInputEmail1" 
//                 aria-describedby="emailHelp" placeholder="Enter email"/>
//                {errors.email && <span className="error">{errors.email.message}</span>}
//                 <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
//             </div>

//             <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">Leave message</label>
//             <textarea
//             type="textArea" 
//             name="message"
//             ref={register({ 
//                 required: {
//                     value:true,
//                     message:"Please fill the message"
//                 },
//                 minLength:{
//                     value:8,
//                     message:"this is not long enough"
//                 },
//                 maxLength:{
//                     value:120,
//                     message:"this is too long"
//                 }
//              })}
           
//              className="form-control" 
//              id="exampleFormControlTextarea1" rows="3"></textarea>
//              <span>{errors?.message?.message}</span>
//             </div>

//   <button type="submit" className="btn btn-success btn-sm">Submit</button>

  
// </form>



// </div>
//     )
// }

// export default Form
