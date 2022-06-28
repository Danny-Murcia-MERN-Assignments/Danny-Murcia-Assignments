import React from 'react';

const Tabs = (props) => {


    const{tabList, setTabList, activeTab, setActiveTab} = props;

    const activateTab = (tabIndex)=>{
        setActiveTab(tabIndex);
    }



    const tabStyle = (index) => {
        if (index === activeTab){
            return "clickedTab";
        }
        else{
            return "nonClickedTab";
        }
    }


    return (
        <div style = {{display: "flex", justifyContent:"center"}}>
            {
                tabList.map((tab, index)=>(

                    <>
                    <p
                    className={tabStyle(index)}
                    onClick={()=>activateTab(index)}
                    >{tab.label}</p>                     
                    </>

                ))
            }
        </div>
    )

}

export default Tabs;