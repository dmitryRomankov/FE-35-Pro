import React from "react";
import './Main.css';
import {Button} from './Button';

class Main extends React.Component {
  
  render() {
    return (
      <>
        <main className='main'>
          <article className="article">
            <h2>Article 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat sed magni cumque officia similique dolores cupiditate cum perspiciatis deleniti quasi quia, placeat assumenda, in velit incidunt quas. Consectetur, saepe.</p>
          </article>
          <Button text="Click me"></Button>
          <article className="article">
            <h2>Article 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure eos soluta voluptatibus dolorem, sit delectus laboriosam accusamus? In pariatur totam culpa dolorem ipsam sequi quo modi ut cupiditate natus?</p>
          </article>
        </main>

      </>
    );
  }
}

export default Main;