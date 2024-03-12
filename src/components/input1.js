const Input1 = (props) => {
  const { insertTodo, input, inputRef, handleChangeText } = props;
  return (
    <>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          value={input}
          ref={inputRef}
          id="work"
          placeholder="오늘의 할일"
          onChange={handleChangeText}
        />
        <input type="submit" vlaue="Create" />
      </form>
    </>
  );
};

export default Input1;
