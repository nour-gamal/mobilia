import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.svg";
import search from "@assets/search.svg";
import cart from "@assets/cart.svg";

const Navbar = () => {
  return (
    <nav id="navbar" className="flex justify-around items-center">
      <section className="navbar-brand">
        <Link href='/'>
            <Image src={logo} alt="mobilia logo" />
        </Link>
      </section>
      <main id="navbar-links-desktop" className="flex grow">
        <ul className="flex justify-around grow">
          <li className="display-2 cursor-pointer">Home</li>
          <li className="display-2 cursor-pointer">Shop</li>
          <li className="display-2 cursor-pointer">About</li>
          <li className="display-2 cursor-pointer">Contact</li>
        </ul>
      </main>
      <section id="navbar-cart" className="flex grow justify-around">
        <Link href="/search">
             <Image src={search} alt="search" />
         </Link>
        <Link href="/cart">
             <Image src={cart} alt="cart icon" />
         </Link>
      </section>
    </nav>
  );
}
export default Navbar;