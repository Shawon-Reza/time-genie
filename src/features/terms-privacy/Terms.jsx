import React from 'react'
import NavBar from '../component/NavBar'

const Terms = () => {
    const data = {
        title: 'Terms of Use',
        updated: 'Current as of 20 Jan 2025',
        intro:
            "Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website.",
        sections: [
            {
                id: 'what-we-collect',
                heading: 'What information do we collect?',
                paragraphs: [
                    'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
                    'Elit nisl in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.'
                ]
            },
            {
                id: 'how-we-use',
                heading: 'How do we use your information?',
                paragraphs: [
                    'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.',
                    'Elit nisl in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet.'
                ]
            }
        ]
    }

    return (
        <main className="w-full px-4 sm:px-6 lg:px-8  bg-[#0F2846] min-h-screen pb-20">

            <section className='mb-10'>
                <NavBar></NavBar>
            </section >
            <div className="mx-auto max-w-4xl ">
                <p className="text-sm text-[#FADE2A] text-center mb-4">{data.updated}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">{data.title}</h1>

                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">{data.intro}</p>

                <div className="space-y-10">
                    {data.sections.map((s) => (
                        <section key={s.id} id={s.id} className="">
                            <h2 className="text-xl md:text-2xl font-semibold text-[#FADE2A]  mb-4">{s.heading}</h2>
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

export default Terms