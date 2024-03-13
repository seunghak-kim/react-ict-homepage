import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    // state 초깃값 설정 하기
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState((prevState) => {
              number: number + 1;
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
