import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import {ContactsUser} from "@/components/ContactsUser";

export default async function Contacts({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang, "contacts");

  return (
    <>
      <ContactsUser dict={dict}/>
    </>
  );
}
