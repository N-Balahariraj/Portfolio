import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

export default function Article({menu}) {

  switch (menu) {
    case 1:
      return (<article><Home /></article>)

    case 2:
      return (<article><About /></article>)

    case 3:
      return (<article><Skills /></article>)

    case 4:
      return (<article><Project /></article>)

    case 5:
      return (<article><Contact /></article>)

    default:
      return (<article><Home /></article>)
  }

}
