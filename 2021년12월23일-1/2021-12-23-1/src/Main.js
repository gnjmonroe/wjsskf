import ItemLevel2 from './ItemLevel2';
import ItemLevel3 from './ItemLevel3';
import ItemLevel4 from './ItemLevel4';
import './styles.scss';

const Main = () => {
  const itemProps = {
    item_1: {
      urlTitle: "https://www.30secondsofcode.org/articles/t/webdev/p/1",
      desc: "30 seconds of code is a blog of short explanatory articles on web development technologies and short snippets of related code.",
      notes: "I've been looking for bite-sized yet practical bits of information on web development for my studies and practice over the break.",
    },
    item_1_1: {
      urlTitle: "https://www.30secondsofcode.org/articles/s/7-chrome-extensions-for-web-developers",
      desc: "A list of 7 basic Chrome extensions for web development.",
      notes: 'I already have the functionality of half of these extensions and the other half are extraneous to my interests at the moment but CSS Peeper looks like it could be useful.',
    },
    item_1_2: {
      urlTitle: "https://www.30secondsofcode.org/articles/s/4-seo-tips-for-developers",
      desc: "A list of 4 basic practices developers can use to improve SEO.",
      notes: "SEO seems like a skill of its own, but I want to start learning about it at a high-level for now. This list is a nice, short primer for thinking about some basic SEO key words and concepts while I'm at this early stage of knowledge.",
    },
    item_1_2_1: {
      urlTitle: "https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#structured-data",
      desc: "An article by Google on what structured data is and why it's useful to Google Search.",
      notes: "I didn't know that structured data was a specific construct with a functional (as opposed to moral) value until I found this article. The information in this article and related content is pertinent to my above-mentioned interest in SEO. I haven't completely read it yet but I intend to within the week.",
    },
    item_1_2_2: {
      urlTitle: "https://json-ld.org/",
      desc: "The homepage for the JSON-LD documentation.",
      notes: "I'm curious about what a search engine actually is 'under the hood' and how to better understand the search engine and its role in my everyday life.",
    },
    item_1_3: {
      urlTitle: "https://www.30secondsofcode.org/articles/s/breaking-react",
      desc: "A short article explaining how directly manipulating the DOM in a React app can cause common but difficult to trace bugs.",
      notes: "A simple (anti-)pattern to look out for and avoid in my development practice. I think I may have encountered this bug before.",
    },
    item_1_4: {
      urlTitle: "https://www.30secondsofcode.org/articles/s/8-tips-for-accessible-websites",
      desc: "A list of 8 simple tips developers can use to improve the accessibility of their websites.",
      notes: "Following the letter of the WCAG guidelines can feel like a meticulous drag at times, but I've started to think of accessibility, in addition to it's basic aims, as a means of ensuring that my designs are clear and robust. This list provides 8 simple and practical things to keep in mind while I design and write code.",
    },
    item_1_4_1: {
      urlTitle: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      desc: "The landing page for the WCAG guidelines.",
      notes: "This is an explicit and accessible resource for understanding how I can be compliant with WCAG standards.",
    },
    item_1_4_2: {
      urlTitle: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/",
      desc: "A listicle of HTML tag alternatives to div tags.",
      notes: "A flashcard of sorts to quickly refresh my memory of div tag alternatives.",
    },
    item_1_4_3: {
      urlTitle: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      desc: "A list of semantic HTML elements/tags",
      notes: "A comprehensive list of HTML elements/tags to refer in development.",
    },
    item_2: {
      urlTitle: "https://google.github.io/styleguide/jsguide.html",
      desc: "Google's internal style guide for JavaScript.",
      notes: "I skimmed this massive document for an example of how to handle certain file naming conventions.",
    },
    item_3: {
      urlTitle: "https://en.wikipedia.org/wiki/Analysis_paralysis",
      desc: "When overthinking impedes action.",
      notes: "My STEM education inculcated me with a habit of overthinking that my design education made clear that I need to get rid of. Giving it a name is a small step in that process.",
    },
    item_4: {
      urlTitle: "'Beautiful is not a useful adjective.'",
      desc: "An instinctive response to hearing designers talk about the value (sometimes imperative) of beauty in design.",
      notes: "Something to think about.",
    },
  };

  return (
    <main>
      <ul>
        <ItemLevel2 info={itemProps.item_1} />
        <li>
          <ul>
            <ItemLevel3 info={itemProps.item_1_1} />
            <ItemLevel3 info={itemProps.item_1_2} />
            <li>
              <ul>
                <ItemLevel4 info={itemProps.item_1_2_1} />
                <ItemLevel4 info={itemProps.item_1_2_2} />
              </ul>
            </li>
            <ItemLevel3 info={itemProps.item_1_3} />
            <ItemLevel3 info={itemProps.item_1_4} />
            <li>
              <ul>
                <ItemLevel4 info={itemProps.item_1_4_1} />
                <ItemLevel4 info={itemProps.item_1_4_2} />
                <ItemLevel4 info={itemProps.item_1_4_3} />
              </ul>
            </li>
          </ul>
        </li>
        <ItemLevel2 info={itemProps.item_2} />
        <ItemLevel2 info={itemProps.item_3} />
        <ItemLevel2 info={itemProps.item_4} />
      </ul>
    </main>
  );
}

export default Main;