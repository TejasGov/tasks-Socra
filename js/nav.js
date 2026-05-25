/* js/nav.js — Shared nav actions (CSP-safe, no inline handlers) */

document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('nav-avatar');
  if (avatar) avatar.addEventListener('click', logout);
});
