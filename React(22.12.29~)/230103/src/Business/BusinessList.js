import BusinessItem from "./BusinessItem";

function BusinessList({ data }) {
  return (
    <ul className="business">
      {data.map((item) => (
        <BusinessItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default BusinessList;
