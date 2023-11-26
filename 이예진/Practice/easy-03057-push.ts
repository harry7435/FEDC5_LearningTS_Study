/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #쉬움 #array

  ### 질문

  `Array.push`의 제네릭 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > GitHub에서 보기: https://tsch.js.org/3057/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Push<T extends unknown[], U extends unknown> = [...T, U];
