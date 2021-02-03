import React, {useState} from 'react';
import MultiSelect from 'react-multi-select-component';

import {locationsList, categoryList, skillsList} from './lib/data';

const App = () => {

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState('');

  return (
    <div style={{display:'flex', backgroundColor: 'lightgray', height:'100vh', flexDirection:'column'}}>
      {/* <div style={{display: 'flex', flex:1, backgroundColor:'white', width:'80%', height: '20px', justifyContent:'center'}}> */}
      <div>
        <h4 style={{marginLeft:'7px'}}>Post a Job</h4>
        <hr style={{color:'darkgrey', backgroundColor:'darkgrey', height:2}} />
      </div>
      <div style={{flexDirection:'column', alignItems:'center', width:'70%', marginLeft:'10px'}}>
        <h3>Job Title</h3>
        <input
          style={{height:'31px', width: '99%', borderRadius: '5px', borderColor: 'lightgray', padding:'3px', borderWidth: '1px'}}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <h3>Select Locations</h3>
        <MultiSelect
          options={locationsList}
          value={selectedLocations}
          onChange={setSelectedLocations}
          hasSelectAll={false}
          labelledBy={"Select"}
        />
        <h3>Select Categories</h3>
        <MultiSelect
          options={categoryList}
          value={selectedCategories}
          onChange={setSelectedCategories}
          hasSelectAll={false}
          labelledBy={"Select"}
        />
        <h3>Select Skills</h3>
        <MultiSelect
          options={skillsList}
          value={selectedSkills}
          onChange={setSelectedSkills}
          hasSelectAll={false}
          labelledBy={"Select"}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;