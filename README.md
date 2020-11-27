# React Carousel Component

## Installation

Install all necessary packages
```
npm install
```

To start the development server
```
npm run start
```

## Usage

```
import React from 'react';
import Carousel from './Components/Carousel';

const data = [{
    id: 1,
    title: "Slide 1",
    bgColor: "#666"
}, {
    id: 2,
    title: "Slide 2",
    bgColor: "#874"
},{
    id: 3,
    title: "Slide 3",
    bgColor: "#666444"
},
{
    id: 4,
    title: "Slide 4",
    bgColor: "#454333"
}];

function App() {
    return (
        <div>
            <h1 className="header" >Carousel example</h1>
            <Carousel
                data={data}
                showPagination
                showArrows
                autoPlay
            />
        </div>
    );
}
export default App;
```

### Props

| Name | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| data  | array | null  | Data for slides |
| showPagination  | boolean  | false  | Carousel pagination  |
| showArrows  | boolean  | false  | Carousel navigation arrows |
| autoPlay  | boolean  | false  | Carousel auto play carousel |