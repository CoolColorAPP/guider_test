'use client'

import React from 'react'
import { useState, useMemo } from 'react';
import { SortProducts, SortTags } from '@/public/context';
import Header from '@/public/header'
import Menu from '@/public/menu'
import Section from '@/public/section'

export default function Home() {
  const [sortBook, setSortBook] = useState([0, 0, 0]);
  const valueSortBook = useMemo(() => ({sortBook, setSortBook}), [sortBook]);

  const [sortTags, setSortTags] = useState(0);
  const valueSortTags = useMemo(() => ({sortTags, setSortTags}), [sortTags]);

  return (
    <main>
      <Header/>
      <SortTags.Provider value={valueSortTags}>
      <SortProducts.Provider value={valueSortBook}>
        {useMemo( () => ( <Menu/> ), [] )}
        {useMemo( () => ( <Section/> ), [] )}
      </SortProducts.Provider>
      </SortTags.Provider>
    </main>
  );
}
