import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src="/logo.jpg" // Path relative to the public folder
        alt="Logo"
        width={100} // Equivalent to w-40
        height={30} // Equivalent to h-15
        className="h-8 w-30"
      />
    </div>
  );
}