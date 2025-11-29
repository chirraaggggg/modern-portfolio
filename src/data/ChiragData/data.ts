import { FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const chiragName = "Chirag Sharma"
const chiragShortName = "Chirag"
const chiragBio = "Software Developer"
const chiragAbout = `
  <p>
    Hi! I'm Chirag Sharma, a software developer and data scientist who enjoys turning data and ideas into clean, practical, and user-focused products.
  </p>
  <p>
    I work with Python and popular ML libraries on the data side and HTML, CSS, and JavaScript on the web side, preferring lightweight, performant solutions.
  </p>
  <p>
    Outside of work, I’m usually solving DSA problems, refining my portfolio, or experimenting with new ideas to share on GitHub and social platforms.
  </p>
`

const chiragLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chirags920/",
    icon: FaLinkedinIn,
  },
]

const chiragContact =
  "I'm always open to interesting discussions and collaborations. Feel free to reach out to me via email or connect with me on social media!"
const chiragContactLink = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/chirraaggggg",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "X (Twitter)",
    link: "https://x.com/chirraaggggg",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chirags920/",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Email",
    link: "mailto:iamchirag182@gmail.com",
    icon: MdOutlineMail,
  },
]

const chiragFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:iamchirag182@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/chirraaggggg",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chirags920/",
    icon: FaLinkedinIn,
  },
  // {
  //   id: 4,
  //   name: "Twitter",
  //   link: "https://x.com/intent/follow?screen_name=damnGruz",
  //   icon: FaXTwitter,
  // },
  // {
  //   id: 5,
  //   name: "LeetCode",
  //   link: "https://leetcode.com/u/rinkitadhana",
  //   icon: SiLeetcode,
  // },
  // {
  //   id: 6,
  //   name: "Instagram",
  //   link: "https://www.instagram.com/rnkktt",
  //   icon: FaInstagram,
  // },
  // {
  //   id: 6,
  //   name: "Bluesky",
  //   link: "https://bsky.app/profile/chiragsharma.bsky.social",
  //   icon: SiBluesky,
  // },
]

export {
  chiragName,
  chiragShortName,
  chiragBio,
  chiragAbout,
  chiragLink,
  chiragContact,
  chiragContactLink,
  chiragFooterLink,
}