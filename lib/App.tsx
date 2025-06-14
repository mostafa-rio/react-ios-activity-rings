import ActivityRingsChart from './components/activity-rings'
// import 'react-ios-activity-rings-chart/dist/react-ios-activity-rings-chart.css'
function App() {
  return (
    <div>
      <ActivityRingsChart  progress={[0.9, 0.8, 0.7]}  />
    </div>
  )
}

export default App
