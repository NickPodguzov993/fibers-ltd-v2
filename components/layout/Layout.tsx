import { PropsWithChildren } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieInformation } from "./CookieInformation";

type LayoutProps = PropsWithChildren & {
  lang: Locale;
};

export async function Layout({ lang, children }: LayoutProps) {
  const dict = await getDictionary(lang, "layout");
  const modalTitle = await getDictionary(lang, "product")
    const titleEmail = modalTitle.email
    const titlePassword = modalTitle.password
    const titleForgotPassword = modalTitle.forgotTitle
    const titleSingUp = modalTitle.buttonSing
    const titleLog = modalTitle.titleLog
    const titleInvalidEmail = modalTitle.company


    const titlePersonal = modalTitle.personal
    const titleCompany = modalTitle.password
    const titleName = modalTitle.nameWithStar
    const titlePasswordWithStar = modalTitle.passwordWithStar
    const emailWithStar = modalTitle.emailWithStar
    const repeatPassword = modalTitle.repeatPassword
    const socialNetwork = modalTitle.socialNetwork
    const phoneNumber = modalTitle.phoneNumber
    const titlePrivacy = modalTitle.titlePrivacy
    const titleHaveAcc = modalTitle.titleHaveAcc
    const companyName = modalTitle.companyName
    const companyAddress = modalTitle.companyAddress
    const valueAdded = modalTitle.valueAdded
    const termsConditions = modalTitle.termsConditions
    const privacyPolicy = modalTitle.privacyPolicy
    const and = modalTitle.and
    const info = modalTitle.info

  return (
    <div className="pt-[120px] lg:pt-40 overflow-hidden">
      <CookieInformation {...dict.cookie} />
      <Header {...dict.header}
              {...modalTitle}
              termsConditions={termsConditions}
              privacyPolicy={privacyPolicy}
              and={and}
              titleLog={titleLog}
              titleEmail={titleEmail}
              titlePassword={titlePassword}
              titleForgotPassword={titleForgotPassword}
              titleSingUp={titleSingUp}
              titlePersonal={titlePersonal}
              titleInvalidEmail={titleInvalidEmail}
              titleCompany={titleCompany}
              titleName={titleName}
              titlePasswordWithStar={titlePasswordWithStar}
              emailWithStar={emailWithStar}
              repeatPassword={repeatPassword}
              socialNetwork={socialNetwork}
              phoneNumber={phoneNumber}
              titlePrivacy={titlePrivacy}
              titleHaveAcc={titleHaveAcc}
              companyName={companyName}
              companyAddress={companyAddress}
              valueAdded={valueAdded}
              info={info}
             />
      {children}
      <Footer email={dict.email} {...dict.footer} />
    </div>
  );
}
