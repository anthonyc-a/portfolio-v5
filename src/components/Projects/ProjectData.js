import img1 from "../../../static/img/arch.webp"
import img1_1 from "../../../static/img/arch1.webp"
import img1_2 from "../../../static/img/arch2.webp"
import img2 from "../../../static/img/PAK.webp"
import img2_1 from "../../../static/img/PAK_1.webp"
import img3 from "../../../static/img/travel_blog.webp"
import img4 from "../../../static/img/carhartt.webp"
import img4_1 from "../../../static/img/carhartt_1.webp"
import img5 from "../../../static/img/mediasoft.webp"
import img5_1 from "../../../static/img/mediasoft1.webp"
import img5_2 from "../../../static/img/mediasoft2.webp"
import img5_3 from "../../../static/img/mediasoft3.webp"
import img5_4 from "../../../static/img/mediasoft4.webp"

export const projectData = [
  {
    name: "Archvizual",
    type: "Design + Code",
    img: img1,
    img1: img1_1,
    img2: img1_2,
    selected: "",
    action: "open site",
    url: "https://archvizual-redesign.netlify.app/",
    description_intro: `A site redesign for the successful architect and 3D artist, Roman Vlasov. After analysing the current site, I proceeded to create concepts in Figma and incrementally improve upon them.`,
    description: `I developed the designs using Gatsby.js, a Javascript framework for creating fast, static websites and deployed it to Netlify’s cloud hosting service. Overall, the design and development for this project took just under a week.`,
    tags: ["graphic design", "web design", "development"],
    github: true,
    github_link: "https://github.com/anthonyc-a/roman-vlasov-arch",
    behance: true,
  },
  {
    name: "Pak NFT Archive",
    type: "Design + Code",
    img: img2,
    img1: img2_1,
    selected: "",
    action: "in development",
    url: "",
    description_intro: `I’m currently designing a web based archive for Murat Pak, also known as Pak. Its purpose is to archive the NFTs he’s been creating and selling over the past few years so they can be viewed in an environment that suits the standards of his work.`,
    description: `I started this project through my admiration for him and will begin to develop these designs in the near future.`,
    tags: ["graphic design", "web design", "development"],
    github: true,
    behance: true,
  },
  {
    name: "Travel Blog",
    type: "Design + Code",
    img: img3,
    selected: "",
    action: "in development",
    url: "/",
    description_intro: `A travel blog I'm in the process of creating. I’ll be using Gatsby.js (React) along with the 'gatsby-source-wordpress' plugin to funnel content from a Wordpress CMS into the custom site.`,
    description: ``,
    tags: ["graphic design", "web design", "development", "wordpress", "cms"],
    github: true,
    behance: true,
  },
  {
    name: "Carhartt Clone",
    type: "Code",
    img: img4,
    img1: img4_1,
    selected: "",
    action: "open site",
    url: "https://carhartt-clone-v2.netlify.app/",
    description_intro: `A clone of the ‘New arrivals' page on the Carhartt WIP site. I started this project to sharpen my development skills by successfully reproducing aspects from the website of a large international retailer.`,
    description: ``,
    tags: ["development", "e-commerce"],
    github: true,
    github_link: "https://github.com/anthonyc-a/carhartt-clone",
    behance: false,
  },
  {
    name: "Mediasoft Clone",
    type: "Code",
    img: img5,
    img1: img5_1,
    img2: img5_2,
    img3: img5_3,
    img4: img5_4,
    selected: "",
    action: "open site",
    url: "https://mediasoft-clone-v1.netlify.app/",
    description_intro: `Mediasoft are a group of software developers based in Russia. I created a clone of their site to improve my development skills.`,
    description: ``,
    tags: ["development"],
    github: true,
    github_link: "https://github.com/anthonyc-a/mediasoft-clone",
    behance: false,
  },
]
