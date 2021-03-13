function get_current_options_index(ele) {
  for (let i = 0, len = ele.options.length; i < len; i++) {
    if (ele.options[i].selected) {
      return i;
    }
  }
}

function save(item, input) {
  const index = get_current_options_index(item);
  const quantity = Number.parseInt(input.value) || 0;

  const data = { index, quantity };

  localStorage.setItem("data", JSON.stringify(data));
}

function restore(item, input) {
  const get = localStorage.getItem("data");

  if (get) {
    const { index, quantity } = JSON.parse(get);

    item.options[index].selected = true;
    input.value = quantity;
    input.oninput();
  }
}

function load() {
  const item = document.querySelector("select");
  const input = document.querySelector(".quantity > input");

  item.addEventListener("input", save.bind(window, item, input), false);
  input.addEventListener("input", save.bind(window, item, input), false);

  restore(item, input);
  window.removeEventListener("load", load);
}

window.addEventListener("load", load, false);
