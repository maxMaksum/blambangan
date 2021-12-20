import Image from 'next/image';
import Link from 'next/link'


function FooterSticky() {

    return (
      <div className="fixed bottom-8 left-0 right-0 max-w-6xl mx-auto">
      
          <div className='relative flex justify-between items-center  p-2'>
            <div className='h-10 w-10 relative'>
            <Image 
           src="/images01/messenger.png"
           alt='FaceBook'
          //  width={20}
          //  height={20}
          layout='fill'
           className='object-cover'
           />
            </div>
          
            <div className='h-10 w-10 relative'>
            <Image 
           src="/images01/whatsapp.png"
           alt='FaceBook'
          //  width={20}
          //  height={20}
          layout='fill'
           className='object-contain'
           />
            </div>
          </div>
        
     
         
      </div>
    );
}

export default FooterSticky