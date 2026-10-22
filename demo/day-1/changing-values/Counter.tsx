export default function Counter() {
  let count = 0

  function increaseCount() {
    count += 1
    console.log('Count after clicking:', count)
  }

  return (
    <button className="counter" onClick={increaseCount}>
      Count is {count}
    </button>
  )
}
