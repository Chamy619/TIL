import React from 'react';
import { useState } from 'react';

interface INames {
  id: number;
  text: string;
}

const IteratorSample = () => {
  const [names, setNames] = useState<INames[]>([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [nextId, setNextId] = useState<number>(5);
  const [inputText, setInputText] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onClick = () => {
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id: number) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));
  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IteratorSample;
