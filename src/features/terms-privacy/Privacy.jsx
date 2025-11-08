import React from 'react'
import NavBar from '../component/NavBar'

const Privacy = () => {
    const data = {
        title: 'Privacy Policy',
        updated: 'Current as of 8 Nov 2025',
        intro:
            "Time Genie ('we', 'us', or 'our') respects your privacy. This Privacy Policy explains what information we collect, how we use it, when we share it, and the choices you have regarding your information when using our website and services.",
        sections: [
            {
                id: 'what-we-collect',
                heading: 'Information we collect',
                paragraphs: [
                    "We collect information you provide directly to us, such as when you create an account, subscribe to newsletters, contact support, or otherwise interact with our site. This may include your name, email address, and any other information you choose to provide.",
                    "We also automatically collect certain information about your device and usage, including IP address, browser type, pages visited, and timestamps. We may use cookies and similar technologies to gather this data."
                ]
            },
            {
                id: 'how-we-use',
                heading: 'How we use information',
                paragraphs: [
                    "We use information to provide, maintain, and improve our services; to communicate with you; to personalize content and recommendations; and to protect the security and integrity of our services.",
                    "We may also use aggregated or de-identified information for analytics and research purposes."
                ]
            },
            {
                id: 'sharing',
                heading: 'When we share information',
                paragraphs: [
                    "We do not sell your personal information. We may share information with service providers who perform services on our behalf (for example, hosting providers, analytics providers, and email delivery services). These providers are contractually limited to using your information only as instructed by us.",
                    "We may disclose information to comply with laws or to respond to lawful requests and legal processes, to protect the rights and safety of our users or the public, or to enforce our terms and policies."
                ]
            },
            {
                id: 'cookies',
                heading: 'Cookies and tracking',
                paragraphs: [
                    "We use cookies and similar tracking technologies to recognize you, remember preferences, and collect analytics data. You can control cookie settings through your browser, but disabling cookies may affect the functionality of the site."
                ]
            },
            {
                id: 'security',
                heading: 'Data security',
                paragraphs: [
                    "We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security."
                ]
            },
            {
                id: 'your-rights',
                heading: 'Your choices and rights',
                paragraphs: [
                    "You may opt out of receiving promotional communications from us by following the instructions in those messages or by contacting us. You can also review, update, or delete certain account information by signing into your account or contacting support.",
                    "Where applicable, you may have rights under local laws (such as access, correction, deletion, or data portability). To exercise these rights, contact us using the details below."
                ]
            },
            {
                id: 'children',
                heading: "Children's privacy",
                paragraphs: [
                    "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us and we will take steps to remove it."
                ]
            },
            {
                id: 'changes',
                heading: 'Changes to this policy',
                paragraphs: [
                    "We may update this Privacy Policy from time to time. When we do, we will revise the 'updated' date at the top of the page. We encourage you to review the policy periodically for any changes."
                ]
            },
            {
                id: 'contact',
                heading: 'Contact us',
                paragraphs: [
                    "If you have questions or concerns about this Privacy Policy or our practices, please contact us at: support@time-genie.example (replace with your actual support email)."
                ]
            }
        ]
    }

    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 bg-[#0F2846] min-h-screen pb-20">

            <section className="mb-10">
                <NavBar />
            </section>

            <div className="mx-auto max-w-4xl">
                <p className="text-sm text-[#FADE2A] text-center mb-4">{data.updated}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">{data.title}</h1>

                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">{data.intro}</p>

                <div className="space-y-10">
                    {data.sections.map((s) => (
                        <section key={s.id} id={s.id} className="">
                            <h2 className="text-xl md:text-2xl font-semibold text-[#FADE2A] mb-4">{s.heading}</h2>
                            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed lg:text-lg">
                                {s.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Privacy