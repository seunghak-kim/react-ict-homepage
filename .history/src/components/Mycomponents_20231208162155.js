const MyComponents = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
    </div>
    children 값은 {children}
    입니다.
  );
};
