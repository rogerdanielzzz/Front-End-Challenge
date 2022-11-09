# Star War Character APP

This project was developed for a tech challenge, it is an app that shows you the Star Wars Characters from Swampi.dev made it with React

- Deploy URL: https://starwar-seven.vercel.app/
- Github Repository URL: https://github.com/rogerdanielzzz/Front-End-Challengeapp/

## Project features

- A view where the user can see a list of the characters returned by the Api: Swampi.dev
- Pagination
- Search box to find Star wars Characters
- A Detail view to get more information about a specific character.

## Technologies

- React
- React-dom
- React-Router
- Redux
- Sass
- Bootstrap

## Api Endpoint

- https://swapi.dev/api/people/ID

- https://swapi.dev/api/people/?page=PAGE

- https://swapi.dev/api/people/?search=INPUT&page=PAGE

## Api Limitations

- does not provide an element id
- does not provide a Character Image
- Have not eager loading to get relationed information of other table
- The endpoint people/17 does not exist

## Solution

- A Json file was created with the name of all character provided by the api and added an id to improved the features of the app

- Can we get character image with the assigned id from the site: https://starwars-visualguide.com/assets/img/characters/ID.jpg

- The app made multiples get to the api to bring all the relationed info of a characte in the detail section

- Added a conditional that if id >=17 in that case id=id+1 to solve de endpoint people/17 problem

## Routes

- "/": The principal Route where the characters are rendered, In the Navbar appears as Characters
- "/character/:ID": Detail Route where all the information of a specific character defined by the ID params

## Reusable Components:

- PaginationBar: this component can render a pagination bar with all the page, it need to recive by props 3 arguments:

  - paginate: a callback function with the logic of the desired pagination
  - totalElements: How many elements need to be separed by pages
  - elementsPerPage: How many elements will be rendered per page

  **IMPORTANT** : This Component need a redux global state called "currentPage" this state is to set the current page of the app where we are

- Searchbar: This component is a search bar, need by props 2 arguments:
  - handle: a callback function with the logic of the desired search, this function is called onSubmit
  - toRoute: is a string to define a route where go when the submit is done, example "/" or "/character", this is because you call use the search on any section that you want but you could render the result in an specific section.

## Redux States: 


* charArr : where the results of get all characters will saved, the initial state is an empty array.

* charDetail: where the results of get detail of one character will saved, the initial state is an empty object.

* charFinded: where the results of a Search  will saved, the initial state is an empty array.

* currentPage: define which page of the App pagination will render, the initial state is 1;

* totalCharacters: is auxiliar state for the pagination, is the total characters that the api has in database, the initial state is 82;

* totalFinded: is auxiliar state for the pagination, is the total characters finded in a search, the initial state is 0; 

* lastSearch: is auxiliar state for the pagination of the results of a search, the api only bring 10 character by page so when it clicked another pages the call the endpoint of search with the lastSearch state and the new page, the initial value is null.

* isLoading: a state that save a boolean when the app need show a loading spinner when is true, the initia state is: false;

* idArr : save the id and name of all characters of the api to improve the user experience providing id for the characters, this state never change is a Json file.

# Contact:

 * Email: Roger.perezcol@gmail.com

 * Linkedin: https://www.linkedin.com/in/rogerperezcol/