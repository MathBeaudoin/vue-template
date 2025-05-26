import { i18n } from "@/services/i18n/i18n";
import type { SupportedLanguage, SupportedLocale } from "@/services/i18n/types";
import { SUPPORTED_LANGUAGES } from "@/services/i18n/constants";

export class LanguageService {
    public isValidLanguage(language: SupportedLanguage<any>): boolean {
        return Object.keys(SUPPORTED_LANGUAGES).includes(language.locale);
    }

    public select(language: SupportedLanguage<any>): Error | SupportedLocale {
        if (!this.isValidLanguage(language)) {
            return new Error();
        }

        const finalLocale: SupportedLocale = language.locale;
        i18n.global.locale.value = finalLocale;

        return finalLocale;
    }
}
