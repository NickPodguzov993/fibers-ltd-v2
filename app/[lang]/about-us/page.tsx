import clsx from "clsx";
import { PropsWithLanguage } from "@/lib/i18n";

const cards = [
  {
    title: "Value #1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    title: "Value #2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    title: "Value #3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    title: "Value #4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
];

export default async function AboutUs({ params: { lang } }: PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  const colors = [
    ["bg-light-green", "bg-green"],
    ["bg-light-pink", "bg-pink"],
    ["bg-light-violet", "bg-violet"],
  ];

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-6 lg:gap-40">
      <div className="flex flex-col gap-2 lg:gap-8">
        <h2 className="text-[32px] lg:text-[64px] font-intern font-bold text-dark text-center">
          About us
        </h2>
        <p className="font-intern font-bold leading-paragraph text-dark text-center lg:flex lg:flex-col lg:text-[48px] lg:leading-[1.4]">
          <span className="text-dark/50">
            Unlock the potential of your business in the digital world through
            our strategic online advertising services,
          </span>
          <span>
            designed to elevate your online presence and connect you with your
            target audience
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
        {cards.map(({ title, description, image }, idx) => (
          <div
            key={idx}
            className={clsx(
              "flex flex-col p-2 lg:p-4 rounded lg:rounded-xl",
              !(idx % 3) ? "lg:flex-row lg:col-span-2" : "",
              colors[idx % colors.length][0]
            )}
          >
            <div
              className={clsx(
                "h-[240px] lg:h-[380px] aspect-video rounded lg:rounded-lg",
                !(idx % 2) ? "order-2" : "order-1",
                !(idx % 3) ? "lg:w-1/2" : "lg:w-full",
                colors[idx % colors.length][1]
              )}
            />
            <div
              className={clsx(
                "px-2 py-4 lg:p-8 flex flex-col gap-4 lg:gap-16",
                !(idx % 2) ? "order-1" : "order-2",
                !(idx % 3) ? "lg:w-1/2" : "lg:w-full"
              )}
            >
              <h3 className="text-[24px] lg:text-[32px] font-intern font-bold text-dark">
                {title}
              </h3>
              <p className="leading-paragraph text-dark lg:text-[18px]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
