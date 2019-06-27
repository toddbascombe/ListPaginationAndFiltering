/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//select all students
const list = document.querySelectorAll(".student-item");
//students per page
const itemsPerPage = 10;

//display the students
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

//create element helper function
const createElement = element => {
  const tag = document.createElement(element);
  return tag;
};

//return how many pagination links
const totalPages = list => {
  if (list.length % itemsPerPage > 0) {
    return list.length / itemsPerPage + 1;
  }
  return list.length / itemsPerPage;
};

//creates pagination links function
function appendPageLinks(list) {
  //number of pages returned from totalPages()
  const numberOfPages = totalPages(list);
  //create a div element to contain the pagination links
  const div = createElement("div");
  //create a ul for the listed pagination links
  const ul = createElement("ul");
  //add a class name to the div
  div.className = "pagination";
  //append the div to the div with the class of page
  document.querySelector(".page").appendChild(div);
  //append the ul element to the div
  div.appendChild(ul);
  //take the number of pages and create the links
  function pageNumbers(page) {
    for (let i = 1; i <= page; i++) {
      const li = createElement("li");
      const a = createElement("a");
      a.href = "#";
      li.className = "links";
      ul.appendChild(li);
      a.textContent = i;
      li.appendChild(a);
    }
  }

  //show the default 1st page of students
  showPage(list, 1);
  //show the default number of page links
  pageNumbers(numberOfPages);

  //add event listener for the clisk of the pagination links
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
