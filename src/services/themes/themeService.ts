import type { SupportedTheme, SupportedThemeLabel } from "@/services/themes/types";
import { SUPPORTED_THEMES } from "@/services/themes/constants";
import { ThemeInstance } from "@/services/themes/themeInstance";
import { POP_LOG_DEBUG } from "@/logging/logger";

export class ThemeService {
    private static themeInstance = new ThemeInstance();

    public static isValidTheme(theme: SupportedTheme<any>): boolean {
        return Object.keys(SUPPORTED_THEMES).includes(theme.label);
    }

    public static selectTheme(theme: SupportedTheme<any>): Error | SupportedThemeLabel {
        POP_LOG_DEBUG(`ThemeService - selectTheme (${theme.label})`);
        if (!this.isValidTheme(theme)) {
            return new Error();
        }

        this.themeInstance.setTheme(theme);
        return theme.label;
    }
}
