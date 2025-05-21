export const str = "hello"
export const arr = ["kiwi", "apple", "tomato"]
//함수 hap파라미터 변수들은 호출될 때 초기화 된다.
//값에 의한 호출이다.
export const hap = (a,b) => {
  return a+b
}// end of hap
export class Sonata{
  constructor(){ // 생성자 함수
    this.wheelNum = 4
    this.speed = 0
    this.carColor = "red"
  }
  speedUp = () => {
    this.speed = this.speed + 1
  }
}// end of Sonata