import { SyncServer } from '../src'

const server = new SyncServer({
  path: '/sync',
})

server.listen(3001, () => {
  console.log('Server started! in port %d', 3001)
})
