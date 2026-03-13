import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const sections = [
    {
        id: "introduction",
        number: "01",
        title: "Introduction",
        content: [
            {
                type: "paragraph",
                text: 'Welcome to NihongoPath ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our data practices for nihongopath.com.',
            },
            {
                type: "paragraph",
                text: "NihongoPath is an independent educational website for Japanese language learners preparing for the JLPT. We are not affiliated with the Japan Foundation or the official JLPT organization.",
            },
        ],
    },
    {
        id: "information-collected",
        number: "02",
        title: "Information We Collect",
        content: [
            { type: "subheading", text: "Information You Provide Voluntarily" },
            {
                type: "paragraph",
                text: "We only collect personal information that you actively provide to us, such as when you use our contact form. This may include:",
            },
            { type: "list", items: ["Your name", "Your email address", "Your phone number", "The message or inquiry you submit"] },
            { type: "subheading", text: "Information Collected Automatically" },
            {
                type: "paragraph",
                text: "When you visit our website, basic technical information may be collected automatically by our hosting provider or analytics tools, including:",
            },
            {
                type: "list",
                items: [
                    "IP address and approximate geographic location (country/region level)",
                    "Browser type and version",
                    "Device type and operating system",
                    "Pages visited, time on page, and navigation patterns",
                    "Referring URLs",
                ],
            },
            {
                type: "paragraph",
                text: "This information is used in aggregate to understand how the site is used and to maintain its performance. We do not use this data to identify individual visitors.",
            },
        ],
    },
    {
        id: "cookies",
        number: "03",
        title: "Cookies",
        content: [
            { type: "highlight", text: "NihongoPath does not use cookies or any cookie-based tracking." },
            {
                type: "paragraph",
                text: "We do not place tracking cookies on your device, and there is no cookie consent mechanism on this site because none is needed. Any cookies you may see are set solely by your browser or third-party services you have independently configured.",
            },
        ],
    },
    {
        id: "how-we-use",
        number: "04",
        title: "How We Use Your Information",
        content: [
            { type: "paragraph", text: "We use the information we collect only for the following purposes:" },
            {
                type: "list",
                items: [
                    "To respond to inquiries and messages submitted via our contact form",
                    "To review and process any study material contributions from users",
                    "To monitor and maintain website security and performance",
                    "To understand aggregate usage patterns and improve our educational content",
                    "To comply with applicable laws and regulations",
                ],
            },
            {
                type: "paragraph",
                text: "We do not use your information for advertising, profiling, or any automated decision-making.",
            },
        ],
    },
    {
        id: "data-sharing",
        number: "05",
        title: "Data Sharing & Disclosure",
        content: [
            {
                type: "paragraph",
                text: "We do not sell, rent, or trade your personal information. We may share data only in these limited circumstances:",
            },
            {
                type: "list",
                items: [
                    "Service Providers: With trusted third parties that help us operate the website, such as Web3Forms for contact form processing and our hosting provider.",
                    "Legal Requirements: When required by law, court order, or government regulation.",
                    "Protection of Rights: To protect the rights, property, or safety of NihongoPath or its users.",
                ],
            },
        ],
    },
    {
        id: "third-party",
        number: "06",
        title: "Third-Party Services",
        content: [
            {
                type: "paragraph",
                text: "NihongoPath uses the following third-party services, each governed by their own privacy policies:",
            },
            {
                type: "list",
                items: [
                    "Web3Forms: Processes contact form submissions. See their privacy policy at web3forms.com.",
                    "Hosting & Analytics Providers: Basic usage analytics may be collected by our hosting infrastructure.",
                ],
            },
            { type: "paragraph", text: "We encourage you to review the privacy policies of these services." },
        ],
    },
    {
        id: "security",
        number: "07",
        title: "Data Security",
        content: [
            {
                type: "paragraph",
                text: "We implement reasonable security measures to protect your personal information, including secure data transmission protocols and limited access to personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
            },
        ],
    },
    {
        id: "retention",
        number: "08",
        title: "Data Retention",
        content: [
            {
                type: "paragraph",
                text: "We retain your personal information only as long as necessary to fulfill the purposes described in this policy:",
            },
            {
                type: "list",
                items: [
                    "Contact form submissions: Retained for up to 2 years, or until you request deletion.",
                    "Automatically collected technical data: Aggregated and anonymized; may be retained indefinitely in that form.",
                ],
            },
        ],
    },
    {
        id: "your-rights",
        number: "09",
        title: "Your Rights",
        content: [
            {
                type: "paragraph",
                text: "Depending on your location, you may have the following rights regarding your personal data:",
            },
            {
                type: "list",
                items: [
                    "Access: Request a copy of the personal data we hold about you",
                    "Correction: Request correction of inaccurate or incomplete data",
                    "Deletion: Request that we delete your personal data",
                    "Objection: Object to our processing of your personal data",
                    "Data Portability: Request a copy of your data in a portable format",
                    "Withdraw Consent: Withdraw any consent you have given at any time",
                ],
            },
            {
                type: "paragraph",
                text: "To exercise any of these rights, please contact us using the details in Section 13.",
            },
        ],
    },
    {
        id: "childrens-privacy",
        number: "10",
        title: "Children's Privacy",
        content: [
            {
                type: "paragraph",
                text: "NihongoPath is an educational resource open to learners of all ages. We do not knowingly collect personal information from children under the age of 13 without verified parental consent. If you believe a child under 13 has submitted personal information to us, please contact us immediately and we will delete it promptly.",
            },
        ],
    },
    {
        id: "international",
        number: "11",
        title: "International Data Transfers",
        content: [
            {
                type: "paragraph",
                text: "Your information may be processed in countries other than your country of residence, including through our third-party service providers. We take reasonable steps to ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.",
            },
        ],
    },
    {
        id: "changes",
        number: "12",
        title: "Changes to This Policy",
        content: [
            {
                type: "paragraph",
                text: 'We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. For material changes, we will provide notice on the website. We encourage you to review this policy periodically.',
            },
        ],
    },
    {
        id: "contact",
        number: "13",
        title: "Contact Us",
        content: [
            {
                type: "paragraph",
                text: "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us:",
            },
            {
                type: "contact",
                link: <Link to="/contact">NihongoPath/contact</Link>,
            },
        ],
    },
];

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "subheading"; text: string }
    | { type: "highlight"; text: string }
    | { type: "list"; items: string[] }
    | { type: "contact"; link: string };

