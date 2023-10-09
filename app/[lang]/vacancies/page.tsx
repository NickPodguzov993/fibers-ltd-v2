import clsx from "clsx";
import Link from "next/link";
import { titleFont } from "@/lib/fonts";
import { PropsWithLanguage } from "@/lib/i18n";
import { PrimaryButton } from "@/components/shared/buttons";

const vacancies = [
  {
    title: "Vacancy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: ["Remote", "Without expirience", "Another tag"],
  },
  {
    title: "Vacancy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: ["Remote", "Without expirience", "Another tag"],
  },
  {
    title: "Vacancy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: ["Remote", "Without expirience", "Another tag"],
  },
];

export default async function Vacancies({
  params: { lang },
}: PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  return (
    <div className="relative container pt-10 lg:pt-0 flex flex-col lg:flex-row gap-20 lg:gap-16">
      <div className="lg:w-[800px] flex-shrink-0 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 lg:gap-4">
            <div>nigga</div>
            <h2
              className={clsx(
                "text-[32px] lg:text-[64px] font-bold text-dark",
                titleFont.className
              )}
            >
              Join our team
            </h2>
          </div>
          <p className="text-lg leading-paragraph text-dark/50">
            Build your career at Fibers
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {vacancies.map(({ title, description, tags }, idx) => (
            <Link
              className="p-8 flex flex-col gap-5 lg:gap-6 rounded border-2 border-primary transition-shadow hover:shadow-card"
              key={idx}
              href={"#"}
            >
              <h3
                className={clsx(
                  "text-[32px] font-bold text-dark",
                  titleFont.className
                )}
              >
                {title}
              </h3>
              <div className="flex flex-col gap-4">
                <p className="leading-paragraph text-dark">{description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="leading-paragraph font-bold text-accent-link"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <PrimaryButton className="w-fit">Send CV</PrimaryButton>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:fixed lg:w-[496px] flex-1 lg:right-10 p-4 h-fit flex flex-col gap-4 rounded border-2 border-primary bg-white">
        <span className="font-bold text-dark leading-paragraph text-center">
          We something missed? Write us
        </span>
        <PrimaryButton>Contact us</PrimaryButton>
      </div>
    </div>
  );
}
