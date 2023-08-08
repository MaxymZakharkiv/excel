import './scss/index.scss'
import { createStore } from './core/createStore'
import { indexStore } from './stores/index'

import { Excel } from './components/excel/Excel'
import { Header } from './components/header/Header'
import { Toolbar } from './components/toolbar/Toolbar'
import { Formula } from './components/formula/Formula'
import { Table } from './components/table/Table'

const store = createStore(indexStore, {
  title: 'title'
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()
