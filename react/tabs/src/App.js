
import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Tabs from './components/Tabs';

function App() {

  const [tabList, setTabList] = useState([
    {
      label: "Tab 1",
      content: "Tab 1 Content"
    }, 
    {
      label: "Tab 2",
      content: "Tab 2 Content"
    }, 
    {
      label: "Tab 3",
      content: "Tab 3 Content"
    }
  ]);


  const [activeTab, setActiveTab] = useState(0);


  return (

    <div className="App">

      <Tabs tabList={tabList} setTabList={setTabList} activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
      {/* Creating a key, tabText to contain: tabList is the list of 'tab' objects, and activeTab is a "selector" that gives us a value of 0, 1 or 2 to select one of the three tab objects. using ".content" allows us to access the value of the "content" key inside each tab object. 
      */}
      <Display tabContent = {tabList[activeTab].content}></Display>

    </div>
  );
}

export default App;
