/**
 * 통과 여부 : 통과
 * 시간 : 30분
 * 점수 : + 10
 * 틀렸던 이유 : 약수 구할 때 시간 초과
 * 바꾼 것 -> 거듭제곱 활용함
 */

/**
 *
 * @param {*} number 기사단원의 수
 * @param {*} limit 공격력의 제한수치
 * @param {*} power 기사가 사용할 무기의 공격력
 * @returns 무기를 모두 만들기 위해 필요한 철의 무게
 */
function solution(number, limit, power) {
  let arr = [];
  for (let j = 1; j <= number; j++) {
    let result = divisor(j);
    if (result > limit) {
      arr.push(power);
    } else {
      arr.push(result);
    }
  }
  return arr.reduce((acc, cur) => (acc += cur), 0);
}

function divisor(number) {
  let count = 0;
  // 가장 큰 약수는 number의 절반이다
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) {
      count++;
      if (i * i < number) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution(10, 3, 2));
console.log(divisor(10));

/**
 * 함수 2번 호출 하는 거 1번으로 줄임
 * 테스트 1 〉	통과 (160.48ms, 35.9MB)
테스트 2 〉	통과 (13.37ms, 35.4MB)
테스트 3 〉	통과 (7.30ms, 35.3MB)
테스트 4 〉	통과 (16.92ms, 35.2MB)
테스트 5 〉	통과 (2.99ms, 35.4MB)
테스트 6 〉	통과 (202.66ms, 35.9MB)
테스트 7 〉	통과 (20.87ms, 35.4MB)
테스트 8 〉	통과 (6.94ms, 35.4MB)
테스트 9 〉	통과 (180.17ms, 35.9MB)
테스트 10 〉	통과 (4.61ms, 35.3MB)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
테스트 16 〉	실패 (시간 초과)
테스트 17 〉	통과 (0.10ms, 33.5MB)
테스트 18 〉	실패 (시간 초과)
테스트 19 〉	통과 (11.30ms, 35.3MB)
테스트 20 〉	통과 (11.71ms, 35.4MB)
테스트 21 〉	통과 (0.06ms, 33.6MB)
테스트 22 〉	통과 (0.11ms, 33.5MB)
테스트 23 〉	통과 (0.13ms, 33.5MB)
테스트 24 〉	실패 (시간 초과)
테스트 25 〉	실패 (시간 초과)
테스트 26 〉	통과 (4.09ms, 35.4MB)
테스트 27 〉	통과 (4.58ms, 35.5MB)
 */
/**
 * 아악 시간 초과
 * 테스트 1 〉	통과 (348.74ms, 35.5MB)
테스트 2 〉	통과 (23.12ms, 35.4MB)
테스트 3 〉	통과 (8.16ms, 35.4MB)
테스트 4 〉	통과 (37.72ms, 35.5MB)
테스트 5 〉	통과 (4.84ms, 35.3MB)
테스트 6 〉	통과 (384.86ms, 35.5MB)
테스트 7 〉	통과 (23.67ms, 35.3MB)
테스트 8 〉	통과 (12.38ms, 35.4MB)
테스트 9 〉	통과 (322.52ms, 35.6MB)
테스트 10 〉	통과 (8.30ms, 35.4MB)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
테스트 16 〉	실패 (시간 초과)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	실패 (시간 초과)
테스트 19 〉	통과 (21.81ms, 35.4MB)
테스트 20 〉	통과 (19.65ms, 35.4MB)
테스트 21 〉	통과 (0.09ms, 33.6MB)
테스트 22 〉	통과 (0.07ms, 33.5MB)
테스트 23 〉	통과 (0.14ms, 33.5MB)
테스트 24 〉	실패 (시간 초과)
테스트 25 〉	실패 (시간 초과)
테스트 26 〉	통과 (7.01ms, 35.4MB)
테스트 27 〉	통과 (5.23ms, 35.3MB)
 */
