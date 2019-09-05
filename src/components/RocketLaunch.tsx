import React from 'react';
import LaunchListContainer from './LaunchList';
import LaunchProfileContainer from './LaunchProfile';


interface Props {

}

const RocketLaunch: React.SFC<Props> = (props: Props)=> {
    const [id, setId] = React.useState(2);
    const handleIdChange = React.useCallback(newId => {
      setId(newId);
    }, []);

    return (
        <div className="vbox">
           <LaunchListContainer handleIdChange={handleIdChange} />
           <LaunchProfileContainer id={id} />
        </div>
    );
}

export default RocketLaunch;