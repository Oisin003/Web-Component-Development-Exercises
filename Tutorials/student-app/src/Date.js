function DateComponent() {
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString();

  return (
    <div>
      <p>Hello <b>World</b></p>
      <p>Tomorrow is: {tomorrow}</p>
    </div>
  );
}

export default DateComponent;
