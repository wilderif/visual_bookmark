import logo_youtube from "./assets/logo_youtube.png";
import logo_github from "./assets/logo_github.png";
import logo_naver from "./assets/logo_naver.png";
import logo_instagram from "./assets/logo_instagram.png";
import logo_spotify from "./assets/logo_spotify.png";

const bookmark_data = [
  {
    id: "d1",
    type: "directory",
    title: "directory1",
    children: [],
  },
  {
    id: "d2",
    type: "directory",
    title: "directory2",
    children: [
      {
        id: "p1",
        type: "page",
        title: "Youtube",
        alias: "youtube",
        hyperlink: "https://www.youtube.com/",
        logo_image: logo_youtube,
      },
      {
        id: "p2",
        type: "page",
        title: "GitHub",
        alias: "github",
        hyperlink: "https://www.github.com/",
        logo: logo_github,
      },
      {
        id: "p3",
        type: "page",
        title: "Naver",
        alias: "naver",
        hyperlink: "https://www.naver.com/",
        logo: logo_naver,
      },
      {
        id: "p4",
        type: "page",
        title: "Instagram",
        alias: "instagram",
        hyperlink: "https://www.instagram.com/",
        logo: logo_instagram,
      },
      {
        id: "p5",
        type: "page",
        title: "Spotify",
        alias: "spotify",
        hyperlink: "https://open.spotify.com",
        logo: logo_spotify,
      },
    ],
  },
  {
    id: "d3",
    type: "directory",
    title: "directory3",
    children: [
      {
        id: "p1",
        title: "Spotify",
        type: "page",
        alias: "spotify",
        hyperlink: "https://open.spotify.com",
        logo: logo_spotify,
      },
      {
        id: "p2",
        type: "page",
        title: "Naver",
        alias: "naver",
        hyperlink: "https://www.naver.com/",
        logo: logo_naver,
      },
    ],
  },
  {
    id: "p1",
    title: "Spotify",
    type: "page",
    alias: "spotify",
    hyperlink: "https://open.spotify.com",
    logo: logo_spotify,
  },
  {
    id: "d4",
    type: "directory",
    title: "directory3",
    children: [
      {
        title: "Spotify",
        type: "page",
        alias: "spotify",
        hyperlink: "https://open.spotify.com",
        logo: logo_spotify,
      },
      {
        id: "p4",
        type: "page",
        title: "Naver",
        alias: "naver",
        hyperlink: "https://www.naver.com/",
        logo: logo_naver,
      },
    ],
  },
  {
    id: "p2",
    title: "Spotify",
    type: "page",
    alias: "spotify",
    hyperlink: "https://open.spotify.com",
    logo: logo_spotify,
  },
];

// const bookmark_data = [
//   {
//     title: "Youtube",
//     type: "page",
//     alias: "youtube",
//     hyperlink: "https://www.youtube.com/",
//     logo: logo_youtube,
//   },

// {
//   title: "GitHub",
//   type: "page",
//   alias: "github",
//   hyperlink: "https://www.github.com/",
//   logo: logo_github,
// },

// {
//   title: "Naver",
//   type: "page",
//   alias: "naver",
//   hyperlink: "https://www.naver.com/",
//   logo: logo_naver,
// },

// {
//   title: "Instagram",
//   type: "page",
//   alias: "instagram",
//   hyperlink: "https://www.instagram.com/",
//   logo: logo_instagram,
// },

// {
//   title: "Spotify",
//   type: "page",
//   alias: "spotify",
//   hyperlink: "https://open.spotify.com",
//   logo: logo_spotify,
// },

//   {
//     title: "GitHub",
//     type: "page",
//     alias: "github",
//     hyperlink: "https://www.github.com/",
//     logo: logo_github,
//   },

//   {
//     title: "Spotify",
//     type: "page",
//     alias: "spotify",
//     hyperlink: "https://open.spotify.com",
//     logo: logo_spotify,
//   },

//   {
//     title: "GitHub",
//     type: "page",
//     alias: "github",
//     hyperlink: "https://www.github.com/",
//     logo: logo_github,
//   },

//   {
//     title: "Spotify",
//     type: "page",
//     alias: "spotify",
//     hyperlink: "https://open.spotify.com",
//     logo: logo_spotify,
//   },
// ];

export default bookmark_data;
