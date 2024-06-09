import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    const { ModelQueryBuilder } = this.app.container.resolveBinding('Adonis/Lucid/Database')

    ModelQueryBuilder.macro('filterByType', function(columnName: string, value: any) {
      return this.where(columnName, value)
    })
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
