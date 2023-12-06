export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;
export type Locale = (typeof i18n)["locales"][number];

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
export const dictionaries = {
  en: {
    layout: () =>
      import("@/content/i18n/en/_layout.json").then((m) => m.default),
    home: () => import("@/content/i18n/en/home.json").then((m) => m.default),
    products: () =>
      import("@/content/i18n/en/products.json").then((m) => m.default),
    aboutUs: () =>
      import("@/content/i18n/en/about-us.json").then((m) => m.default),
    vacancies: () =>
      import("@/content/i18n/en/vacancies.json").then((m) => m.default),
    contacts: () =>
      import("@/content/i18n/en/contacts.json").then((m) => m.default),
    policies: () =>
      import("@/content/i18n/en/policies.json").then((m) => m.default),
    product: () =>
        import("@/content/i18n/en/product.json").then((m) => m.default),
    modalSingUp: () =>
        import("@/content/i18n/en/product.json").then((m) => m.default),
    modalLogIn: () =>
        import("@/content/i18n/en/product.json").then((m) => m.default),
  },

  zh: {
    layout: () =>
      import("@/content/i18n/zh/_layout.json").then((m) => m.default),
    home: () => import("@/content/i18n/zh/home.json").then((m) => m.default),
    products: () =>
      import("@/content/i18n/zh/products.json").then((m) => m.default),
    aboutUs: () =>
      import("@/content/i18n/zh/about-us.json").then((m) => m.default),
    vacancies: () =>
      import("@/content/i18n/zh/vacancies.json").then((m) => m.default),
    contacts: () =>
      import("@/content/i18n/zh/contacts.json").then((m) => m.default),
    policies: () =>
      import("@/content/i18n/zh/policies.json").then((m) => m.default),
    product: () =>
        import("@/content/i18n/zh/product.json").then((m) => m.default),
    modalSingUp: () =>
        import("@/content/i18n/zh/product.json").then((m) => m.default),
    modalLogIn: () =>
        import("@/content/i18n/zh/product.json").then((m) => m.default),
  },
};
