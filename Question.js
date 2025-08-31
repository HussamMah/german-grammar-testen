export default function Question({ q, onAnswer }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <p>{q.text}</p>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => onAnswer(opt)} style={{ display: 'block', margin: '5px 0' }}>
          {opt}
        </button>
      ))}
    </div>
  );
}