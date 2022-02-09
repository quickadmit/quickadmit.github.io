# QuickAdmit website

This site is hosted on Github Pages.

## Making changes

You can run the dev server by running `make start`. There you can make
changes and view them before committing them.

Once you are happy with your changes, run `make build` to build the
production files. Use `git` to commit the files to the `master`
branch. Push your changes to `origin/master` branch.

Then run `make deploy` to push the `dist/` folder to the
`origin/gh-pages` branch. This will update the site.
