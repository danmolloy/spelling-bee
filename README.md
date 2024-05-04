# Spelling Bee
## Overview
I am a big fan of word games, in particular NYT's [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee). I enjoy playing it so much I created a replica. 

### Game Rules
Very simply, each day a list of seven letters generate. The goal is to find as many words as you can which are at least four letters. There is one center letter which must be used in all words. Additionally, there is always at least one "pangram", a word which uses all letters at least once. 

## Features
### UI and UX
The game's core design has been respectfully and meticulously replicated, while implementing further features where appropriate.
- **Responsive and Mobile-First**: The app seamlessly adapts to a variety of devices and screen sizes.
- **Robust Error Handling**: Ensures a positive user experience regardless if data fetching encounters issues.
- **Interactive and Rewarding**: celebratory confetti spontaneously bursts when user finds a "pangram" with [react-canvas-confetti](https://www.npmjs.com/package/react-canvas-confetti), adding joy to the gameplay.
- **Continuous Gameplay**: The game saves your answers in local storage, allowing you to resume your progress throughout the day (resets when NYT updates game data).
- **Seamless Resizing**: CSS transition creates a smooth visual experience when elements are resizing.
- **Loading UI**: Presenting the end user with a meaningful interface while fetching data
- **Clear and useful data display**: The application presents dynamic hints, suggesting potential words in a concise HTML table.

### Optimized Performance
A variety of measures have been taken to ensure this app is highly performant. This includes:
- Server Components are used where possible, however this is quite minimal due to the amount of interacivity and high-level state management required.
- `next/font` is utilised for all fonts, removing external network requests.
- Google Lighthouse and Vercel speed insights are regularly monitored to ensure a fast user experience.
- Server-side fetching of game data in a server component module. The data is revalidated on each request to ensure it is up to date, without disrupting gameplay.


## Stack
- Next JS
- TypeScript
- Tailwind
- Jest & React Testing Library

## Accessibility
The site has been created with the aim of an inclusive experience for all users. It is continually tested and improved to adhere to Web Content Accessibility Guidelines (WCAG) 2.0 conformance standards, levering tools such as Google Lighthouse (score of 100), ESLint (including `eslint-plugin-jsx-a11y` extension) and Chrome DevTools.

Implemented Features:
- **Semantic HTML** to improve navigation for screen readers and assistive technologies.
- **Keyboard Navigation** makes the entire site accessible for users who rely on a keyboard only.
- **Alternative Text** for all non-text content (i.e. images), ensuring a meaningful and improved access to this content.
- **Colour Contrast** is maintained between text and background colours according to WCAG guidelines, imrpoving readability for users with visually impairments.
- **Focus Management** Clear and visible focus indicators, aiding navigation.
- **Form Accessibility** Concise labels for each input section, in addition to clear error messages upon incorrect data submission.

## Testing
Unit tests with Jest and React Testing Library achieve a high code coverage threshold (91.72%), focusing on maintaining a consistent UI, critical gameplay logic and handling user interaction. An array of Jest matchers (e.g., .toBe, .toEqual, .toBeInTheDocument) are leveraged for effective assertions. Predictable UI output is maintained with snapshot tests for all components. All tests are regularly reviewed to ensure failures are swiftly captured, and the site continues to be manually tested across a variety of screen sizes.

## SEO
- Utilised `next/meta` for improved SEO and web shareability.
- Google Lighthouse monitored for quality (score of 100)

## Credit
Many thanks to James Tauber for [CSS Hexagon Tutorial](https://jtauber.github.io/articles/css-hexagon.html) which was followed to create hexagon buttons, Visnu Pitiyanuvath for his [Observable Spelling Bee](https://observablehq.com/@visnup/spelling-bee) which inspired the source code fetch function. This project is a replica of NYT's game which is edited by Sam Ezersky. The entire project has been built by Daniel Molloy.