import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import Editor from '../../components/write/Editor';

function EditorContainer() {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => write);

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
}

export default EditorContainer;
