/*
  Flexi Buddy 6.2.2 — Home button position update
  Moves Quick Actions directly beneath Today's Progress / Flexi Coach.
*/
(function () {
  function moveQuickActionsUp() {
    const today = document.getElementById("today");
    const summary = today && today.querySelector(".grid2");
    const actions = today && today.querySelector(".card.actions");

    if (!today || !summary || !actions) return;

    // Put Quick Actions immediately after the progress/coach summary.
    summary.insertAdjacentElement("afterend", actions);
    actions.classList.add("actions-promoted");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", moveQuickActionsUp);
  } else {
    moveQuickActionsUp();
  }
})();