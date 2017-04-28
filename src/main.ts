import {
  Validation
} from 'fp-ts/lib/Validation';

import {
  array,
  validation,
} from 'fp-ts';

export function pouet(
  xs: number[],
  f: (x: number) => Validation<string[], number>
): void {
  array.traverse(validation. .getApplicativeS(array))(f, xs); // Hanging due to this space!
}