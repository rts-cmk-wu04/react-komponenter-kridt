import { useEffect, useState } from 'react';
import './App.css';
import Collections from './components/Collections';

import Outdoor from './components/Outdoor';
import Service from './components/Service';
import Travel from './components/Travel';

function App() {
  var [travelContent, setTravelContent] = useState([]);
  var [travelContent2, setTravelContent2] = useState([]);
  var [travelContent3, setTravelContent3] = useState([]);
  var [travelContent4, setTravelContent4] = useState([]);


  useEffect(function() {
    fetch("./travel.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      setTravelContent(data);
    });
  }, []); 
 
  useEffect(function() {
    fetch("./outdoor.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      setTravelContent2(data);
    });
  }, []); 

  useEffect(function() {
    fetch("./service.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      setTravelContent3(data);
    });
  }, []); 

  useEffect(function() {
    fetch("./collections.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      setTravelContent4(data);
    });
  }, []); 
  useEffect(function() {
    fetch("must_see.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){

    });
  }, []); 

  return (
    <div className="App">
       {travelContent.map(content => <Travel image={content.image} title={content.title} text={content.text} category={content.category} />)}
       {travelContent2.map(content2 => <Outdoor image={content2.image} img1={content2.img1} img2={content2.img2} img3={content2.img3} title={content2.title} text={content2.text} category={content2.category} />)}
       {travelContent3.map(content3 => <Service title_delivery={content3.title_delivery} text_delivery={content3.text_delivery} logo_delivery={content3.logo_delivery} title_parcels={content3.title_parcels} text_parcels={content3.text_parcels} logo_parcels={content3.logo_parcels}  title_quality={content3.title_quality} text_quality={content3.text_quality} logo_quality={content3.logo_quality}  title_customer={content3.title_customer} text_customer={content3.text_customer} logo_customer={content3.logo_customer} />)}
       {travelContent4.map(content4 => <Collections collection1={content4.collection1} title={content4.title} by={content4.by} img1={content4.img1} profilePic={content4.profilePic} collection2={content4.collection2} title_2={content4.title_2} by_2={content4.by_2} img1_2={content4.img1_2} profilePic_2={content4.profilePic_2} collection3={content4.collection3} title_3={content4.title_3} by_3={content4.by_3} img1_3={content4.img1_3} profilePic_3={content4.profilePic_3} />)}

    </div>
  );
}

export default App;
