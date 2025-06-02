import { expect, test, describe, beforeEach, vi } from "vitest";
import { LanguageService } from "@/services/i18n/languageService";
import { I18nInstance } from "@/services/i18n/i18nInstance";

describe("services/i18n/languageService", () => {
    let languageService: LanguageService;
    const OTHER_SUPPORTED_LANGUAGE: any = {
        locale: "fr",
    };
    const ANY_INVALID_LANGUAGE: any = {};

    beforeEach(() => {
        vi.restoreAllMocks();
        languageService = new LanguageService(new I18nInstance());
    });

    test("whenSelectingOtherSupportedLanguage_thenLocaleIsChangedAndReturned", () => {
        const i18nInstanceSpy = vi.spyOn(languageService.getI18nInstance(), "setLocale");
        vi.spyOn(languageService, "isValidLanguage").mockReturnValue(true);

        const locale = languageService.selectLanguage(OTHER_SUPPORTED_LANGUAGE);

        expect(locale).toBe(OTHER_SUPPORTED_LANGUAGE.locale);
        expect(i18nInstanceSpy).toHaveBeenCalledExactlyOnceWith(locale);
    });

    test("whenSelectingInvalidLanguage_thenLocaleIsNotChanged", () => {
        const i18nInstanceSpy = vi.spyOn(languageService.getI18nInstance(), "setLocale");

        const locale = languageService.selectLanguage(ANY_INVALID_LANGUAGE);

        expect(locale).not.toBe(ANY_INVALID_LANGUAGE.locale);
        expect(i18nInstanceSpy).not.toBeCalled();
    });

    test("whenSelectingInvalidLanguage_thenErrorIsReturned", () => {
        expect(languageService.selectLanguage(ANY_INVALID_LANGUAGE)).toBeInstanceOf(Error);
    });
});
