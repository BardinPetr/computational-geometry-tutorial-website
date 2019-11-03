# Welcome to source code of the online tutorial website about computational geometry
## To compile:
* `yarn install`
* `yarn start` - to view development server
* `yarn build` - build the production version of the website; *builds will be in dist/*
## To add lesson:
* Create new lesson page in **src/pages** using *1.html* as template 
* Append *lessons* array in **src/app.js** with object using template in that file: 
  * `name: "%your_lesson_name%"`
  * `href: "%name_of_lesson_file_in_pages%"`
  * `difficulty: %difficulty_of_lesson (0-2 means easy to difficult% `
* Create PR
