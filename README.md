# https://pal.codes

![Screenshot of my website](./mysite.png)

## Overview

- pal.codes is now using Abell, moving on from Gatsby. I have been considering this shift for a while now, wanting to move to a cleaner way of blogging. And Abell is very much near to what I require. 
- One other reason that the change was so quick, is this tweet. [twitter.com/tesseralis/tweet](https://twitter.com/tesseralis/status/1293649007739191296?s=20)
- Right now the website is using a template made by Abell Team. Moving forward I might make some small updates.
- If you would like to recreate this for yourself, you can continue clone this website and following part will tell you how.


### To create an Abell project locally with the template that I am using

```
npx create-abell-app my-blog --template abelljs/abell-starter-minima
```

## Write/Edit blogs

- Take a local copy of your blog
  `git clone <blog-github-url>`
- `cd` to the new cloned folder
- `npm run dev` to run a dev server

The new repository will have a `content` folder in the root directory. You can edit blogs from there and you can create a new folder with `index.md` to create a new blog.

To see the final output, you can build the site with `npm run build`

---

For documentation on Abell, check out README of [abelljs/abell](https://github.com/abelljs/abell) repository
