// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA61V2Y6jRhT9l3q1NWZfLLWUYnGD8W7wQpSHMhRQNgYMhW086i/IR+Qt35dPiLC7M6MsPR2peSqqru45dzv3K8hyUmEHN6D/FRQlOSOK2yNtCgz6QKujCJegC0JEEeiDtc0fjv6Cx9v1dDS7alUo+XOfLkeNwm9I2ITrwj0om/2MFZ7ASxcU9S4lwTsORSceFakwqYXk2e0lN3VnWZFKoL6dKvhQsNFAuqRqmHiL+Am8tB4RKUkWm0WCj7hEqYObGSLlx+jXUB4Fi4WsThVs4z1OJ8xFxBlZTEbqKWaz5TA75HNCdoz9MfrjQ+nh+WbP8YvTgj9MpoVgD6G8ibZJb4hGhxDSRZMdR1fefNCvSJzh0A5xRgltPpz3+ShlJqheyqofzaBANsEt1Zac62wlZyQJVVrt/Hm8Omge8zHilZON4HrV65UUbjNpsvGfwyZDtfBcb6KRGYmj04mrpo1wib8nPivfeuXwf/IewDE7DL2tv8xH2tmNdsdE28r1bq7HmVIeUmN33fGbK2ulysfoCy5RnWximZfpRh3Usdtxk85skVyQHqR50IGcDRuDu8z48Tf6iNbleyyZq0OCteUskiLfGrd93kl7a4HAlbNbH8LQekZTIvcYdHJ2UFEbrR6sxj0nXquC3ThLx24GhZRqmV9E+2oX6ec0K2fJ5eke0QE3dgj67EsXlDgmFS0RJXl2v1PELkDheYmDEtN7esHF03b++tx0QhmaDcJBeLatEo6L+qKS1SWcn4vQjXzvFgtPoAuKMg9wVeHQIhXNy2aMqwrFuAL9n++VaoMu8TGneEhC0AecLCkqLwiqzP1UfbkkiFaoKL5kmIIuiMr8OMagT8sad8HdnoeMrAisxJkyy+rcwDQMqY3q+MBxyRFXFB0L0GdlkWNUlpHFl+4nQYscN+AUnRmosskwpmAI70OrzKdBG5oma4oqD1RFNHXGNLQfQCufBi1xhqkKIs9Lsg55DkrvR80ynwetmoysGizDmiKnQV5S1PehWe7ToDXJVAxe4kVVEjSG4XTuB9Dyyy9dkOErfShTO0882wURKSvqZXWR5ih8k623RxQEeZ3RZZMFenvAJeh/d40pJVlctcHUGSqDhJyx3nIH/QilFf5rhHGJwzf+r2tJz8NWWdZzT7Y1fwNa7q2jv6ejL/P/zEj6sBJklpE5RVRVUZSU1rJ96IIMtb7AzJou4B+//f5rm5lXzi1EiCkiaQX6QHdcNi8Y2xyt3VoZPz/DcQz1GIJvMb6p4UNtbid+MqHUiKedIN3kWDpep7U9XGoOr3Kx28zQSTqlw9Bb39Xm707axXoQEzvfazNxqykuOpFRb5ceI3Vl1HO/1PdevjgZt+Q2IeZcGcSepHCzisuJFPrihLeydZIE8nJz7lx06wALZKgdbw+fWrQQn0mAvwfjlC2rm3vH8NeLoydx5zKdGAPrMLDxRO65l2HngqvlmvODudEZaEa2gtdlZ+gluV9AGy5IIcBQmXHZNTqeLMR4jADj+KHT9z2Rvu5n8qqg5P4bEXxfd691+FE1H7zbnmNeut+5eN2f/7GDtECiN3e3mwvGORuuJKsuKrckuhcvaS/MTWXPnepTsdysBjV4aZu/SBGN8vII+oAUSZ5h0AVlXrc9bGdR/g6WDj3bmD/iTlFF4be5+DdFZx5WszIvLFQloA9YR0gsoW3yBhbFkiL6NmYAtp+tVeDlT0WGtXhjCgAA",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'false' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Tuesday",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27634624586",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
