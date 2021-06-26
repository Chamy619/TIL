interface CounterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function Counter({ number, onIncrease, onDecrease }: CounterProps) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
