import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers: number[]) => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>('');

  const myRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  }, []);
  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber('');
    myRef.current?.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={myRef} type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <b>평균값:</b> {avg}
    </div>
  );
};

export default Average;
