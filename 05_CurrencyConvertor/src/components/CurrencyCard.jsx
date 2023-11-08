function CurrencyCard() {
  return (
    <div className="bg-gray-200 rounded-lg p-5">
      <input
        type="text"
        maxLength={8}
        className="w-24 h-10 rounded-md border-gray-300 border p-2 mr-2"
      />
      <select className="w-24 h-10 rounded-md border-gray-300 border p-2">
        <option value="option1">USD</option>
      </select>
    </div>
  );
}

export default CurrencyCard;
