export default function profilelayout({ children }) {
  return (
    <div>
      <h1>Proile Page navbar</h1>
      <div className="flex gap-7">
        <div>
          <h1>profile sidebar</h1>
        </div>
        <div>{children}</div>
      </div>
      <h1>Proile Page footer</h1>
    </div>
  );
}
