document.addEventListener("DOMContentLoaded", function () {
  const locationSelect = document.getElementById("location");
  const jobTypeSelect = document.getElementById("job-type");
  const postedWithinSelect = document.getElementById("posted-within");
  const jobCards = document.querySelectorAll(".job-card");
  const jobCount = document.getElementById("job-count");
  const filterButton = document.getElementById("filter");
  const resetButton = document.getElementById("reset");

  function filterJobs() {
    const location = locationSelect.value;
    const jobType = jobTypeSelect.value;
    const postedWithin = postedWithinSelect.value;

    let count = 0;

    jobCards.forEach((card) => {
      const cardLocation = card.getAttribute("data-location");
      const cardJobType = card.getAttribute("data-type");
      const cardDate = parseInt(card.getAttribute("data-date"), 10);

      let locationMatch = location === "all" || location === cardLocation;
      let jobTypeMatch = jobType === "all" || jobType === cardJobType;

      let postedWithinMatch = false;
      switch (postedWithin) {
        case "Any":
          postedWithinMatch = true;
          break;
        case "Today":
          postedWithinMatch = cardDate <= 1;
          break;
        case "Last 2 days":
          postedWithinMatch = cardDate <= 2;
          break;
        case "Last 3 days":
          postedWithinMatch = cardDate <= 3;
          break;
        case "Last 5 days":
          postedWithinMatch = cardDate <= 5;
          break;
        case "Last 10 days":
          postedWithinMatch = cardDate <= 10;
          break;
        default:
          break;
      }

      console.log(
        `Location: ${location}, Card Location: ${cardLocation}, Location Match: ${locationMatch}`
      );
      console.log(
        `Job Type: ${jobType}, Card Job Type: ${cardJobType}, Job Type Match: ${jobTypeMatch}`
      );
      console.log(
        `Posted Within: ${postedWithin}, Card Date: ${cardDate}, Posted Within Match: ${postedWithinMatch}`
      );

      if (locationMatch && jobTypeMatch && postedWithinMatch) {
        card.style.display = "flex";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    jobCount.textContent = count;
  }

  function resetFilters() {
    locationSelect.value = "all";
    jobTypeSelect.value = "all";
    postedWithinSelect.value = "Any";
    filterJobs();
  }

  filterButton.addEventListener("click", filterJobs);
  resetButton.addEventListener("click", resetFilters);

  filterJobs();
});

function showSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}

function offSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
}
