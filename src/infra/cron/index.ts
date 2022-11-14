import cron from 'node-cron'
import FetchProductFilesService from '../../modules/Products/useCases/fetchProductFiles/services/FetchProductFilesService'
import FetchProductFilesGenerateUrl from '../../modules/Products/useCases/fetchProductFiles/services/FetchProductFilesGenerateUrl'

const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl()
const fetchProductFilesService = new FetchProductFilesService()

const urls = fetchProductFilesGenerateUrl.urlDownloadfiles()

export function executeCron() {
  urls.forEach((url, index) => {
    const indexCalc = (index + 1) * 2
    cron.schedule(`*/${indexCalc} * * * *`, () => {
      console.log(`${url} -> ${index}`)
    })
  })
}
