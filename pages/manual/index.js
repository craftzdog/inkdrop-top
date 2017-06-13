/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import ManualLayout from '../../components/manual-layout'
import ReactDisqusThread from 'react-disqus-thread'

export default class ManualPage extends Component {
  static title = 'Quick Start Guide'

  render () {
    const md = require('./index.md')
    return (
      <ManualLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />

        <ReactDisqusThread
          shortname='inkdrop-documentation'
          identifier='inkdrop-quick-start-guide'
          title={ ManualPage.title }
        />
      </ManualLayout>
    )
  }
}
