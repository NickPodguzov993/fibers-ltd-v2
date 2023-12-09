
import clsx from "clsx";
import Image from "next/image";

import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import 'aos/dist/aos.css';
import {AboutUsUser} from "@/components/AboutUsUser";

export default async function AboutUs({ params: { lang } }: PropsWithLanguage) {
 const dict = await getDictionary(lang, "aboutUs");

  const colors = [
    ["bg-light-green", "bg-green"],
    ["bg-light-pink", "bg-pink"],
    ["bg-light-violet", "bg-violet"],
  ];



  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-6 lg:gap-40">
      <AboutUsUser dict={dict} colors={colors}/>

    </div>
  );
}
