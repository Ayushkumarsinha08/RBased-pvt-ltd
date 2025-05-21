export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="text-center py-10 flex flex-col justify-center items-center mb-4"> 
        <img src="/logo.jpg" alt="RBS Logo" className="h-10 w-25 " />
        <span className="font-bold text-3xl ">RBased Services Pvt. Ltd</span>
      <p className="text-lg ">
      B-28 A, RAJIV NAGAR, BEGUMPUR, OPP. ROHINI SECTOR-22, DELHI-110008 ; ©  2024 RBased Services
      </p>
      <p className="mb-1 text-lg">
        8005390053, 7017879339 •{" "}
        <a href="mailto:office@rbasedservices.in" className="text-white hover:underline">
          office@rbasedservices.in
        </a>,{" "}
        <a href="mailto:rbasedservices@outlook.com" className="text-white hover:underline">
          rbasedservices@outlook.com
        </a>,{" "}
        <a href="mailto:rbasedservice@gmail.com" className="text-white hover:underline">
          rbasedservice@gmail.com
        </a>
      </p>
      </div> {/* Fixed missing closing tag */}
     
    </footer>
  );
}
