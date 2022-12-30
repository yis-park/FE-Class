const Ex4_const = () => {
  const coffee = "menu";
  const latte = "카페라떼";
  const size = "tall";
  const price = 4000;

  const title = { backgroundColor: "#FBC252", color: "white", padding: 5 };
  const listStyle = {
    listStyle: "none",
    backgroundColor: "#FFB100",
    color: "#333",
    padding: 4,
    lineHeight: 1.6,
  };

  return (
    <>
      <h2 style={title}>{coffee}</h2>
      <ul>
        <li style={listStyle}>주문 커피: {latte}</li>
        <li style={listStyle}>가격: {size}</li>
        <li style={listStyle}>사이즈: {price}</li>
      </ul>
    </>
  );
};

export default Ex4_const;
