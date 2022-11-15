import ImportDataToDatabase from './ImportDataToDatabase'
import ProductRepo from '../../../repo/ProductRepo'
import HistoryImports from '../../../../../infra/mongodb/repo/HistoryImports'

const importDataToDatabase = new ImportDataToDatabase(new ProductRepo(), new HistoryImports())

export { importDataToDatabase }
