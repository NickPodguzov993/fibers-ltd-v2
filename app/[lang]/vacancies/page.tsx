import { PrimaryButton } from "@/components/shared/buttons";
import { PropsWithLanguage } from "@/lib/i18n";
import Link from "next/link";

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
            <h2 className="text-[32px] lg:text-[64px] font-intern font-bold text-dark">
              Join our team
            </h2>
          </div>
          <p className="text-lg leading-paragraph text-dark/50">
            Build your career at Fibers
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Dev",
              description: "lorem ipsum",
              tags: ["cool lon long", "remote sdafadf", "job asdf"],
            },
            {
              title: "Dev",
              description: "lorem ipsum",
              tags: ["cool lon long", "remote sdafadf", "job asdf"],
            },
            {
              title: "Dev",
              description: "lorem ipsum",
              tags: ["cool lon long", "remote sdafadf", "job asdf"],
            },
          ].map(({ title, description, tags }, idx) => (
            <Link
              className="p-8 flex flex-col gap-5 lg:gap-6 rounded border-2 border-primary transition-shadow hover:shadow-card"
              key={idx}
              href={"#"}
            >
              <h3 className="text-[32px] font-intern font-bold text-dark">
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
