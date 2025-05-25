import { expect, test, describe, beforeEach, vi } from "vitest";
import { LanguageHandler } from "@/i18n/languageHandler";
import { i18n } from "@/i18n/i18n";

describe("i18n/languageHandler", () => {
    let languageHandler: LanguageHandler;
    const OTHER_SUPPORTED_LANGUAGE: any = {
        locale: "fr",
    };
    const ANY_INVALID_LANGUAGE: any = {};

    beforeEach(() => {
        vi.restoreAllMocks();
        languageHandler = new LanguageHandler();
    });

    test("whenSelectingOtherSupportedLanguage_thenLocaleIsChangedAndReturned", () => {
        vi.spyOn(languageHandler, "isValidLanguage").mockReturnValue(true);
        const locale = languageHandler.select(OTHER_SUPPORTED_LANGUAGE);

        expect(locale).toBe(OTHER_SUPPORTED_LANGUAGE.locale);
        expect(i18n.global.locale.value).toBe(OTHER_SUPPORTED_LANGUAGE.locale);
    });

    test("whenSelectingInvalidLanguage_thenLocaleIsNotChanged", () => {
        const locale = languageHandler.select(ANY_INVALID_LANGUAGE);

        expect(locale).not.toBe(ANY_INVALID_LANGUAGE.locale);
        expect(locale).not.toBe(i18n.global.locale.value);
    });

    test("whenSelectingInvalidLanguage_thenErrorIsThrown", () => {
        expect(languageHandler.select(ANY_INVALID_LANGUAGE)).toBeInstanceOf(Error);
    });
});
