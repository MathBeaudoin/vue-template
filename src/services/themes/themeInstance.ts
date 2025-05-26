import type { SupportedTheme } from "@/services/themes/types";
import { SUPPORTED_THEMES } from "@/services/themes/constants";
import { useColorMode } from "@vueuse/core";

export class ThemeInstance {
    private theme: SupportedTheme<any> = SUPPORTED_THEMES.light;

    public setTheme(theme: SupportedTheme<any>): void {
        this.theme = theme;
        useColorMode().value = theme.label;
    }

    public getTheme(): SupportedTheme<any> {
        return this.theme;
    }
}
