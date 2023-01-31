# Aesthetic Resume

Make beautiful resumes using Astro, Markdown and Puppeteer.

## Usage

```
git clone https://github.com/stefan-yas/aesthetic-resume.git
cd aesthetic-resume
npm i
npm run dev
```

Once you've installed the project dependencies and started the dev server, please go into the `src/pages` folder and edit the `.md` files inside the `contact`, `education`, `image`, `jobs` and `skills` folders.

Once you've edited your resume, go back to your terminal and type `node downloadAsPdf.js`, and the script will download a .pdf of your page in the project's root folder, titled `resume.pdf`.

## Project Structure

Inside of this project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   └── layouts/
│       └── contactLayout.astro
│       └── educationLayout.astro
│       └── imageLayout.astro
│       └── jobsLayout.astro
│       └── sectionLayout.astro
│       └── skillsLayout.astro
│   └── pages/
│       └── contact/
│           └── contact.md
│       └── education/
│           └── uni.md
│       └── image/
│           └── signature.md
│       └── jobs/
│           └── hooli.md
│           └── piedpiper.md
│       └── skills/
│           └── leadership.md
│           └── programming.md
│           └── web3.md
│       └── index.astro
│   └── styles/
│       └── global.css
└── downloadAsPdf.js
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run format`       | Formats all code using Prettier                  |

## To-do

- Order work experience automatically by date
- Projects section
- Option for custom links in the contact section
- Theme support
- Server-side resume creation, so the user doesn't have to use the command-line