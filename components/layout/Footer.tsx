import Link from "next/link";
import { PrimaryButton } from "../shared/buttons";

type FooterProps = {
  email: string;
  phone: string;
  navigation: { title: string; links: { title: string; link: string }[] }[];
  licenses: string[];
  copyright: string;
};

export function Footer({
  email,
  phone,
  navigation,
  licenses,
  copyright,
}: FooterProps) {
  return (
    <div className="container flex flex-col gap-8 lg:gap-12 mt-20 lg:mt-40 px-4 py-8 lg:p-12 bg-gray rounded-t">
      <div className="flex flex-col gap-8 lg:gap-2">
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center">
          <a
            className="text-center text-accent text-xl lg:text-[32px] leading-none font-bold"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <PrimaryButton className="px-8 text-xl leading-none">
            Text
          </PrimaryButton>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row">
          <span className="text-dark/50">Phone number:</span>
          <a className="text-dark font-bold" href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {navigation.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-2 lg:gap-4 lg:flex-[1]">
            <span className="text-dark/50">{title}</span>
            <ul className="flex flex-col">
              {links.map(({ title, link }) => (
                <li key={title} className="flex">
                  <Link
                    className="w-full py-4 rounded-xs font-bold text-dark hover:bg-accent/10 active:bg-accent/10 transition-colors"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4 lg:flex-[2]">
          <span className="text-dark/50">Licenses</span>
          <ul className="flex flex-col gap-4">
            {licenses.map((license, idx) => (
              <li key={idx} className="text-dark leading-paragraph">
                {license}
              </li>
            ))}
          </ul>
          <span className="text-dark leading-paragraph">{copyright}</span>
        </div>
      </div>
    </div>
  );
}
