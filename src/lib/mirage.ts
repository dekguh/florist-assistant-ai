 
 
import { createServer } from 'miragejs'

export const mirageServer = ({ environment = 'test' }) => createServer({
  environment,
  routes() {
    this.urlPrefix = 'http://localhost:5173/'
    this.namespace = 'api'
    this.passthrough('http://localhost:5678/**')

    this.post('/history-message/create', (schema, request) => {
      return schema.db.historyMessage.insert(JSON.parse(request.requestBody))
    })

    this.get('/history-message/search', (schema) => {
      return schema.db.historyMessage
    })
  },

  seeds(server) {
    server.db.loadData({
      historyMessage: []
    })
  },
})