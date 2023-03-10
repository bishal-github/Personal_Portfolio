import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-24'>
        <form method='POST' action="https://getform.io/f/dd269b05-b863-4a8e-af43-5469d3c71989" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 pt-4 text-lg'>//This is how you can reach me...</p>
                <div className='pt-4 pb-2 text-gray-300 flex flex-col gap-4 md:flex-row md:justify-between'>
                  <p className='border-2 p-2 text-lg hover:bg-pink-600 font-bold hover:border-pink-600'>Phone :- 9860342701</p>
                  <p className='border-2 p-2 text-lg hover:bg-pink-600 font-bold hover:border-pink-600'>Email : bishalshrees976@gmail.com</p>
                </div>
                <p className='pt-8 text-gray-300 text-lg'>
                    Submit the form below to connect with me...
                </p> 
            </div>
            <input className='p-2 bg-[#ccd6f6] focus:outline-none' type="text" name='name' placeholder='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6] focus:outline-none' type="email" name='email' placeholder='Email' />
            <textarea className='p-2 bg-[#ccd6f6] focus:outline-none' name="message" type='text' placeholder='Message' id="" cols="30" rows="9"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center'>Let's Talk</button>

        </form>
    </div>
  )
}

export default Contact
