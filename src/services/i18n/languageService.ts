import { I18nInstance } from "@/services/i18n/i18nInstance";
import type { SupportedLanguage, SupportedLocale } from "@/services/i18n/types";
import { SUPPORTED_LANGUAGES } from "@/services/i18n/constants";
import { POP_LOG_DEBUG } from "@/logging/logger";
import { inject } from "vue";

export class LanguageService {
    private i18nInstance: I18nInstance;

    constructor(i18nInstance: I18nInstance) {
        this.i18nInstance = i18nInstance;
    }

    public isValidLanguage(language: SupportedLanguage<any>): boolean {
        return Object.keys(SUPPORTED_LANGUAGES).includes(language.locale);
    }

    public getI18nInstance(): I18nInstance {
        return this.i18nInstance;
    }

    public selectLanguage(language: SupportedLanguage<any>): Error | SupportedLocale {
        POP_LOG_DEBUG(`LanguageService - selectLanguage (${language.locale})`);
        if (!this.isValidLanguage(language)) {
            return new Error();
        }

        this.i18nInstance.setLocale(language.locale);
        return language.locale;
    }

    public get $t() {
        return this.i18nInstance.$t.bind(this.i18nInstance);
    }
}

export function useLanguageService(): LanguageService {
    const service = inject<LanguageService>("languageService");
    if (!service) {
        throw new Error("LanguageService was not provided");
    }
    return service;
}
