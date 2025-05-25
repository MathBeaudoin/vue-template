import type { SupportedLanguages } from "@/i18n/types";

export const SUPPORTED_LANGUAGES: SupportedLanguages = {
    fr: {
        locale: "fr",
        label: "Français",
    },
    en: {
        locale: "en",
        label: "English",
    },
} as const;
