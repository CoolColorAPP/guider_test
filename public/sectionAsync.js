import { useContext } from 'react';
import { SortProducts, Refresh } from '@/public/context';

function renderBook(data) {
    let bookBoard; let totalPrice = 0;
    const sectionBook = document.querySelector('section');
    let id = 1;
        data.forEach(element => {
            const tag = element.tags;
            let tagButton = '';

            for (let i = 0; i < tag.length; i++) {
                tagButton = tagButton + `<button>${tag[i]}</button>`;
            };

            bookBoard =
                `
                    <div class="board_book_data">
                        <h2>${id} <span>${element.title}</span></h2>
                        <p>${element.author}</p>
                        <p>${element.date}</p>
                        <p>$${element.price}</p>
                    </div>
                    <div class="board_book_footer">
                        ${tagButton}
                    </div>
                `
            ;

            totalPrice = totalPrice + element.price;

            let div = document.createElement('article');
            div.innerHTML = bookBoard;
            sectionBook.append(div);
            id++;
        });

    let price = document.createElement('div');
    price.className = 'total_price';
    price.innerHTML = `Total price: ${totalPrice}`;
    sectionBook.append(price);
};

function sortUp(data) {
    return data.sort((a, b) => a.price > b.price ? 1 : -1);
};

function sortDown(data) {
    return data.sort((a, b) => a.price < b.price ? 1 : -1);
};

export default function Section() {
    const {refresh, setRefresh} = useContext(Refresh); //тупо для обновления
    const reDraw = () => setRefresh(Math.random()); //тупо для обновления
    const {sortBook, setSortBook} = useContext(SortProducts); //состояние флажков сортировки

    async function BookData() {
        try {
          const response = await fetch('data.json');
          if (!response.ok) {
              throw new Error("Ошибка");
          }
          const data = await response.json();
          return data
        } catch (error) {
          console.error(error);
        }
    }

    async function page() {
        const data = await BookData();

        // sort price
        let sortData = {};
        if (sortBook[0]) { sortData = sortUp(data); } else { sortData = sortDown(data); };
        console.log(sortData);
        renderBook(sortData);
    }
    page();
}


