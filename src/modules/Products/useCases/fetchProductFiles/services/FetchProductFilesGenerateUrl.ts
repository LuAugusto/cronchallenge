import { paths, url } from '../../../../../commons/config/Contants'

export default class FetchProductFilesGenerateUrl {
  private paths: string[] = paths

  public generateUrl(path: string, url: string): string {
    return `${url}/${path}`
  }
  public urlDownloadfiles(): string[] {
    const urlPaths: string[] = []
    this.paths.forEach((path) => {
      urlPaths.push(this.generateUrl(path, url))
    })
    return urlPaths
  }
}
