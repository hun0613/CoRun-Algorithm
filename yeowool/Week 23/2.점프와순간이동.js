// [PGS] 점프와 순간 이동/ leve2
// 난이도 :  level 2
// 풀이시간 :
// 점수 : +3

/*
문제
OO 연구소는 한 번에 K 칸을 앞으로 점프하거나, 
(현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 수 있는 특수한 기능을 가진 아이언 슈트를 개발하여 판매하고 있습니다. 
이 아이언 슈트는 건전지로 작동되는데, 순간이동을 하면 건전지 사용량이 줄지 않지만,
 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다. 
 그러므로 아이언 슈트를 착용하고 이동할 때는 순간 이동을 하는 것이 더 효율적입니다. 아이언 슈트 구매자는 아이언 슈트를 착용하고
  거리가 N 만큼 떨어져 있는 장소로 가려고 합니다. 단, 건전지 사용량을 줄이기 위해 점프로 이동하는 것은 최소로 하려고 합니다.
   아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 
   사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수를 만들어 주세요.

예를 들어 거리가 5만큼 떨어져 있는 장소로 가려고 합니다.
아이언 슈트를 입고 거리가 5만큼 떨어져 있는 장소로 갈 수 있는 경우의 수는 여러 가지입니다.

처음 위치 0 에서 5 칸을 앞으로 점프하면 바로 도착하지만, 건전지 사용량이 5 만큼 듭니다.
처음 위치 0 에서 2 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 2) x 2에 해당하는 위치로 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 3 만큼 듭니다.
처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동됩니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 2) x 2 만큼 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 2 만큼 듭니다.
위의 3가지 경우 거리가 5만큼 떨어져 있는 장소로 가기 위해서 3번째 경우가 건전지 사용량이 가장 적으므로 답은 2가 됩니다.

제한 사항
숫자 N: 1 이상 10억 이하의 자연수
숫자 K: 1 이상의 자연수
입출력 예
N	result
5	2
6	2
5000	5
입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.

입출력 예 #2
처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동합니다. 이때 1 칸을 앞으로 점프하면 위치3으로 이동합니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 3) x 2 이동할 수 있으므로 위치 6에 도착합니다. 이 경우가 건전지 사용량이 가장 적으므로 2를 반환해주면 됩니다.

입출력 예 #3
위와 같은 방식으로 합니다.
*/

/*
< 의사코드 >
while문으로 돌면서 n이 0이 될 때까지 count를 올려주자
2로 나누어서 0이 아닐 경우 건전지를 사용해야 하므로 n에서 -1을 하고 count를 올린다


*/
function solution(n) {
  let count = 0;

  while (n !== 0) {
    n % 2 === 0 ? (n = n / 2) : count++;
    n = n - 1;
  }
  return count;
}

/*
 테스트 1
입력값 〉	5
기댓값 〉	2
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	6
기댓값 〉	2
실행 결과 〉	실행한 결괏값 0이 기댓값 2과 다릅니다.
테스트 3
입력값 〉	5000
기댓값 〉	5
실행 결과 〉	테스트를 통과하였습니다.
 
삼항연산자로 바로 하니까 헷갈린
*/

function solution(n) {
  let count = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      count++;
    }
  }
  return count;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.03ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.03ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.7MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.5MB)
테스트 10 〉	통과 (0.03ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.5MB)
테스트 12 〉	통과 (0.05ms, 33.6MB)
테스트 13 〉	통과 (0.03ms, 33.4MB)
테스트 14 〉	통과 (0.03ms, 33.4MB)
테스트 15 〉	통과 (0.03ms, 33.5MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.05ms, 33.5MB)
테스트 18 〉	통과 (0.03ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.03ms, 33.4MB)
테스트 10 〉	통과 (0.03ms, 33.3MB)
 
*/
