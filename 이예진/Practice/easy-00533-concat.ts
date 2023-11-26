/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #쉬움 #array

  ### 질문

  JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

  예시:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > GitHub에서 보기: https://tsch.js.org/533/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// type Concat<T, U> = [...T, ...U] //ERROR A rest element type must be an array type.(2574)
// type Concat<T extends any[], U extends any[]> = [...T, ...U]; // 각각 배열임을 명시해줘야함

//참고
type Tuple = readonly unknown[]; /// readonly 여야 하나 ?

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];
