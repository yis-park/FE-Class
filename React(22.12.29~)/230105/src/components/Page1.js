function Page1({ data, changeInput, onNext }) {
  const { userName, age, addr, tel } = data;
  return (
    <>
      <p>
        <label>이름: </label>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={changeInput}
        />
      </p>
      <p>
        <label>나이: </label>
        <input type="text" value={age} name="age" onChange={changeInput} />
      </p>
      <p>
        <label>주소: </label>
        <input type="text" value={addr} name="addr" onChange={changeInput} />
      </p>
      <p>
        <label>연락처: </label>
        <input type="text" value={tel} name="tel" onChange={changeInput} />
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
}

export default Page1;
