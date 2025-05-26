import type { SupportedTheme } from "@/services/themes/types";
import { SUPPORTED_THEMES } from "@/services/themes/constants";

export class ThemeInstance {
    private theme: SupportedTheme<any> = SUPPORTED_THEMES.light;

    public setTheme(theme: SupportedTheme<any>): void {
        this.theme = theme;
    }

    public getTheme(): SupportedTheme<any> {
        return this.theme;
    }
}
