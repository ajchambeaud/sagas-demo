// @flow

import type { Character } from '../types';

type LoadPeople = { type: 'LOAD_PEOPLE' };
type LoadPeopleStarted = { type: 'LOAD_PEOPLE_STARTED' };
type LoadPeopleSuccess = { type: 'LOAD_PEOPLE_SUCCESS', payload: Array<Character> };
type LoadPeopleError = { type: 'LOAD_PEOPLE_ERROR', payload: { error: string } };

export type Action = LoadPeople | LoadPeopleStarted | LoadPeopleSuccess | LoadPeopleError;

export const loadPeople = (): LoadPeople => ({ type: 'LOAD_PEOPLE' });

export const loadPeopleStarted = (): LoadPeopleStarted => ({ type: 'LOAD_PEOPLE_STARTED' });

export const loadPeopleSuccess = (people: Array<Character>): LoadPeopleSuccess => ({
  type: 'LOAD_PEOPLE_SUCCESS',
  payload: people
});

export const loadPeopleError = (error: string): LoadPeopleError => ({ type: 'LOAD_PEOPLE_ERROR', payload: { error } });
