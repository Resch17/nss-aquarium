export const Location = (location) => {
  return `
  <div class="location">
          <div class="location__image"><img src="./images/${location.image}" alt="${location.name}"></div>
          <div class="location__info">
            <div class="location__name">${location.name}</div>
            <div class="location__url"><a href="${location.url}" target="_blank">Wikipedia - ${location.name}</a></div>
            <div class="location__description">${location.description}</div>
          </div>
        </div>
  `;
};