function renderContent(block: ContentBlock, idx: number) {
    switch (block.type) {
        case "paragraph":
            return (
                <p key={idx} className="text-gray-600 leading-relaxed text-sm mb-4 last:mb-0">
                    {block.text}
                </p>
            );
        case "subheading":
            return (
                <h3 key={idx} className="text-sm font-semibold text-gray-800 mt-5 mb-2 tracking-wide">
                    {block.text}
                </h3>
            );
        case "highlight":
            return (
                <div
                    key={idx}
                    className="bg-red-50 border border-red-200 border-l-4 border-l-red-600 rounded-r-lg px-4 py-3 mb-4 text-red-700 font-semibold text-sm"
                >
                    🍃 {block.text}
                </div>
            );
        case "list":
            return (
                <ul key={idx} className="space-y-2 mb-4">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                            <span className="text-red-500 mt-1 text-xs flex-shrink-0">◆</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case "contact":
            return (
                <div key={idx} className="bg-gray-900 rounded-xl p-5 mt-3 space-y-3">
                    <a
                        onClick={scrollToTop}
                        href={`https://${block.link}`}
                        className="flex items-center gap-3 text-red-300 hover:text-red-200 text-sm font-medium transition-colors"
                    >
                        <span>🔗</span>
                        {block.link}
                    </a>
                </div>
            );
        default:
            return null;
    }
}

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<string>("introduction");
    const isClickScrolling = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;
                // Find the topmost visible section
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            isClickScrolling.current = true;
            setActiveSection(id);
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Re-enable observer after scroll animation finishes
            setTimeout(() => { isClickScrolling.current = false; }, 800);
        }
    };

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero */}
            <div className="relative bg-gray-900 py-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-9xl font-bold text-red-900 opacity-10">秘</span>
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm tracking-wider">
                        Effective Date: March 13, 2026 &nbsp;·&nbsp; Last Updated: March 13, 2026
                    </p>
                </div>
            </div>

            {/* Layout */}
            <div className="max-w-5xl mx-auto px-4 py-10 flex gap-8 items-start">
                {/* Sidebar TOC */}
                <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-20">
                    <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Contents</p>
                        <nav className="flex flex-col gap-0.5">
                            {sections.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => scrollToSection(s.id)}
                                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-left w-full transition-colors ${activeSection === s.id
                                            ? "bg-red-50 text-red-600"
                                            : "text-gray-500 hover:bg-stone-100 hover:text-gray-800"
                                        }`}
                                >
                                    <span
                                        className={`font-mono text-xs font-bold flex-shrink-0 ${activeSection === s.id ? "text-red-500" : "text-gray-300"
                                            }`}
                                    >
                                        {s.number}
                                    </span>
                                    <span className={`text-xs leading-snug ${activeSection === s.id ? "font-semibold" : ""}`}>
                                        {s.title}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 min-w-0 flex flex-col gap-4">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className="bg-white border border-stone-200 rounded-2xl p-6 scroll-mt-24 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-mono text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-md px-2 py-0.5">
                                    {section.number}
                                </span>
                                <h2 className="text-base font-bold text-gray-900 tracking-tight">{section.title}</h2>
                            </div>

                            <div className="h-px bg-gradient-to-r from-red-300 to-transparent mb-5" />

                            {section.content.map((block, i) => renderContent(block as ContentBlock, i))}
                        </div>
                    ))}

                    {/* Legal note */}
                    <div className="rounded-2xl p-5 flex gap-3 items-start">
                        <span className="text-xl flex-shrink-0">⚖️</span>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            <span className="text-red-400 font-semibold">Legal Note: </span>
                            This privacy policy is provided for educational purposes. For complete legal protection, we recommend
                            consulting with a legal professional to ensure compliance with all applicable laws in your jurisdiction,
                            including GDPR (EU), CCPA (California), and other relevant data protection regulations.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}