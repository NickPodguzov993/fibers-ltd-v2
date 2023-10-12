import clsx from "clsx";
import Image from "next/image";

import { PropsWithLanguage } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";

const cards = [
  {
    title: "Our Mission",
    description:
      "At our company, our mission is to revolutionize lead generation by providing innovative solutions that drive business growth. We are committed to empowering businesses with high-quality leads and delivering exceptional results. Our team of experts leverages cutting-edge technology and data-driven strategies to connect businesses with their target audience effectively",
    image: "/images/about-us/our-mission.png",
  },
  {
    title: "Our attitude towards clients",
    description:
      "We prioritize customer satisfaction and strive to build long-term partnerships with our clients. By understanding their unique requirements, we develop tailored lead generation strategies that align with their business objectives. Our transparent and collaborative approach ensures that they are actively involved in the process and can track their campaign progress",
    image: "/images/about-us/our-attitude.png",
  },
  {
    title: "Our Approach",
    description:
      "At our company, we take a strategic and tailored approach to lead generation. We conduct thorough research, implement data-driven strategies, utilize multiple channels, personalize messaging, continuously optimize campaigns, and provide transparent reporting. Our goal is to generate high-quality leads and nurture them into valuable customers, ensuring sustainable business growth for our clients",
    image: "/images/about-us/our-approach.png",
  },
  {
    title: "Our Team",
    description:
      "We foster a collaborative and innovative work environment that encourages creativity and continuous learning. Our team members are constantly exploring new trends and technologies, staying updated with the evolving landscape of lead generation. This ensures that we are always able to provide our clients with cutting-edge solutions tailored to their specific needs",
    image: "/images/about-us/our-team.png",
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
        <div className="flex gap-2 lg:gap-4 items-center justify-center">
          <Image
            className="h-8 w-auto lg:h-14"
            src="/images/emojis/spark.png"
            alt=""
            width={56}
            height={56}
          />
          <h2
            className={clsx(
              "text-[32px] lg:text-[64px] font-bold text-dark",
              titleFont.className
            )}
          >
            About us
          </h2>
        </div>
        <p
          className={clsx(
            "font-bold leading-paragraph text-dark text-center lg:flex lg:flex-col lg:text-[48px] lg:leading-[1.4]",
            titleFont.className
          )}
        >
          <span className="text-dark/50">
            We pride ourselves on our personalized approach and commitment to
            delivering exceptional results.
          </span>
          <span>
            Trust us to drive your business forward. Let{"'"}s create success
            together
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
                "rounded lg:rounded-lg flex items-center justify-center",
                !(idx % 2) ? "order-2" : "order-1",
                !(idx % 3) ? "lg:w-1/2" : "lg:w-full",
                colors[idx % colors.length][1]
              )}
            >
              <Image
                className="h-[240px] w-full lg:h-[320px]"
                src={image}
                alt={title}
                width={320}
                height={320}
                unoptimized
              />
            </div>
            <div
              className={clsx(
                "px-2 py-4 lg:p-8 flex flex-col gap-4 lg:gap-16",
                !(idx % 2) ? "order-1" : "order-2",
                !(idx % 3) ? "lg:w-1/2" : "lg:w-full"
              )}
            >
              <h3
                className={clsx(
                  "text-[24px] lg:text-[32px] font-bold text-dark",
                  titleFont.className
                )}
              >
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
