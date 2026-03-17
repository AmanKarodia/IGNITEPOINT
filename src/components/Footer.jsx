
import { resourcesLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 p-4 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg text-black font-semibold mb-2 ">IGNITEPOINT</h3>
          <ul className="">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <h2
                  className="text-sm text-gray-700"
                >
                  {link.text}
                </h2>
                <link.icons className="w-6 h-6 mt-10 text-gray-500 hover:text-blue-800" />
              </li>
            ))}
          </ul>
        </div>
  
        <div className="relative px-2 flex flex-col items-end">
          <h3 className="text-md text-gray-900 font-bold mb-4">Support</h3>
          <ul className="space-y-1">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-800"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer