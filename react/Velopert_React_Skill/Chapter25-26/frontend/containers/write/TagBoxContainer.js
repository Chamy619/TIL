import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/write';

function TagBoxContainer() {
  const dispatch = useDispatch();
  const tags = useSelector(({ write }) => write.tags);

  const onChangeTags = (nextTags) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
}

export default TagBoxContainer;
