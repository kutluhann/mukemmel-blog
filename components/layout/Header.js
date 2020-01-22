import Link from 'next/link';

const Header = () => (
  <nav className="wiggle bg-primary text-white py-3 touch:py-0 z-10">
    <div className="container h-12 max-w-widescreen touch:px-5 flex flex-row justify-start items-center">
      <Link href="/">
        <a className="text-5 mx-2 touch:mx-0">
          kutluhann
        </a>
      </Link>
    </div>
  </nav>
);

export default Header;