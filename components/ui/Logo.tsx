export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/logo.jpg" // Path relative to the public folder
        alt="Logo"
        className="h-15 w-40"
      />
    </div>
  );
}