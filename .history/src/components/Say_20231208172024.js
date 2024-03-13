import { useState } from "react";

const Say() => {
    const [message, SetMessage] = useState(''); //초기값 설정 
    const onClickEnter = () => SetMessage('안녕하세요 ! ');
    
}
