import '@ioc:Adonis/Lucid/Orm'

declare module '@ioc:Adonis/Lucid/Orm' {
  interface ModelQueryBuilderContract<
    Model extends LucidModel,
    Result = InstanceType<Model>
  > {
    filterByType(columnName: string, value: any): this
  }
}
