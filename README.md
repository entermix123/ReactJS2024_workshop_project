# ReactJS2024_workshop_project
SoftUni React Course Project

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add student practice server
- [x] Add base Vite react project as client
- [x] cleanup Client
- [x] Add project resouces
- [x] Convert html to jsx
- [x] Separate HTML into components

## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in navigation

## 3. Create Sevice Layer
- [x] Service Layer Architecture discussion
- [x] Abstract requester
- [x] Add games api
- [x] Preseed Practice server

## 4. Page Implementations
- [x] Game List
- [x] Game Details 
  - [x] Create Details Lnk
  - [x] Create Details Route
  - [x] API function - get one game
- [x] Home - latest games

## 5. Comments
- [x] Create serive for nested resource 'comments'
- [x] Post comment to server
- [x] Reade comments from server
- [x] Add comments in the component
- [x] Clear form

## 6. API Hooks
- [x] GameAPI Hooks
- [x] Form Hook
- [ ] Comments Hooks

## 7. Authentication
- [x] Auth API
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth API hook
  - [x] Login
  - [x] Register
  - [x] Logout
  - [ ] Authorized Requests
- [x] Auth state & context
- [x] Token management
- [x] Login
- [x] Register
  - [x] Add form validation
- [x] Logout

## 8. UI Implementation
- [x] Dynamic Navigation
- [ ] Create Game
  - [x] API function
  - [x] Hook
  - [x] Latest Games

## Notes
Latest Games URL 'http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3'
Preseed data on server.js on 1341 row - add games, users and whatever needed
  
## 9. Refactoring
- [x] Extract auth state from App component
- [x] Persist auth state
- [x] Refatured comments 
- [x] Refactured comments with useReducer
- [x] Show edit and delete button if game owner
- [ ] Edit page and edit functionality
- [ ] Delete game functionality
- [ ] Profiler usage in inspect browser console
