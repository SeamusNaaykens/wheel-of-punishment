import './App.scss';
import WheelComponent from 'react-wheel-of-prizes';


function App() {

  const segments = [
    'Take a shot',
    'Pepper shot',
    'Get punched',
    'Putter round',
    'Marshmellow mouth',
    'FOOOOREE!!!',
    'Strip lol',
    'Finish your drink'

  ]

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }

  return (
    <div className='wheel-of-punishment'>
      <h1 className='wheel-of-punishment__title'>THE WHEEL OF PUNISHMENT</h1>
      <WheelComponent className="wheel-of-punishment__wheel-component"
        segments={segments}
        segColors={segColors}
        winningSegment='won 10'
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Get Fucked'
        isOnlyOnce={false}
        size={250}
        upDuration={100}
        downDuration={1000}
        fontFamily='Arial'

      />
    </div>
  );
}

export default App;
