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
  const totalPages = () => {
    if (list.length % 10 > 0) {
      return list.length / 10 + 1;
    }
    return list.length / 10;
  };
  const numberOfPages = totalPages();
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  div.className = "pagination";
  document.querySelector(".page").appendChild(div);
  div.appendChild(ul);
  for (let i = 1; i <= numberOfPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    ul.appendChild(li);
    a.textContent = i;
    li.appendChild(a);
    a.addEventListener("click", e => {
      if (e.target.textContent) {
        e.target.className = "active";
        showPage(list, e.target.textContent);
      }
    });
    if (i === 1) {
      showPage(list, i);
    }
  }
}

appendPageLinks(list);
/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.
