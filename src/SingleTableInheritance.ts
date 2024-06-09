import type { LucidModel, LucidRow } from '@ioc:Adonis/Lucid/Orm'
import type { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers'

export function SingleTableInheritance<TModel extends NormalizeConstructor<LucidModel>>(superclass: TModel) {
  return class extends superclass {
    public static readonly singleTableTypeField: string
    public static readonly singleTableSubClasses: Record<string, () => Promise<LucidModel>>

    public static boot() {
      super.boot()

      this.before('create', (model: LucidRow) => {
        model[this.singleTableTypeField] = this.name
      })
    }

    public static getSubClass(type: string) {
      return this.singleTableSubClasses[type]
    }
  }
}
