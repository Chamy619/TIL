interface IProps {
  number: number;
  onIncrease: any;
  onDecrease: any;
}

export default function Counter({ number, onIncrease, onDecrease }: IProps) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
