import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{ props.kurssi }</h1>
)

const Osa = (props) => (
  <p>{props.nimi} {props.tehtavia}</p>
)

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.osa1.nimi} tehtavia={props.osa1.tehtavia} />
      <Osa nimi={props.osa2.nimi} tehtavia={props.osa2.tehtavia} />
      <Osa nimi={props.osa3.nimi} tehtavia={props.osa3.tehtavia} />
    </div>
  )
}

const Yhteensa = (props) => (
  <p>yhteensä {props.maara} tehtävää</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
      <Yhteensa maara={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)