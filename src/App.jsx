import './App.css'
import Card from './components/Card'
import CardDynamic from './components/CardDynamic'

function App() {

  return (
    <div className='container'>
      <Card/>
      <CardDynamic heading="test" description="popisek" link="link"/>
      <CardDynamic heading="dominik" description="hezci popisek" link="seznam.cz"/>
      <CardDynamic heading="skola" description="obchod" link="alza.cz"/>
      <CardDynamic heading="github" description="videa" link="youtube.com"/>
    </div>
  )
}

export default App
