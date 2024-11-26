import { articleData } from '@/data/data'
import React from 'react'
import { ArticleCard } from './ArticleCard'

export const Article = () => {
  return (
    <div className='pt-20 pb-20 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            {/* Heading */}
            <h1 data-aos='fade-right' className='text-4xl md:text-5xl text-gray-900 font-bold'>Latest Articles</h1>
            {/* Define Grid System */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {/* Article Mapping */}
                {articleData.map((article,i)=>{
                    return <div key={article.id} data-aos='zoom-out' data-aos-anchor-placement='top-center'
                    data-aos-delay={`${1 * 150}`}>
                        <ArticleCard article={article} />
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
