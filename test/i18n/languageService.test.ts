import { expect, test, describe, beforeEach, vi } from "vitest";
import { LanguageService } from "@/services/i18n/languageService";

describe("i18n/languageService", () => {
    const OTHER_SUPPORTED_LANGUAGE: any = {
        locale: "fr",
    };
    const ANY_INVALID_LANGUAGE: any = {};

    beforeEach(() => {
        vi.restoreAllMocks();
    });

    test("whenSelectingOtherSupportedLanguage_thenLocaleIsChangedAndReturned", () => {
        const i18nInstanceSpy = vi.spyOn(LanguageService.getI18nInstance(), "setLocale");
        vi.spyOn(LanguageService, "isValidLanguage").mockReturnValue(true);

        const locale = LanguageService.selectLanguage(OTHER_SUPPORTED_LANGUAGE);

        expect(locale).toBe(OTHER_SUPPORTED_LANGUAGE.locale);
        expect(i18nInstanceSpy).toHaveBeenCalledExactlyOnceWith(locale);
        //expect(LanguageService.getI18nInstance().getRoot().global.locale.value).toBe(OTHER_SUPPORTED_LANGUAGE.locale);
    });

    test("whenSelectingInvalidLanguage_thenLocaleIsNotChanged", () => {
        const i18nInstanceSpy = vi.spyOn(LanguageService.getI18nInstance(), "setLocale");

        const locale = LanguageService.selectLanguage(ANY_INVALID_LANGUAGE);

        expect(locale).not.toBe(ANY_INVALID_LANGUAGE.locale);
        expect(i18nInstanceSpy).not.toBeCalled();
        //expect(locale).not.toBe(LanguageService.getI18nInstance().getRoot().global.locale.value);
    });

    test("whenSelectingInvalidLanguage_thenErrorIsReturned", () => {
        expect(LanguageService.selectLanguage(ANY_INVALID_LANGUAGE)).toBeInstanceOf(Error);
    });
});
