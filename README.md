# Fractals

> A simple web application for rendering fractals, attractors, complex sets and much more along the way
> Live at <https://xenitane.github.io/fractals>

### Table of Contents

-   [Fractals](#fractals) - [Table of Contents](#table-of-contents)
    -   [Inspiration](#inspiration)
    -   [Challanges](#challanges)
    -   [Technology](#technology)
    -   [Installation and Usage](#installation-and-usage)
        -   [Requirements](#requirements)
        -   [Usage Instructions](#usage-instructions)
        -   [Other Instructions](#other-instructions)
    -   [References](#references)
    -   [TODOs](#todos)

## Inspiration

One day, as I was on YouTube, watching some math videos from [3blue1brown](https://www.youtube.com/@3blue1brown), I was introduced to the concept of fractal geometry.

The beauty of these simple yet so intricate shapes took me by surprise and since then I wanted to build my collection of them.

And this project is just what is helping me to realize that goal.

## Challanges

-   Writing the abstraction for the renderers for different purposes.
-   Implementing the three-dimensional hamilton space filling curve for color spaces to color the fractals.
-   Optimizing some L-Systems for optimal performance and desired shapes
-   And some weird Mathematics which I'm glad I gave time to.

## Technology

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)![SVG](https://img.shields.io/badge/svg-%23FFB13B.svg?style=for-the-badge&logo=svg&logoColor=white)![NPM](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React Router](https://img.shields.io/badge/react_router-%23CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=white)![Github Actions](https://img.shields.io/badge/github_actions-%232088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)![Github Pages](https://img.shields.io/badge/github_pages-%23222222.svg?style=for-the-badge&logo=githubpages&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)![PostCSS](https://img.shields.io/badge/postcss-%23DD3A0A.svg?style=for-the-badge&logo=postcss&logoColor=white)![Eslint](https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)![prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=white)

## Installation and Usage

### Requirements

-   NodeJS version 18 or higher
-   npm version 10

### Usage Instructions

1. To run the development server

    ```bash
    $ git clone https://www.github.com/xenitane/fractals.git fractals
    $ cd fractals
    $ npm ci
    $ npm run dev
    ```

2. Build and Preview

    ```bash
    $ npm run build
    $ npm run preview
    ```

3. Linting, Formatting and Type-Checking
    ```bash
    $ npm run type-check
    $ npm run lint
    $ npm run format
    ```

### Other Instructions

There are several config files in the repository, modify them as per your needs.

## [References](./references.md)

## [TODOs](./todo.md)

[![Contributors](https://contrib.rocks/image?repo=xenitane/fractals)](https://github.com/xenitane/fractals/graphs/contributors)

> To contribute to the project, just raise an issue, a pull request, or reach out.

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/xenitane/fractals?style=flat-square) [![GitHub issues](https://img.shields.io/github/issues/xenitane/fractals?style=flat-square)](https://www.github.com/xenitane/fractals/issues)[![GitHub License](https://img.shields.io/github/license/xenitane/fractals?style=flat-square)
](./license.md)
