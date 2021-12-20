import { useState } from "react";
import { useRouter } from 'next/router'

function ContactForm() {
  const router = useRouter()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false)


  const test = async () => {
    await new Promise((resolve)=>setTimeout(() => {
      setShowThankyou(false)
        resolve();
    }, 2000)); 
    router.push('/')
    console.log(1);
    console.log(2);
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contactForm", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setShowThankyou(true)
        test()
      }
    });
  };

  return (
    <div className="relative mt-20 ">
      {showThankyou&&<div className=" absolute top-0 p-2 w-full">
          <div className="bg-green-500 text-2xl rounded shadow-lg flex items-center justify-center p-10 z-50">
          <p>Thank You For Contacting Us</p>
          </div>
          
        </div>}
        
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center flex-col mx-auto p-2">
          <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
        
          <p className="pt-2 text-cyan-100 text-s ">
            You could leave us message by filling the contact form below or you
            could message us by Whatsapp, facebook, or messenger
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row min-h-screen justify-around items-center space-x-2 rounded mt-2 bg-gray-100 ">
        <div className="relative flex-grow">
          <div
            style={{
              backgroundImage: `url("/images01/linen-1.jpg")`,
            }}
            className="p-6 rounded z-10 relative flex-grow"
          >
            <div className="relative z-20 rounded-xl shadow-lg p-8 text-gray-700 ">
              <form className="flex flex-col space-y-4 z-10">
                <div>
                  <label htmlFor="" className="text-sm ">
                    {" "}
                    Your Name{" "}
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm ">
                    {" "}
                    Your Email{" "}
                  </label>

                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm ">
                    {" "}
                    Message{" "}
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="email"
                    placeholder="Message "
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  ></textarea>
                </div>

                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="inline-block self-center bg-red-500 font-bold rounded-lg px-6 py-2 uppercase text-gray-50"
                >
                  {" "}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-center items-center bg-red-500 h-96 w-100 mt-10 sm:mt-0 w-100">
          <iframe
            className="h-full w-full mx-auto "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.4860132214076!2d114.31202431425989!3d-8.35375588648219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd157a05daf0995%3A0xf4c5d94aaabb48e2!2sUD.%20Sandang%20Makmur!5e0!3m2!1sen!2sid!4v1639985734197!5m2!1sen!2sid"
            //   width="600"
            //   height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
