import { expect, test, describe, vi, beforeEach } from "vitest";
import { ThemeInstance } from "@/services/themes/themeInstance";
import { SUPPORTED_THEMES } from "@/services/themes/constants";

describe("services/themes/themeInstance", () => {
    let themeInstance: ThemeInstance;
    const ANY_SUPPORTED_THEME: any = {
        label: "dark",
    };

    beforeEach(() => {
        vi.restoreAllMocks();
        themeInstance = new ThemeInstance();
    });

    test("whenGettingThemeByDefault_thenIsLight", () => {
        expect(themeInstance.getTheme()).toBe(SUPPORTED_THEMES["light"]);
    });

    test("whenSettingTheme_thenUpdatesColorMode_andCurrentTheme", () => {
        themeInstance.setTheme(ANY_SUPPORTED_THEME);

        // IMPROVEMENT: Check if useColorMode().value has the correct new value, as its
        // used to change theme with Tailwind.
        expect(themeInstance.getTheme()).toBe(ANY_SUPPORTED_THEME);
    });
});
