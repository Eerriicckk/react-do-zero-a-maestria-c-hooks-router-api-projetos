import { useCounterContext } from '../hooks/useCounterContext'

const Page2 = () => {
  const { counter } = useCounterContext()
  return (
    <div>
      <h1>
        Page2
      </h1>
      <br />
      {counter}
    </div>
  )
}

export default Page2