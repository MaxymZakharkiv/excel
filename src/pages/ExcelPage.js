import { Page } from '../router/Page'
import { createStore } from '../core/createStore'
import { indexStore } from '../stores'
import { initialState } from '../stores/initialState'
import { storage } from '../helpers/storages'
import { Excel } from '../components/excel/Excel'
import { Header } from '../components/header/Header'
import { Toolbar } from '../components/toolbar/Toolbar'
import { Formula } from '../components/formula/Formula'
import { Table } from '../components/table/Table'

export class ExcelPage extends Page {
  getRoot() {
    console.log(this.params)
    const store = createStore(indexStore, initialState)

    store.subscribe(state => {
      storage('resize-table-state', state)
    })

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store
    })

    return this.excel.getOptions()
  }
  afterRender() {
    this.excel.init()
  }
  destroy() {
    this.excel.destroy()
  }
}
