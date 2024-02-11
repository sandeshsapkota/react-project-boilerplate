const SecondComponent = (props: { count: number; setCount: () => void }) => {
  const { count, setCount } = props;
  return (
    <div className="flex justify-between items-center p-8 bg-black text-white rounded-xl">
      <button onClick={setCount}>second</button>
      <span>{count}</span>
    </div>
  );
};

export default SecondComponent;
