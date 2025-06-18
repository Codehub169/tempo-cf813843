import CostIcon from '../assets/icons/costIcon.svg?react';
import CustomizationIcon from '../assets/icons/customizationIcon.svg?react';
import SecurityIcon from '../assets/icons/securityIcon.svg?react';
import SoftwareIcon from '../assets/icons/softwareIcon.svg?react';
import CommandLineIcon from '../assets/icons/commandLineIcon.svg?react';
import HardwareIcon from '../assets/icons/hardwareIcon.svg?react';

export const differencesData = [
    {
        id: "cost",
        title: "Cost",
        icon: CostIcon,
        comparisons: [
            { os: "Linux", detail: "Free", type: "check" },
            { os: "Windows", detail: "Paid License", type: "cross" },
            { os: "macOS", detail: "Bundled with hardware", type: "neutral" },
        ]
    },
    {
        id: "customization",
        title: "Customization",
        icon: CustomizationIcon,
        comparisons: [
            { os: "Linux", detail: "Extremely High", type: "check" },
            { os: "Windows", detail: "Moderate", type: "neutral" },
            { os: "macOS", detail: "Low", type: "cross" },
        ]
    },
    {
        id: "security",
        title: "Security",
        icon: SecurityIcon,
        comparisons: [
            { os: "Linux", detail: "Very High (by design)", type: "check" },
            { os: "Windows", detail: "Good (common target)", type: "neutral" },
            { os: "macOS", detail: "Very High (Unix-based)", type: "check" },
        ]
    },
    {
        id: "software",
        title: "Software",
        icon: SoftwareIcon,
        comparisons: [
            { os: "Linux", detail: "Massive FOSS library", type: "check" },
            { os: "Windows", detail: "Largest commercial library", type: "check" },
            { os: "macOS", detail: "Curated, quality library", type: "neutral" },
        ]
    },
    {
        id: "command-line",
        title: "Command Line",
        icon: CommandLineIcon,
        comparisons: [
            { os: "Linux", detail: "Powerful (Bash/Zsh)", type: "check" },
            { os: "Windows", detail: "Improving (PowerShell/WSL)", type: "neutral" },
            { os: "macOS", detail: "Powerful (Zsh)", type: "check" },
        ]
    },
    {
        id: "hardware",
        title: "Hardware",
        icon: HardwareIcon,
        comparisons: [
            { os: "Linux", detail: "Extremely broad support", type: "check" },
            { os: "Windows", detail: "Excellent driver support", type: "check" },
            { os: "macOS", detail: "Limited to Apple hardware", type: "cross" },
        ]
    }
];
