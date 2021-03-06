import { Option, None } from '../option'
import lift, { ArrayOps, ObjectOps, NumberOps, StringOps, DateOps } from '../lift'

declare module '../../wrapper' {
  interface ArrayOps<A> {
    foldRight: typeof foldRight
  }
}

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A>(this: ArrayOps<A>, startValue: number, func: (acc: number, value: A, index: number) => number): NumberOps

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A>(this: ArrayOps<A>, startValue: string, func: (acc: string, value: A, index: number) => string): StringOps

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A>(this: ArrayOps<A>, startValue: boolean, func: (acc: boolean, value: A, index: number) => boolean): boolean

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A, B>(this: ArrayOps<A>, startValue: Date, func: (acc: B, value: A, index: number) => Date): DateOps

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A, B>(this: ArrayOps<A>, startValue: B[], func: (acc: B[], value: A, index: number) => B[]): ArrayOps<B>

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A, B>(this: ArrayOps<A>, startValue: B, func: (acc: B, value: A, index: number) => B): ObjectOps<B>

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
export function foldRight<A>(this: ArrayOps<A>, startValue: any, func: (acc: any, value: A, index: number) => any): any {
  let arr = this.value(), result = startValue, i = arr.length

  while (i--) {
    result = func(result, arr[i], i)
  }

  return typeof result === 'boolean' ? result : lift(result)
}

ArrayOps.prototype.foldRight = foldRight
