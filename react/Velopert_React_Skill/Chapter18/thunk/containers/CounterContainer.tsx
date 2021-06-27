import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import { RootState } from '../modules';
import Counter from '../components/Counter';

interface ICounterContainerProps {
  number: number;
  increase: any;
  decrease: any;
}

function CounterContainer({ number, increase, decrease }: ICounterContainerProps) {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}

const mapStateToProps = (state: RootState) => ({ number: state.counter.number });

export default connect(mapStateToProps, { increase: increaseAsync, decrease: decreaseAsync })(CounterContainer);
