/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #쉬움 #object-keys

  ### 질문

  배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

  예시:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > GitHub에서 보기: https://tsch.js.org/11/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// T[number]는 T의 모든 요소를 유니언으로 반환한다.

type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P;
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, "2", 3, "4", sym1] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<
    Equal<
      //[1,2,3,4]
      TupleToObject<typeof tupleNumber>,
      { 1: 1; 2: 2; 3: 3; 4: 4 }
    >
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleSymbol>,
      { [sym1]: typeof sym1; [sym2]: typeof sym2 }
    >
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleMix>,
      {
        1: 1;
        "2": "2";
        3: 3;
        "4": "4";
        [sym1]: typeof sym1;
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
// 에러가발생하는 이유는 배열과 객체는 프로퍼티 키로 사용할 수 없기 때문이다.

//number

/* _____________ 다음 단계 _____________ */
/*
    > 정답 공유하기: https://tsch.js.org/11/answer/ko
    > 정답 보기: https://tsch.js.org/11/solutions
    > 다른 문제들: https://tsch.js.org/ko
  */