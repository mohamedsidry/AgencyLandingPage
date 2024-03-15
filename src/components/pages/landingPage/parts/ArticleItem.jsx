import React from 'react'
import articleImg from './../../../../assets/hero-img.jpg'
import ReadMoreBtn from './ReadMoreBtn'

function ArticleItem() {
  return (
    <li className='single-article flex flex-col items-center justify-center gap-2'>
        <img className='article-img rounded-lg' src={articleImg} alt="" />
        <div className="article-info flex items-center justify-between w-full px-2">
            <div className="article-owner flex items-center justify-center gap-2">
                <img className='w-10 h-10 bg-cover bg-center rounded-full' src={articleImg} alt="" />
                <h5 className='article-writer'>Mohamed Sid </h5>
            </div>

            <div className="article-date flex items-center justify-center gap-2">
                <img className='w-10 h-10 bg-cover bg-center rounded-full' src={articleImg} alt="" />
                <h5 className='article-writer'>Mar 15, 2024</h5>
            </div>

        </div>
        
        <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora.</p>

        <ReadMoreBtn/>
        

    </li>
  )
}

export default ArticleItem