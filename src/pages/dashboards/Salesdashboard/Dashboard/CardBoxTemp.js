// CardBox.js

export default function CardBox({ title, value, sub, color }) {
  return (
    <div className="col-md-3">
      <div className="card p-3 shadow-sm">
        <div className={`icon ${color}`}></div>
        <h6>{title}</h6>
        <h4>{value}</h4>
        <small>{sub}</small>
      </div>
    </div>
  );
}