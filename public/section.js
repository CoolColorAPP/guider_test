import { useContext } from 'react';
import { SortProducts, SortTags } from '@/public/context';
import { data } from './data';

export default function Section() {
    let sortData;
    const {sortTags, setSortTags} = useContext(SortTags); //сортировка по тегам
    const {sortBook, setSortBook} = useContext(SortProducts); //состояние флажков сортировки

    const sortUp = (data) => { return data.sort((a, b) => a.price > b.price ? 1 : -1); };
    const sortDown = (data) => { return data.sort((a, b) => a.price < b.price ? 1 : -1); };
    const sortOfTags = (data) => { return data.filter((element) => { return element.tags.includes(sortTags) } ); };

    if (sortTags) {
        let sortDataTags = sortOfTags(data); sortData = (sortBook[0]) ? sortUp(sortDataTags) : sortDown(sortDataTags) ;
    } else {
        sortData = (sortBook[0]) ? sortUp(data) : sortDown(data) ;
    };

    function renderBook(data) {
        let bookBoard = []; let totalPrice = 0;
        let id = 1;
    
            data.forEach(element => {
                const tag = element.tags;
                let tagButton = [];
    
                for (let i = 0; i < tag.length; i++) {
                    tagButton.push(<button onClick={() => setSortTags(tag[i])}>{tag[i]}</button>);
                };
    
                bookBoard.push(
                    <article key={id}>
                        <div className='board_book_data'>
                            <h2>{id} <span>{element.title}</span></h2>
                            <p>{element.author}</p>
                            <p>{element.date}</p>
                            <p>${element.price}</p>
                        </div>
                        <div className='board_book_footer'> {tagButton} </div>
                    </article>
                );
                totalPrice = totalPrice + element.price;
                id++;
            });
            bookBoard.push(<div className = 'total_price'><b>TOTAL: </b> ${totalPrice}</div>);
        return bookBoard;
    };

    const renderBookBoard = renderBook(sortData);

    return(
        <section>
            { renderBookBoard }
        </section>
    );
}


