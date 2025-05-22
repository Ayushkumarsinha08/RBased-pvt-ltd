import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src="/logo.jpg" // Path relative to the public folder
        alt="Logo"
        width={160} // Equivalent to w-40
        height={60} // Equivalent to h-15
        className="h-15 w-40"
      />
    </div>
  );
}