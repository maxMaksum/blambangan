import Image from "next/image";
import Link from "next/link";

function FooterSticky() {
  return (
    <div className="fixed bottom-8 left-0 right-0 max-w-6xl mx-auto z-40">
      <div className="relative flex justify-between items-center  mx-2 p-2">
        <div className="h-10 w-10 relative cursor-pointer">
          <Link href={`http://m.me/100074116630891`}>
            <a target="_blank">
              <Image
                src="/images01/messenger.png"
                alt="FaceBook"
                //  width={20}
                //  height={20}
                layout="fill"
                className="object-cover"
              />
            </a>
          </Link>
        </div>

        <div className="h-10 w-10 relative cursor-pointer">
          <Link href={`https://api.whatsapp.com/send?phone=62811384069`}>
            <a target="_blank">
              <Image
                src="/images01/whatsapp.png"
                alt="FaceBook"
                //  width={20}
                //  height={20}
                layout="fill"
                className="object-contain"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterSticky;
