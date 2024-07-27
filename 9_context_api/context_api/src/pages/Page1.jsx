import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter';
const Page1 = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Page1</h1>
      <p>Contador:{counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Page1