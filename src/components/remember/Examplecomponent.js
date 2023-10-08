import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'


export function RemuserComponent(props) {
  const location = useLocation();
  const theparams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (

    <div>RemuserComponent 
      <h1>This is the home page</h1>
      <Link to="/example1">Click to view our about page</Link>
      <Link to="/example3">Click to view our contact page</Link>
      
      <pre>{theparams?.name}</pre></div>
  )
}



export const ExampleComponent = ({ text }) => {
    return (
        <div>
        Example Component: { text }
    <button>test < /button>
        < /div>
  )
};

export const TestComponent = () => {
    return (
        <div>
        Second
    <button>test < /button>
        < /div>
  )
}

//export default ExampleComponent;
