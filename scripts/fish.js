export const Fish = (fish) => {
  return `
  <section class="fish card">
    <div class="fish__image">
    <img class="fish__image image--card" src="./images/${fish.image}" />
    </div>
    <div class="fish__info">
      <div class="fish__name"><span class="fish-key">Name:</span> ${fish.name}</div>
      <div class="fish__species"><span class="fish-key">Species:</span> ${fish.species}</div>
      <div class="fish__length"><span class="fish-key">Length:</span> ${fish.length}"</div>
      <div class="fish__location"><span class="fish-key">Location:</span> ${fish.location}</div>
      <div class="fish__diet"><span class="fish-key">Name:</span> ${fish.diet}</div>
    </div>
  </section>
  `;
};