/* eslint-disable react/prop-types */

import style from './style.module.css'

export function News ({title, author, content}) { 
  // before: props = data
  // after: {title, auhtor, content} = data

  // console.log(style)

  return (
    <div className={style.news} >
      <div className={style.header} >
        <h3 className={style.title}>
          {title || "Matéria sem Titulo"}
        </h3>
        <h4>Author: {author}</h4>
      </div>
      <p>{content}</p>
    </div>
  )
}