import React, {useState} from 'react';
import { postData } from './api/postData';
import useDropdown from './Hooks/useDropdown';

import {locationsList, categoryList, skillsList} from './lib/data';

const App = () => {

  const [selectedSkills, SkillsDropdown, setSelectedSkills] = useDropdown(skillsList, [], false);
  const [selectedLocations, LocationsDropdown, setSelectedLocations] = useDropdown(locationsList, [], true);
  const [selectedCategories, CategoriesDropdown, setSelectedCategories] = useDropdown(categoryList, [], false);
  const [title, setTitle] = useState('');
  const [exp, setExp] = useState('');
  const [skillsArray, setSkillsArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [locationsArray, setlocationsArray] = useState([]);

  const joinLabels = (list = []) => {
    let arr = [];
    list.forEach((entry) => {
      arr.push(entry.label);
    });
    return arr;
  }

  const onPostJob = () => {
    setSkillsArray(joinLabels(selectedSkills));
    setCategoryArray(joinLabels(selectedCategories));
    setlocationsArray(joinLabels(selectedLocations));

    setSelectedSkills([]);
    setSelectedLocations([]);
    setSelectedCategories([]);

    let Title = title;
    let YearsOfExperience = exp;

    postData({
      Title,
      YearsOfExperience,
      MustHaveSkills: skillsArray,
      Locations: locationsArray,
      Category: categoryArray,
    }).catch(err => console.error(err));

    setTitle('');
    setExp('');
  }

  return (
    <div style={{display:'flex', backgroundColor: 'lightgray', height:'100vh', flexDirection:'column'}}>
      <div>
        <h4 style={{marginLeft:'7px'}}>Post a Job</h4>
        <hr style={{color:'darkgrey', backgroundColor:'darkgrey', height:2}} />
      </div>
      <div style={{flexDirection:'column', alignItems:'center', width:'45%', marginLeft:'10px'}}>
        <h3>Job Title</h3>
        <input
          style={{height:'31px', width: '99%', borderRadius: '5px', borderColor: 'lightgray', padding:'3px', borderWidth: '1px'}}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <h3>Experience(in years)</h3>
        <input
          style={{height:'31px', width: '20%', borderRadius: '5px', borderColor: 'lightgray', padding:'3px', borderWidth: '1px'}}
          value={exp}
          onChange={e => setExp(e.target.value)}
        />
        <h3>Select Locations</h3>
        <LocationsDropdown />
        <h3>Select Categories</h3>
        <CategoriesDropdown />
        <h3>Select Skills</h3>
        <SkillsDropdown />
      </div>
      <button style={{marginTop:20, marginLeft: 15, width:100, backgroundColor:'cyan', height: 35, borderRadius:7}} onClick={onPostJob}>
        Post Job
      </button>
    </div>
  );
}

export default App;