import React from 'react'
import { useContext } from 'react';
import { SortProducts, SortTags } from '@/public/context';

import Image from "next/image";
import Arrow from '@/public/arrow.svg';

export default function Menu() {
    const {sortTags, setSortTags} = useContext(SortTags);
    const {sortBook, setSortBook} = useContext(SortProducts);
    let classArrowPrice = (sortBook[0]) ? 'arrowup' : 'arrowdown';
    let classArrowAuthor = (sortBook[1]) ? 'arrowup' : 'arrowdown';
    let classArrowDate = (sortBook[2]) ? 'arrowup' : 'arrowdown';

    const sortOfPrice = () => { setSortBook([+!sortBook[0], 0, 0]); }
    const sortOfAuthor = () => { setSortBook([0, +!sortBook[1], 0]); }
    const sortOfDate = () => { setSortBook([0, 0, +!sortBook[2]]); }
    const resetAllSort = () => { setSortTags(0); }

    return(
        <menu>
            <div className="block_menu">
                <li onClick={() => { sortOfPrice() }}>price</li><Image key={0} src={Arrow} alt="arrow" className={classArrowPrice}/>
                <li onClick={() => { sortOfAuthor() }} className="margin_left">author</li><Image key={1} src={Arrow} alt="arrow" className={classArrowAuthor}/>
                <li onClick={() => { sortOfDate() }} className="margin_left">date</li><Image key={2} src={Arrow} alt="arrow" className={classArrowDate}/>
            </div>
            <div className="block_menu">
                < select  className='field' value={sortTags} onChange={(e) => { setSortTags(e.target.value); }}>
                    <option value={0}>Tags</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="History">History</option>
                    <option value="Technology">Technology</option>
                    <option value="Biochemistry">Biochemistry</option>
                    <option value="Climate change">Climate change</option>
                </select>
                <li  onClick={() => { resetAllSort() }} className="margin_left">reset rules</li>
            </div>
        </menu>
    );
}