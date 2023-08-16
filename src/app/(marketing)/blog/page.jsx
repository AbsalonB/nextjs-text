export const metadata = {
    title: "Blog",
    description: "Blog",
}

import Title from '@/components/pagescomponents/Title'
import Link from 'next/link'
import React from 'react'

export const POST = [
    {
        id:1,
        title:"Post 1",
        slug:"post-1",
        content:"Lorem ipsumndolor sit amet consectetur adipisicing elit. Quisquam, vluptatum."
    },
    {
        id:2,
        title:"Post 2",
        slug:"post-2",
        content:"Lorem ipsumndolor sit amet consectetur adipisicing elit. Quisquam, vluptatum."
    },
    {
        id:3,
        title:"Post 3",
        slug:"post-3",
        content:"Lorem ipsumndolor sit amet consectetur adipisicing elit. Quisquam, vluptatum."
    },
]

function Blog() {
    return (
        <>
            <Title title="Blog"/>
            <main className="container mx-auto">
                <div className="grid gap-5">
                    {
                        POST.map((post)=>(
                            <div key={post.id} className='shadow rounded-md p-5'>
                                <h2 className='text-2xl font-bold'>{post.title}</h2>
                                <Link href={`/blog/${post.slug}`}>More information</Link>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Blog
