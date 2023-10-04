import Image from "next/image";
import Link from "next/link";
import {
  PrimaryButton,
  LinkButton,
  TransparentButton,
} from "../shared/buttons";

const links = [
  { url: "#", title: "About us" },
  { url: "#", title: "Vacancies" },
  { url: "#", title: "Contacts" },
  { url: "#", title: "Policies" },
];

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 lg:top-4 flex p-0 lg:px-4">
      <div className="container mx-auto w-full px-4 py-2 lg:p-4 flex justify-between items-center rounded-b lg:rounded bg-white/50 lg:bg-white/70 backdrop-blur lg:border lg:border-dashed lg:border-primary">
        <Link href="/">
          <Image
            className="h-10 object-contain object-left lg:h-12"
            src="/images/logo.png"
            alt="logo"
            width={236}
            height={48}
            unoptimized
          />
        </Link>
        <div className="flex">
          <nav className="hidden lg:block">
            <ul className="h-full flex items-center">
              {links.map(({ url, title }) => (
                <li key={title}>
                  <LinkButton href={url}>{title}</LinkButton>
                </li>
              ))}
            </ul>
          </nav>
          <TransparentButton className="hidden lg:block">
            Sign up
          </TransparentButton>
          <PrimaryButton className="hidden lg:block">Log in</PrimaryButton>
          <TransparentButton>Eng</TransparentButton>
        </div>
      </div>
    </div>
  );
}
