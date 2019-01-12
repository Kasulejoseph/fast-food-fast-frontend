// import React from 'react'
// import ReactDOM from 'react-dom'
// export default class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         time: this.props.time
//       };
//       this.update = this.updateTime.bind(this);
//     }
//     render() {
//       var time = this.formatTime(this.state.time);
//       return (<h1>{ time.hours } : { time.minutes } : { time.seconds }</h1>);
//     }
//     componentDidMount() {
//       this.interval = setInterval(this.update, 1000);
//     }
//     componentWillUnmount() {
//       clearInterval(this.interval);
//     }
//     formatTime(time) {
//       var [hours, minutes, seconds] = [
//         time.getHours(),
//         time.getMinutes(),
//         time.getSeconds()
//       ].map(num => num < 10 ? '0' + num : num);
//       return {
//         hours,
//         minutes,
//         seconds
//       };
//     }
//     updateTime() {
//       this.setState({
//         time: new Date(this.state.time.getTime() + 1000)
//       });
//     }
//   };
//   const rest = {}
//   ReactDOM.render(<Clock time={ new Date() }/>, rest);
