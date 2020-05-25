import * as React from 'react'

const App = () => {
  return (

    <div>
      {getIntroduction()}
      {getBackgroundParagraph()}
      {getExperienceParagraph()}
      {getSkillsTable()}
      {getProjects()}
      {getContactInfo()}
    </div>

  );
}



function getIntroduction() {
  return <section>
    <h1>Hello, there - I'm SPAS</h1>
    <h4>Reach out button... pdf resume button</h4>
  </section>
}

function getBackgroundParagraph() {
  return <section>
    <h1>my life story</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde consequuntur ex voluptates ad? Dolore, sapiente ea cum consequuntur eaque adipisci tempora nostrum quaerat ad sequi! Nostrum consectetur maiores libero?
    </p>
  </section>
}

function getExperienceParagraph() {
  return <section>
    <h1>experience timeline</h1>
  </section>
}

function getSkillsTable() {
  return <section>
    <h1>Look at some skills</h1>
  </section>
}

function getProjects() {
  return <section>
    <h1>Featured Projects</h1>
  </section>
}

function getContactInfo() {
  return <section>
    <h1>Contact Info</h1>
  </section>
}
export default App;