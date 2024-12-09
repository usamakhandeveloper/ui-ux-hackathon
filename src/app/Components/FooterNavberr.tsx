import Image from 'next/image';  
import blueTwiter from '../assets/blueTwiter.png';
import blueFB from '../assets/blueFB.png';
import blueInsta from '../assets/blueInsta.png';

const FooterNavbar = () => {
  return (
    <div className="w-full h-[143px] bg-white flex items-center justify-between px-10 py-2 shadow-md">
      {/* Left side: Bandage heading */}
      <div className="text-black text-2xl font-bold">
        Bandage
      </div>

      {/* Right side: Social media icons */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 mr-[15px]">
        <Image src={blueFB} alt="Facebook" width={24} height={24} />
        <Image src={blueTwiter} alt="Twitter" width={24} height={24} />
        <Image src={blueInsta} alt="Instagram" width={24} height={24} />
      </div>
    </div>
  );
};

export default FooterNavbar;
