import React from 'react'
import ArticleList from '../parts/ArticleList'
import ViewMoreBtn from '../parts/ViewMoreBtn'

function Blog() {
  return (
    <section className='blog-section relative bg-BrightBlue text-center p-10'>
        <div className="services-contnet flex flex-col gap-5">
            <p>BLOG</p>
            <h2 className='text-3xl font-bold'>Browse articles</h2>
            <ArticleList/>
            <ViewMoreBtn/>
        </div>
    </section>
  )
}

export default Blog