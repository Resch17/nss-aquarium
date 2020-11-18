const locationCollection = [
  {
    image: "reef.png",
    name: "Great Barrier Reef",
    url: "https://en.wikipedia.org/wiki/Great_Barrier_Reef",
    description: "The Great Barrier Reef is the world's largest coral reef system."
  },
  {
    image: "cuyahoga.jpg",
    name: "Cuyahoga River",
    url: "https://en.wikipedia.org/wiki/Cuyahoga_River",
    description: "The Great Barrier Reef is the world's largest coral reef system."
  },
  {
    image: "percy.jpg",
    name: "Percy Priest Lake",
    url: "https://en.wikipedia.org/wiki/Percy_Priest_Lake",
    description: "Percy Priest Lake is a reservoir in north central part of Tennessee. It is formed by J. Percy Priest Dam, located between miles six and seven of the Stones River. The dam (easily visible from Interstate 40) is located about 10 miles (16 km) east of downtown Nashville and impounds a lake 42 mi (68 km) long. The lake and dam are named for Congressman Percy Priest."
  },
];

export const useLocation = () => {
  return locationCollection.slice();
};