import { I18nInstance } from "@/services/i18n/i18nInstance";
import type { SupportedLanguage, SupportedLocale } from "@/services/i18n/types";
import { SUPPORTED_LANGUAGES } from "@/services/i18n/constants";
import { POP_LOG_DEBUG } from "@/logging/logger";

export class LanguageService {
    private static i18nInstance = new I18nInstance();

    public static isValidLanguage(language: SupportedLanguage<any>): boolean {
        return Object.keys(SUPPORTED_LANGUAGES).includes(language.locale);
    }

    public static getI18nInstance(): I18nInstance {
        return this.i18nInstance;
    }

    public static selectLanguage(language: SupportedLanguage<any>): Error | SupportedLocale {
        POP_LOG_DEBUG(`LanguageService - selectLanguage (${language.locale})`);
        if (!this.isValidLanguage(language)) {
            return new Error();
        }

        this.i18nInstance.setLocale(language.locale);
        return language.locale;
    }

    public static get $t() {
        return this.i18nInstance.$t.bind(this.i18nInstance);
    }
}
