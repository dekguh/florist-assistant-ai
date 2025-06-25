import { createServer } from 'miragejs'

export const mirageServer = ({ environment = 'test' }) => createServer({
  environment,
  routes() {
    this.namespace = 'api'

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