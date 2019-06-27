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
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.className = "student-search";
  searchButton.textContent = "Search";
  searchInput.className = "student-search";
  searchInput.type = "search";
  searchInput.name = "searchInput";
  document.querySelector(".page-header").appendChild(searchInput);
  document.querySelector(".page-header").appendChild(searchButton);

  const createElement = element => {
    const tag = document.createElement(element);
    return tag;
  };

  const totalPages = list => {
    if (list.length % itemsPerPage > 0) {
      return list.length / itemsPerPage + 1;
    }
    return list.length / itemsPerPage;
  };

  const numberOfPages = totalPages(list);
  const div = createElement("div");
  const ul = createElement("ul");

  div.className = "pagination";
  document.querySelector(".page").appendChild(div);
  div.appendChild(ul);

  function pageNumbers(page) {
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
  }

  pageNumbers(numberOfPages);

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

  function searchList(searchInput, list) {
    let filter = searchInput.value.toLowerCase();
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("match");
      let h3 = list[i].getElementsByTagName("h3")[0];
      let name = h3.textContent;
      if (name.toLowerCase().indexOf(filter) > -1) {
        list[i].style.display = "";
      } else {
        list[i].style.display = "none";
      }
    }
  }

  searchInput.addEventListener("keyup", () => {
    if (searchInput.value.length <= 0) {
      showPage(list, 1);
    } else {
      searchList(searchInput, list);
    }
  });

  searchButton.addEventListener("click", event => {
    event.preventDefault();
    searchList(list, searchInput);
  });
}

appendPageLinks(list);
