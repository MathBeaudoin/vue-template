import { createI18n, type I18n } from "vue-i18n";
import fr from "@i18n/fr.json";
import en from "@i18n/en.json";

export const i18n = createI18n({
    sync: true,
    legacy: false,
    locale: "fr",
    fallbackLocale: "fr",
    messages: {
        fr: fr,
        en: en,
    },
});

type TFunction = (key: string) => string;

export const $t: I18n["global"]["t"] & TFunction = i18n.global.t;
