import React from 'react';
const SpaceInfoComponent = (props) => {
    const { data,key } = props;
    return (
        <li key={key}>
            <div className="imageBox"><img src={data.links.mission_patch_small} alt="aircraftImage" /></div>
            <div className="boxContent">
                <h5>{data.mission_name}</h5>
                <div className="missionIds">
                    <strong>Mission Ids:</strong>
                    <ul>
                        {data.mission_id.length > 0 ? data.mission_id.map((id,index)=>{
                            return(
                            <li key={index}>{id}</li>
                            )
                        }) : <li>no mission id</li>}
                    </ul>
                </div>
                <div className="listStyle clearfix">
                    <strong>Launch Year:</strong>
                    <span>{data.launch_year}</span>
                </div>
                <div className="listStyle clearfix">
                    <strong>Successful Launch: </strong>
                    <span>{data.launch_success ? "True" : "False"}</span>
                </div>
                <div className="listStyle clearfix">
                    <strong>Successful Landing:</strong>
                    <span>{data.launch_success ? "True" : "False"}</span>
                </div>
            </div>
        </li>

    )
}
export default SpaceInfoComponent;