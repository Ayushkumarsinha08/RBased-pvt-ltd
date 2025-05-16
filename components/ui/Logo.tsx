export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5v-6l-10 5L2 11v6z" />
      </svg>
      <span className="text-xl font-bold">My Logo</span>
    </div>
  );
}