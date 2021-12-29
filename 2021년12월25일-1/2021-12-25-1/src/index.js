import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import Footer from './components/Footer';
import Block from './components/Block';

const text = {
  block1: {
    subhead: "Design Systems",
    body: "A design system, in the UI context, is essentially a stylesheet for UI design and web development. It contains standards for typography, color, and basic UI components. Many major tech companies use design systems and I wanted to start to familiarize myself with the format. Today, I skimmed through Apple's design system, Microsoft's Fluent design system, and Google's Material Design system."
  },
  block2: {
    subhead: "Takeaways",
    body: "Media breakpoint systems with six sizes seem popular enough. Color systems, not palettes, seem to be the scale of decision making. Typescales come with size, leading, and kerning values for each type function (headers, body, captions, etc.) and these values change with each media breakpoint. The most practical takeaway in terms of development is that there seems to be a high value on having 'a single source of truth,' which for me means defining all of these values as scss variables and keeping a master scss file for these variables.",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Block subhead={text.block1.subhead} body={text.block1.body} sectionDiv={true} />
    <Block subhead={text.block2.subhead} body={text.block2.body} sectionDiv={false} />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
