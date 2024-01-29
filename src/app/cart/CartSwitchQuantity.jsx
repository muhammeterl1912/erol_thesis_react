export default function CartSwitchQuantity({onIncrement, onDecrement, value}) {
  return (
    <div>
        <div className="join join-vertical lg:join-horizontal">
            <button type="button" onClick={onDecrement} className="btn join-item">-</button>
            <span className="px-4 py-3">{value}</span>
            <button type="button" onClick={onIncrement} className="btn join-item">+</button>
        </div>
    </div>
  );
}
