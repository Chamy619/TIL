import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

interface IForm {
  name: string;
  username: string;
  [key: string]: string;
}

interface IArray {
  name: string;
  username: string;
  id: number;
}

interface IData {
  array: IArray[];
  uselessValue: null;
}

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState<IForm>({ name: '', username: '' });
  const [data, setData] = useState<IData>({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(
      produce((draft: IForm) => {
        draft[name] = value;
      }),
    );
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const info: IArray = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      const nextData = produce((draft) => {
        draft.array.push(info);
      });

      setData(nextData);
      setForm({ name: '', username: '' });
      nextId.current += 1;
    },
    [form],
  );

  const onRemove = useCallback((id: number) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1,
        );
      }),
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" value={form.username} placeholder="아이디" onChange={onChange} />
        <input name="name" value={form.name} placeholder="이름" onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li
              key={info.id}
              onClick={() => {
                onRemove(info.id);
              }}
            >
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
