import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/speakers">
            <a>Speakers</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
