import React from 'react'
import { allPages } from '@/.contentlayer/generated';
import { Mdx } from '../components/mdx';
import { Header } from './header';


function Work() {
    const getPage = allPages.find(el => el.title === 'resume');

    if (getPage) {
        const { title, date, body } = getPage;
        return (
            <div className=" bg-gradient-to-tl from-cyan-900/0 via-cyan-900 to-cyan-900/0">
                <Header work={{ title, date }} />
                <div className="bg-amber-50 min-h-screen">

                    <article className="px-4 py-12 mx-auto prose lg:max-w-[100ch] prose-cyan prose-quoteless">
                        <Mdx code={body.code} />
                    </article>
                </div>
            </div>
        )
    }
    return (
        <div>
            <p>Page Not Available!</p>
        </div>
    )
}

export default Work;