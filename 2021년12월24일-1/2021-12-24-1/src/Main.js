import './styles.scss';
import Block from './Block';

const Main = () => {
  const info = {
    info_1: {
      title: '30 seconds of code',
      url: 'https://www.30secondsofcode.org/articles/t/webdev/p/1',
      what: '30 seconds of code is a blog of short explanatory articles on web development technologies and short snippets of related code.',
      why: "I've been looking for bite-sized yet practical bits of information on web development for my studies and practice over the break.",
    },
    info_1_1: {
      title: "7 Chrome Extensions for Web Developers",
      url: "https://www.30secondsofcode.org/articles/s/7-chrome-extensions-for-web-developers",
      what: "A list of 7 basic Chrome extensions for web development.",
      why: 'I already have the functionality of half of these extensions and the other half are extraneous to my interests at the moment but CSS Peeper looks like it could be useful.',
    },
    info_1_2: {
      title: "4 SEO Tips for Developers",
      url: "https://www.30secondsofcode.org/articles/s/4-seo-tips-for-developers",
      what: "A list of 4 basic practices developers can use to improve SEO.",
      why: "SEO seems like a skill of its own, but I want to start learning about it at a high-level for now. This list is a nice, short primer for thinking about some basic SEO key words and concepts while I'm at this early stage of knowledge.",
    },
    info_1_2_1: {
      title: "Structured Data",
      url: "https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#structured-data",
      what: "An article by Google on what structured data is and why it's useful to Google Search.",
      why: "I didn't know that structured data was a specific construct with a functional (as opposed to moral) value until I found this article. The information in this article and related content is pertinent to my above-mentioned interest in SEO. I haven't completely read it yet but I intend to within the week.",
    },
    info_1_2_2: {
      title: "JSON-LD Documentation",
      url: "https://json-ld.org/",
      what: "The homepage for the JSON-LD documentation.",
      why: "I'm curious about what a search engine actually is 'under the hood' and how to better understand the search engine and its role in my everyday life.",
    },
    info_1_3: {
      title: "Breaking React",
      url: "https://www.30secondsofcode.org/articles/s/breaking-react",
      what: "A short article explaining how directly manipulating the DOM in a React app can cause common but difficult to trace bugs.",
      why: "A simple (anti-)pattern to look out for and avoid in my development practice. I think I may have encountered this bug before.",
    },
    info_1_4: {
      title: "8 Tips for Accessible Websites",
      url: "https://www.30secondsofcode.org/articles/s/8-tips-for-accessible-websites",
      what: "A list of 8 simple tips developers can use to improve the accessibility of their websites.",
      why: "Following the letter of the WCAG guidelines can feel like a meticulous drag at times, but I've started to think of accessibility, in addition to it's basic aims, as a means of ensuring that my designs are clear and robust. This list provides 8 simple and practical things to keep in mind while I design and write code.",
    },
    info_1_4_1: {
      title: "WCAG Standards",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      what: "The landing page for the WCAG guidelines.",
      why: "This is an explicit and accessible resource for understanding how I can be compliant with WCAG standards.",
    },
    info_1_4_2: {
      title: "Semantic HTML Alternatives to DIVs",
      url: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
      what: "A listicle of HTML tag alternatives to div tags.",
      why: "A flashcard of sorts to quickly refresh my memory of div tag alternatives.",
    },
    info_1_4_3: {
      title: "Semantic HTML Tags",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      what: "A list of semantic HTML elements/tags",
      why: "A comprehensive list of HTML elements/tags to refer in development.",
    },
    info_2: {
      title: "Google's JS Style Guide",
      url: "https://google.github.io/styleguide/jsguide.html",
      what: "Google's internal style guide for JavaScript.",
      why: "I skimmed this massive document for an example of how to handle certain file naming conventions.",
    },
    info_3: {
      title: "Analysis Paralysis",
      url: "https://en.wikipedia.org/wiki/Analysis_paralysis",
      what: "When overthinking impedes action.",
      why: "My STEM education inculcated me with a habit of overthinking that my design education made clear that I need to get rid of. Giving it a name is a small step in that process.",
    },
    info_4: {
      title: "'Beautiful is not a useful adjective.'",
      url: "",
      what: "An instinctive response to hearing designers talk about the value (sometimes imperative) of beauty in design.",
      why: "Something to think about.",
    },
  }

  return (
    <main>
      <p>This is a reiteration of the previous day's design sketch.</p>
      <p>Overall, it feels visually better, but I stripped the information hierarchy out to focus on the typography, the primary weakness identified.</p>
      <p>Obviously the navigation and organizational design is important to me, but I want to focus on building a good visual base over the next few days.</p>
      <Block info={info.info_1} />
      <Block info={info.info_1_1} />
      <Block info={info.info_1_2} />
      <Block info={info.info_1_2_1} />
      <Block info={info.info_1_2_2} />
      <Block info={info.info_1_3} />
      <Block info={info.info_1_4} />
      <Block info={info.info_1_4_1} />
      <Block info={info.info_1_4_2} />
      <Block info={info.info_1_4_3} />
      <Block info={info.info_2} />
      <Block info={info.info_3} />
      <Block info={info.info_4} />
    </main>
  )
}

export default Main;