// Scope extraction variables using strict declarative selectors
const shareBtn = document.getElementById('shareBtn');
const sharePanel = document.getElementById('sharePanel');

/**
 * Handles the toggling event logic state for the component structure
 * @param {Event} event - The triggered DOM element mouse interaction event object
 */
const toggleShareInterface = (event) => {
  const isCurrentlyShowing = sharePanel.classList.toggle('article-card__share-panel--show');
  shareBtn.classList.toggle('article-card__share-trigger--active');

  // Dynamically balance programmatic Accessibility profiles (WAI-ARIA specifications)
  shareBtn.setAttribute('aria-expanded', isCurrentlyShowing.toString());
  sharePanel.setAttribute('aria-hidden', (!isCurrentlyShowing).toString());

  // Block execution propagation so document close capture fails to fire on direct interaction
  event.stopPropagation();
};

/**
 * Safely forces active UI overlays down if an alternate screen point is selected
 * @param {Event} event - The document click detection event object context
 */
const dismissInterfaceOnOuterClick = (event) => {
  if (!sharePanel.contains(event.target) && !shareBtn.contains(event.target)) {
    sharePanel.classList.remove('article-card__share-panel--show');
    shareBtn.classList.remove('article-card__share-trigger--active');
    shareBtn.setAttribute('aria-expanded', 'false');
    sharePanel.setAttribute('aria-hidden', 'true');
  }
};

// Runtime Interactive Action Target Bindings
shareBtn.addEventListener('click', toggleShareInterface);
document.addEventListener('click', dismissInterfaceOnOuterClick);