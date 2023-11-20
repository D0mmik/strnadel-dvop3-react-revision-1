import './App.css'
import Card from './components/Card'
import CardDynamic from './components/CardDynamic'

function App() {

  return (
    <div className='container'>
      <Card/>
      <CardDynamic heading="test" description="popisek" link="https://dominikstrnadel.eu/" linkName="link"/>
      <CardDynamic heading="dominik" description="hezci popisek" link="https://www.seznam.cz/" linkName="seznam.cz"/>
      <CardDynamic heading="skola" description="obchod" link="https://www.alza.cz/" linkName="alza.cz"/>
      <CardDynamic heading="github" description="videa" link="https://www.youtube.com/" linkName="youtube.com"/>
    </div>
  )
}

export default App
