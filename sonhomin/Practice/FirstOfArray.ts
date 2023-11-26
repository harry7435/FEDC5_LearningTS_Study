/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #쉬움 #array

  ### 질문

  배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

  예시:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > GitHub에서 보기: https://tsch.js.org/14/ko
*/

// T extends Array<infer U> => 하면 참으로 추론된다.
/**
 * type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never
 * 에서 infer A는 T의 첫번째 요소를 추론하고, infer rest는 나머지 요소를 추론한다.
 * T가 빈배열이면 A는 never가 되고, rest는 빈배열이 된다.
 *
 * 가장 논리적으로 작성한 타이핑이다.
 */

/* _____________ 여기에 코드 입력 _____________ */

type First<T extends any[]> =
  T["length"] extends 0 ? never : T[0];

// 사실상 야매코드이다.

/* _____________ 테스트 케이스 _____________ */
import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<
    Equal<
      First<[() => 123, { a: string }]>,
      () => 123
    >
  >,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/14/answer/ko
  > 정답 보기: https://tsch.js.org/14/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
