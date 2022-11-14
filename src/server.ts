import App from './infra/app'
import { API_PORT } from './commons/config/Contants'
import Config from './commons/config/Config'

const config = Config.getInstance()

const app = App.getInstance()
const port = <number>config.getValuesAsNumber(API_PORT)

app.getApp().listen(port, () => console.log(`Server is running on http://localhost:${port}`))
