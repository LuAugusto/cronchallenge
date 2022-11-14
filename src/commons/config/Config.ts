import dotenv from 'dotenv'

dotenv.config()

export default class Config {
  private static instance: Config

  public static getInstance(): Config {
    if (!this.instance) {
      this.instance = new Config()
    }
    return this.instance
  }

  public getValue(key: string): string {
    return process.env[key] || ''
  }

  public getValuesAsNumber(key: string): number | undefined {
    const asNumber = Number(process.env[key])
    return isNaN(asNumber) ? undefined : asNumber
  }
}
