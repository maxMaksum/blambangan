import { useState } from 'react'

function ContactForm() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
    let data = {
        name,
        email,
        message
      }
      fetch('/api/contactForm', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      })
    
    

}

    return (

        <div className="flex w-full min-h-screen justify-center items-center sm:p-12 p-4 rounded mt-2"> 
        <div className="">
            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-6 space-y-6 bg-teal-500 w-full max-w-4xl p-4 rounded-xl shadow-lg text-gray-50 overflow-hidden">

                <div className="flex md:flex-grow flex-col justify-between space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
                        <p className="pt-2 text-cyan-100 text-sm ">You could leave us message by filling the contact form below or you could message us by Whatsapp, facebook, or messenger</p>    
                    </div>

                    
                </div>

                <div className="relative">
                    
                    <div style={{
        backgroundImage: `url("/images01/linen-1.jpg")`}} className="p-6 rounded z-10 relative">
           
                    <div   className="relative z-20 rounded-xl shadow-lg p-8 text-gray-700 md:w-80 ">
                        <form className="flex flex-col space-y-4 z-10">
                            <div>
                                <label htmlFor="" className="text-sm "> Your Name </label>
                                <input 
                                onChange={(e)=>{setName(e.target.value)}}
                                type="text" 
                                placeholder="Your Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"/>
                            </div>

                            <div>
                                <label htmlFor="" className="text-sm "> Your Email </label>
                            
                                <input 
                                onChange={(e)=>{setEmail(e.target.value)}}
                                type="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"/>
                            </div>
                            <div>
                            <label htmlFor="" className="text-sm "> Message </label>
                            
                            <textarea 
                            onChange={(e)=>{setMessage(e.target.value)}}
                            type="email" placeholder="Message " className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2">
                            </textarea>

                            </div>

                            <button 
                            onClick={(e)=>{handleSubmit(e)}}
                            className="inline-block self-center bg-red-500 font-bold rounded-lg px-6 py-2 uppercase text-gray-50"> Send Message</button>

                        </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default ContactForm