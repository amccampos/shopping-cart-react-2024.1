interface QuantityProps {
  num?: number
  min?: number
  max?: number
  onInc?: (value: number) => void
  onDec?: (value: number) => void
}

export const Quantity = ({
    num = 1,
    min = 1,
    max = 10,
    onInc,
    onDec
  }: QuantityProps) => {

  function inc() {
    if (num < max) {
      onInc?.(num + 1)
    }
  }
  function dec() {
    if (num > min) {
      onDec?.(num - 1)
    }
  }

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      { num }
      <span style={{ margin: '0 5px' }}>
        <button onClick={ inc }>+</button>
        <button onClick={ dec }>-</button>
      </span>
    </span>
  )
}