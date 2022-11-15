import cron from 'node-cron'
import { importDataToDatabase } from '../../modules/Products/useCases/fetchProductFiles/services/ImportDataToDatabaseUseCase'
import Config from '../../commons/config/Config'
import { TIME_CRON } from '../../commons/config/Contants'

const config = Config.getInstance()

const time = config.getValuesAsNumber(TIME_CRON)

export async function FetchFiles() {
  //cron.schedule(`*/${time} * * * *`, async () => {
  await importDataToDatabase.execute()
  //})
}
