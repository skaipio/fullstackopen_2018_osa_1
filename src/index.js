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
      <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
      <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
      <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
  )
}

const Yhteensa = (props) => (
  <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)