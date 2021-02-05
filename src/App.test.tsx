import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe("the app returns everything correctly", ()=>{

  it("renders the app without crashing", ()=>{
    render(<App/>)

  })

})
