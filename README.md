# Article preview component

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)  
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- Keep focus contexts synchronized while the menu natively manages screen reader anchors securely

### Screenshot

![](/Screenshot.png)

### Links

- Solution URL: [https://github.com/Henrydevlab/article-preview-component](https://github.com/Henrydevlab/article-preview-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM (Block-Element-Modifier) naming conventions
- WAI-ARIA accessibility states

### What I learned

During development, the core lesson centered around building a highly resilient interactive sharing overlay that behaves differently depending on viewports while avoiding broken HTML DOM refactoring.

Using `z-index` stacks and relative layouts allowed the share button to sit perfectly level on top of the full-width mobile container bar natively.

```html
<button class="article-card__share-trigger" id="shareBtn" aria-label="Open sharing options panel" aria-expanded="false" aria-controls="sharePanel">
  <img src="/images/icon-share.svg" alt="" aria-hidden="true" class="article-card__share-icon">
</button>
```
```css
.article-card__share-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 80px 0 32px;
}
```
```js
const dismissInterfaceOnOuterClick = (event) => {
  if (!sharePanel.contains(event.target) && !shareBtn.contains(event.target)) {
    sharePanel.classList.remove('article-card__share-panel--show');
    shareBtn.classList.remove('article-card__share-trigger--active');
    shareBtn.setAttribute('aria-expanded', 'false');
    sharePanel.setAttribute('aria-hidden', 'true');
  }
};
```

### Continued development

Moving forward, I will continue focusing on building custom components with robust accessibility parameters from the ground up, ensuring deep keyboard navigation control, focus trap routines on dynamic drawers, and fluid multi-breakpoint responsive structures.

### Useful resources

- [BEM Methodology](https://bem.info/en/) - This documentation helped clarify block structures and sub-element class names, avoiding messy specificity override battles in the responsive breakpoint stylesheet.
- [MDN Web Docs - WAI-ARIA Basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) - A fantastic reference guide for configuring accessible aria states on interactive toggle controls dynamically using vanilla JavaScript.

## Author

- Frontend Mentor - [@henrydevlab](https://www.frontendmentor.io/profile/henrydevlab)
- Twitter - [@henrydevlab](https://www.twitter.com/henrydevlab)
