Made a todo list using HTML, CSS, various JS libraries and frameworks, etc.

Use 'npm install' to create node_modules folder in the main project

npm init --y
download git
set the path to env path to npm ---?
install bower - npm install -g bower
bower init - default to all the questions.
 .gitignore (there is a space at the beginning)(Bower doesn't work without git) --?
Create app directory
create server directory
craete a file 'main.js' in the server
install express - npm install express --save
install ejs - npm install ejs --save
create a jsx file - main.jsx for React and index.ejs for communication between ejs and jsx
created a gulpfile.js
install gulp - npm install -g gulp
npm install --save gulp-live-server
npm install browser-sync
npm install --save react
bower install --save react (this converts jsx to js)
npm install -g react-tools
npm install --save node-jsx
when node modules r installing again, make changes in main.js(change to .tmp)
   go to gulpfile and add some dependency like reactify,etc., and adding some changes(its in mail)
   add script tag in index.ejs

created Todoitemlist.jsx in components directory which is in app directory
added var React = require('react/addons'); to the main.jsx file
added var React = require('react/addons') to the todoitemlist.jsx and created a class using exports
In the main.jsx, create a var TodoItemlist and render with React.render(<TodoItemlist />, app) getting hold of the 'app'
This 'app' is specified as div id in the index.ejs
create TodoItem.jsx
have it render a div with an item.name displaying
switch TodoItemList.jsx div to indexing <TodoItem/>
connecting files in comp folder + dispatcher