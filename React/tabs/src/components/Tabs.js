import React, { useState } from 'react'
import './Tabs.css'

function Tabs( props ) {
    const {tabs} = props;
    const [ tabList, setTabList ] = useState( tabs );

    function selectTab(e) {
        setTabList( tabList.map( (tab, i) => {
            console.log(e.target)
            if (e.target.name == i) { 
                tab.selected = true 
            } else { 
                tab.selected = false 
            }
            return tab
        }))
    }

    return (
        <div>
            <div>
            {
                tabList.map( (tab, i) => 
                    tab.selected?
                    <button key={i} name={i} onClick={ selectTab } className="select">{ tab.name }</button>
                    :<button key={i} name={i} onClick={ selectTab } className="unselect">{ tab.name }</button>
                )
            }
            </div>
            {
                tabList.map( (tab, i) =>
                    tab.selected?
                    <p className="content" key={i}>{ tab.content }</p>
                    :null
                )
            }
        </div>
    );
}
export default Tabs;