import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

interface Props {
  onInsert: (text: string) => void;
}

const TodoInsert = ({ onInsert }: Props) => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
