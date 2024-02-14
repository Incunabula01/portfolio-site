import React from 'react'
import { allPages } from '@/.contentlayer/generated';
import { Mdx } from '../components/mdx';
import { Header } from './header';


function Work() {
    const { title, date, body } = allPages[0];
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Header work={{ title, date }} />
            <div className="bg-zinc-50 min-h-screen">

                <article className="px-4 py-12 mx-auto prose lg:max-w-[100ch] prose-zinc prose-quoteless">
                    <Mdx code={body.code} />
                </article>
            </div>
        </div>
    )
}

export default Work;