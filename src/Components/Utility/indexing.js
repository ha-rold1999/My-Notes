const handleTab = (event) => {
  if (event.keyCode == 9) {
    event.preventDefault();
    const { selectionStart, selectionEnd } = event.target;

    const textarea = event.target;
    const newText =
      textarea.value.substring(0, selectionStart) +
      "\t" +
      textarea.value.substring(selectionEnd);

    textarea.value = newText;
    textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
  }
};

export default handleTab;
