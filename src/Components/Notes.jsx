import Card from "./Card";

export default function Notes() {
  let myarr = [
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
  ];
  return (
    <div className="grid grid-cols-4">
      {myarr.map((arr, index) => {
        return <Card key={index} arr={arr} />;
      })}
    </div>
  );
}
