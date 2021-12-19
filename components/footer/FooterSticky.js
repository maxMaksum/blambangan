import Image from 'next/image';
import Link from 'next/link'


function FooterSticky() {

    return (
      <div className="fixed bottom-8">
          <div className="h-10 w-10  text-4xl text-green-500 font-bold flex justify-end mr-6">
           <Image 
           src="/images01/facebook.png"
           alt='FaceBook'
           layout="fill"
           />
          </div>
      </div>
    );
}

export default FooterSticky