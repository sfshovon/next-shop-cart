import Link from "next/link";

const Footer = () => {
  const footerItems = (
    <>
      <a>About Us</a>
      <a>Contact</a>
      <a>Help</a>
    </>
  );
  return (
    <div className="navbar bg-[#404040] text-white p-8">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case">
          <h3 className="text-xl"> <span className="font-extrabold">shop</span>cart</h3>
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center gap-4">
          {footerItems}
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                English
              </summary>
              <ul className="p-2 bg-base-100">
                <li className="mb-2"><a>Spanish</a></li>
                <li><a>Bengali</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;