/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const list = document.querySelectorAll(".student-item");
const itemsPerPage = 10;

function showPage(list, page) {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

function appendPageLinks(list) {
  const createElement = element => {
    const tag = document.createElement(element);
    return tag;
  };
  const totalPages = () => {
    if (list.length % itemsPerPage > 0) {
      return list.length / itemsPerPage + 1;
    }
    return list.length / itemsPerPage;
  };

  const numberOfPages = totalPages();
  const div = createElement("div");
  const ul = createElement("ul");

  div.className = "pagination";
  document.querySelector(".page").appendChild(div);
  div.appendChild(ul);
  for (let i = 1; i <= numberOfPages; i++) {
    const li = createElement("li");
    const a = createElement("a");
    a.href = "#";
    ul.appendChild(li);
    a.textContent = i;
    li.appendChild(a);
    if (i === 1) {
      showPage(list, i);
    }
  }
  ul.addEventListener("click", e => {
    e.preventDefault();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
      if (a[i].textContent === e.target.textContent) {
        e.target.className = "active";
        showPage(list, e.target.textContent);
      }
    }
  });
}
appendPageLinks(list);
