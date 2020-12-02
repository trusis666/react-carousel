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

function App() {
    return (
        <div>
            <h1 className="header">Carousel example</h1>
            <Carousel
                showPagination
                showArrows
                autoPlay
            >
                <div className="slide-item">
                    <h1>Slide 1</h1>
                </div>
                <div className="slide-item">
                    <img src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?cs=srgb&dl=pexels-lina-kivaka-1741205.jpg&fm=jpg" width="400px" />
                </div>
                <div className="slide-item">
                    <table>
                        <tbody>
                            <tr>
                                <th>Country</th>
                                <th>City</th>
                            </tr>
                            <tr>
                                <td>Latvia</td>
                                <td>Riga</td>
                            </tr>
                            <tr>
                                <td>Estonia</td>
                                <td>Tallinn</td>
                            </tr>
                            <tr>
                                <td>Lithuania</td>
                                <td>Vilnius</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Carousel>
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