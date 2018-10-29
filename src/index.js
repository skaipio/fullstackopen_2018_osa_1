import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{ props.nimi }</h1>
)

const Osa = (props) => (
  <p>{props.arvosana} {props.maara}</p>
)

const Statistiikka = (props) => {
  const {hyva, neutraali, huono} = props.palautteet
  return (
    <div>
      <Osa arvosana="hyvä" maara={hyva} />
      <Osa arvosana="neutraali" maara={neutraali} />
      <Osa arvosana="huono" maara={huono} />
    </div>
  )
}

const Palaute = (props) =>
  <div>
    <button onClick={props.lisaaHyva}>hyvä</button>
    <button onClick={props.lisaaNeutraali}>neutraali</button>
    <button onClick={props.lisaaHuono}>huono</button>
  </div>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  lisaaHyva = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1,
      neutraali: prevState.neutraali,
      huono: prevState.huono
    }))
  }

  lisaaNeutraali = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva,
      neutraali: prevState.neutraali + 1,
      huono: prevState.huono
    }))
  }

  lisaaHuono = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva,
      neutraali: prevState.neutraali,
      huono: prevState.huono + 1
    }))
  }

  render() {
    return (
      <div>
        <Otsikko nimi="anna palautetta" />
        <Palaute lisaaHyva={this.lisaaHyva} lisaaNeutraali={this.lisaaNeutraali} lisaaHuono={this.lisaaHuono} />
        <Otsikko nimi="statistiikka" />
        <Statistiikka palautteet={this.state} />        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)