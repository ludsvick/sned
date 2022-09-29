import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './Home.css'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="About">
      <header>
        <h1>What is <em><span style={{color: "red"}}>SNED</span></em>?</h1>
        <h2>Fair question. It's pretty unique!</h2>
      </header>
      <main>
        <h3>Why did you make this website?</h3>
        <p>The reason is simple; every day, people use websites to learn, to explore, to be entertained.
          What makes a website popular isn't that they explicitly adhere to one of these concepts,
          instead they do so with <em>consistent quality</em>.<br />
          We were frustrated by the standard development method of
          "have an idea, make website here, advertise there, and hope people visit". So we set out to make a rotating
          showcase of exceptional concepts from passionate web developers.
        </p>
        <h3>Okay, but why isn't SNED an <span style={{color: "crimson"}}>app</span>?</h3>
        <p>It could have been (and we won't rule that out <em>just</em> yet)! Plain and simple,
        apps are limited to phones, and with the recent success of sites like
        <span> <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a></span>, we belive that
        websites can and <em>should</em> be optimized for mobile devices first.</p>
        <h3>Where are these <em>Passionate Web Developers</em>?</h3>
        <p>Well, the team that developed it is here, but hopefully there are more somewhere around here!
          We understand that having a rotating showcase isn't particularly
          groundbreaking, but we believe that the quality of the site will speak for itself.
        </p>
        <h3>You just said the site isn't groundbreaking. Why should I keep coming back?</h3>
        <p>If you find repeating your everyday routine of Instagram, Reddit, and Twitter entertaining,
          good for you! You probably will find <em>one</em> page per day boring. If, however, you believe that
          <em> good things come to those who wait</em>, you will love this website.
        </p>
        <h3>What if I find one day's content so interesting I want to see it again?</h3>
        <p>We sure hope you do! That's why we keep an archive of all the previous pages for up to <span style={{textDecoration:'underline'}}>one year</span>,
          and track the most popular page each week to be immortalized in the
          <strong> Hall of Something</strong>!
        </p>
        <h3>I'm a web developer, and I want to contribute. How do I submit a page for consideration?</h3>
        <p>To ensure that the website maintains consistent quality to the end user, we <em>will</em> be picky.
        So picky, in fact, that we have a set of requirements that need to be met. We are not aiming to be
        exclusive, rather we hope to ensure that hard work is rewarded. This website is (as of the time of writing) built with React,
        but we won't discriminate form using any libraries compatible with it.<br />
        Be sure to grab a starter template <a href="">here</a>, and make sure it passes all of the <a href="">tests</a>
        .</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </main>
      <footer>
        <p>TODO: CONFIGURE TO BE ON EVERY PAGE, RATHER THAN ON ONE PAGE!</p>
      </footer>
    </div>
  )
}

export default App
