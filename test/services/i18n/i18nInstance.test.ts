import { expect, test, describe, beforeEach, vi } from "vitest";
import { I18nInstance } from "@/services/i18n/i18nInstance";
import type { SupportedLocale } from "@/services/i18n/types";

describe("services/i18n/i18nInstance", () => {
    let i18nInstance: I18nInstance;
    const ANY_SUPPORTED_LOCALE: SupportedLocale = "en";

    beforeEach(() => {
        vi.restoreAllMocks();
        i18nInstance = new I18nInstance();
    });

    test("whenUpdatingLocale_thenChangesRootLocale", () => {
        i18nInstance.setLocale(ANY_SUPPORTED_LOCALE);

        expect(i18nInstance.getLocale()).toBe(ANY_SUPPORTED_LOCALE);
    });
});
