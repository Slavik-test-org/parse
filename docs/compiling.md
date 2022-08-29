## Compiling with vercel

ref: https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github

Install vercel/ncc by running this command in your terminal. npm i -g @vercel/ncc

Compile your index.js file. ncc build index.js --license licenses.txt

You'll see a new dist/index.js file with your code and the compiled modules. You will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

Change the main keyword in your action.yml file to use the new dist/index.js file. main: 'dist/index.js'
