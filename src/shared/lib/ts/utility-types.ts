export type UnknownObject = Record<string, unknown> | { [key: string]: unknown }

export function objectKeys<Obj extends object>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[]
}
