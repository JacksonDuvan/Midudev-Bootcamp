import './App.css';

const Mensaje = props => {
  return <h1 style={{ color: props.color }}>{props.message}</h1>
}

const App = () => {
  const mensagge = 'Hola Mundo'
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color="blue" message='en un curso de'/>
      <Mensaje color='yellow' message='React'/>
    </div>
  );
}

export default App;
