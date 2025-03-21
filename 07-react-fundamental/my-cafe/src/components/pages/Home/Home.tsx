import Button from "../../ui/Button/index";

const makanan = [
  {
    name: "nasi goreng",
    price: 10000,
  },
  {
    name: "steak",
    price: 20000,
  },
  {
    name: "nasi bakar",
    price: 15000,
  },
];

const Home = () => {
  const showButton = true;
  return (
    <main>
      <h1>Hello world</h1>
      {makanan.map((item, index) => (
        <h3 key={`makanan-${index}`}>{item.name}</h3>
      ))}
      {showButton ? <Button type="button">Button</Button> : <Button>Test</Button>}
      <Button type="submit">click me</Button>
    </main>
  );
};

export default Home;
