# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Solution URL: (https://github.com/shalri/fm-interactive-rating-component)
- Live Site URL: (https://shalri.github.io/fm-interactive-rating-component/)

## My process

### Built with

- NextJS
- React
- Tailwind
- Prettier Tailwind Plugin
- ViteJS
- Semantic HTML5 markup

### What I learned

I used NextJS for this challenge. Since I plan to integrate Frontend Mentor
into my study routine, I might as well play around with NextJS and React alongside the
challenges.

Implementing this challenge with NextJS made it more interesting. It gave me
a broader scope. I had to integrate the UX when the user submits the rating.
I leaned on `shadcn/ui` for the `Toast` component. This prevents the user from
unrated submissions.

I also used a loader as a fallback when the page rendering is slow. I also used
hooks like `useSearchParams` to pass the rating submitted by the user.

This challenge showed the importance of a `.fig` file. I spent most of the time
pixel-pushing to set the dimensions, spacing, and layout just right. I am proud of the results since I was only eyeballing it.

### Continued development

I look forward to doing more challenges from [Frontendmentor.io](https://www.frontendmentor.io). I like learning and practicing new concepts.

### Useful resources

- [CSS Loaders](https://css-loaders.com/infinity/) - Loader used while routing to Thank You page.
- [CSSgradient.io](https://cssgradient.io/) - Generating the subtle gradient
- [Shadcn/ui](https://ui.shadcn.com/) - The toaster I used when the user clicks
  the submit button without choosing a rating.

### Author

- Website: [FScode](https://shalri.github.io/fscode/)
- Frontend Mentor: [Shalri](https://www.frontendmentor.io/profile/shalri)
- Github: [Shalri](https://github.com/shalri)
