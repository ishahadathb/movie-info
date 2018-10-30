import React from 'react';
import {shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../Show-card';

xtest('Search renders correctly', () =>{
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

xtest('Search should render correct amount show', ()=> {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render right amount of shows based on search term", ()=>{
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });

  const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase()));
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});