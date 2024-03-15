import React from 'react'
import ArticleItem from './ArticleItem'

function ArticleList() {
  return (
    <ul className='article-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        
    </ul>
  )
}

export default ArticleList