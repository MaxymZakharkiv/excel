import './scss/index.scss'
import { createStore } from './core/createStore'
import { indexStore } from './stores/index'
import { storage } from './helpers/storages'
import { initialState } from './stores/initialState'

import { Excel } from './components/excel/Excel'
import { Header } from './components/header/Header'
import { Toolbar } from './components/toolbar/Toolbar'
import { Formula } from './components/formula/Formula'
import { Table } from './components/table/Table'
import { Router } from './router/router'
import { DashboardPage } from './pages/DashboardPage'
import { ExcelPage } from './pages/ExcelPage'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage
})

// const store = createStore(indexStore, initialState)
//
// store.subscribe(state => {
//   storage('resize-table-state', state)
// })
//
// const excel = new Excel('#app', {
//   components: [Header, Toolbar, Formula, Table],
//   store
// })
//
// excel.render()
