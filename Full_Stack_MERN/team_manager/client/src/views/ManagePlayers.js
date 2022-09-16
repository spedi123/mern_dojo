import {useState, useEffect} from 'react'
export const ManagePlayers = (props) =>  {
    const [tabs, setTabs] = useState ([
        {
            type: 'game_1',
            title: 'Game 1',
            path: '/status/game/1',
            active: true
        },
        {
            type: 'game_2',
            title: 'Game 2',
            path: '/status/game/2',
            active: false
        },
        {
            type: 'game_3',
            title: 'Game 3',
            path: '/status/game/3',
            active: false
        },
    ])

    const [gameNumber, setGameNumber] = useState('');
    const [gameIndex, setGameIndex] = useState('');
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        let updatedTabs = [...tabs]
        let pathname = location.pathname
            let pathIndex = _.toNumber(pathname.slice(pathname.lastIndexOf('/') + 1));
            
        updatedTabs.map((tab,index) =>
          (pathIndex-1 === index) 
          ? 
          tab.active = true
          :
          tab.active = false
        )
        setTabs(updatedTabs)
    
        if(pathIndex === 1) {
                setGameNumber('gameOne')
          setGameIndex('1')
        }
        else if(pathIndex === 2) {
          setGameNumber('gameTwo')
          setGameIndex('2')
        }
            else if(pathIndex === 3) {
                setGameNumber('gameThree')
          setGameIndex('3')
        }
            else {
                history.push("/status/game/1")
        }
      }, [location])
}



export default ManagePlayers;