import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({nimi}) => (
  <h1>{ nimi }</h1>
)

const Osa = ({arvosana, maara}) => (
  <p>{arvosana} {maara}</p>
)

const Statistiikka = ({hyva = 0, neutraali = 0, huono = 0}) => {
  const yhteensa = hyva + neutraali + huono
  const keskiarvo = yhteensa !== 0 ? (hyva - huono) / yhteensa : 0
  const positiivisiaProsentti = yhteensa !== 0 ? hyva / yhteensa : 0
  return (
    <div>
      <Osa arvosana="hyvä" maara={hyva} />
      <Osa arvosana="neutraali" maara={neutraali} />
      <Osa arvosana="huono" maara={huono} />
      <Osa arvosana="keskiarvo" maara={keskiarvo} />
      <Osa arvosana="positiivisia" maara={positiivisiaProsentti + " %"} />
    </div>
  )
}

const Palaute = (props) =>
  <div>
    <button onClick={() => props.lisaaArvosana('hyva')}>hyvä</button>
    <button onClick={() => props.lisaaArvosana('neutraali')}>neutraali</button>
    <button onClick={() => props.lisaaArvosana('huono')}>huono</button>
  </div>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'hyva': 0,
      'neutraali': 0,
      'huono': 0
    }
  }

  lisaaArvosana = (arvosana) => {
    this.setState((prevState) => ({
      [arvosana]: prevState[arvosana] + 1
    }))
  }

  render() {
    return (
      <div>
        <Otsikko nimi="anna palautetta" />
        <Palaute lisaaArvosana={this.lisaaArvosana} />
        <Otsikko nimi="statistiikka" />
        <Statistiikka hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)