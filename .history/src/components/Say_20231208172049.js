import { useState } from "react";

const Say = () => {
  const [message, SetMessage] = useState(""); //초기값 설정
  const onClickEnter = () => SetMessage("안녕하세요 ! ");
  const onClickLeave = () => SetMessage("안녕히 가세요 !");
};
