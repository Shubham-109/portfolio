import Link from "next/link";

const navigation = ["Portfolio", "Experience", "Education", "Contact"];

const Navbar = () => {
  return (
      <ul className="rounded-full inline-flex flex-row gap-8 text-gray-300 text-sm bg-gray-400 px-16 py-4 backdrop-filter backdrop-blur-sm bg-opacity-10">
       { navigation.map((link) =>
           (
             <li key={link} className="hover:text-blue-400 hover:-translate-y-0.5 duration-200">
              <Link href={""}>
                {link}
              </Link>
             </li>
          )
         )
       }
      </ul>
  );
};

export default Navbar;
