import React from 'react';
import SpaceInfoComponent from './SpaceInfoComponent';
class FilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // originalDataSaved : [],
            PanelList: [],
            dataLoad:false,
        }   
    }
    componentDidMount() {
        this.spaceXData();
    }
    spaceXData = () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
        .then(response => response.json())
        .then(json => {
            this.setState({
                PanelList: json,
                // originalDataSaved:json,
                dataLoad:true,
        })
        console.log("PanelList",this.state.PanelList);
        })
    }
    clickOnYearButton = (filterType,getValue) => { 
        console.log("filterType==",filterType);
        console.log("getValue==",getValue);
        if(filterType === 'Y'){
            // const filteredResultOfYear = this.state.originalDataSaved.filter(name => name.launch_year === getValue);
            // console.log("clickOnYearButton",filteredResultOfYear);
            // this.setState({
            //     PanelList: filteredResultOfYear
            // })
            fetch(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=${getValue}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    PanelList: json,
            })
            console.log("PanelList",this.state.PanelList);
            })
        }
        if(filterType === 'LAUNCH'){
            // const filteredResultOfLaunch = this.state.originalDataSaved.filter(name => name.launch_success === getValue);
            // console.log("clickOnYearButton",filteredResultOfLaunch);
            // this.setState({
            //     PanelList: filteredResultOfLaunch
            // })
        }
        if(filterType === 'LAND'){
            // const filteredResultOfLand = this.state.originalDataSaved.filter(name => name.land_success === getValue);
            // console.log("clickOnYearButton",filteredResultOfLand);
            // this.setState({
            //     PanelList: filteredResultOfLand
            // })
        }
        
    }
    render() {
        const { PanelList,dataLoad } = this.state;
        return<>
        <main className="main clearfix">
            <div className="filter">
                    <h3>Filters</h3>
                    <div className="filterinnerWrap">
                        <span>Launch Year</span>
                        <ul>
                            <li onClick={() => this.clickOnYearButton('Y','2006')}>2006</li>
                            <li onClick={() => this.clickOnYearButton('Y','2007')}>2007</li>
                            <li onClick={() => this.clickOnYearButton('Y','2008')}>2008</li>
                            <li onClick={() => this.clickOnYearButton('Y','2009')}>2009</li>
                            <li onClick={() => this.clickOnYearButton('Y','2010')}>2010</li>
                            <li onClick={() => this.clickOnYearButton('Y','2011')}>2011</li>
                            <li onClick={() => this.clickOnYearButton('Y','2012')}>2012</li>
                            <li onClick={() => this.clickOnYearButton('Y','2013')}>2013</li>
                            <li onClick={() => this.clickOnYearButton('Y','2014')}>2014</li>
                            <li onClick={() => this.clickOnYearButton('Y','2015')}>2015</li>
                            <li onClick={() => this.clickOnYearButton('Y','2016')}>2016</li>
                            <li onClick={() => this.clickOnYearButton('Y','2017')}>2017</li>
                            <li onClick={() => this.clickOnYearButton('Y','2018')}>2018</li>
                            <li onClick={() => this.clickOnYearButton('Y','2019')}>2019</li>
                            <li onClick={() => this.clickOnYearButton('Y','2020')}>2020</li>
                        </ul>
                    </div>
                    <div className="filterinnerWrap">
                        <span>Successful Launch</span>
                        <ul>
                            <li onClick={() => this.clickOnYearButton('LAUNCH','true')}>true</li>
                            <li onClick={() => this.clickOnYearButton('LAUNCH','false')}>false</li>
                        </ul>
                    </div>
                    <div className="filterinnerWrap">
                        <span>Successful Landing</span>
                        <ul>
                            <li onClick={() => this.clickOnYearButton('LAND','true')}>true</li>
                            <li onClick={() => this.clickOnYearButton('LAND','false')}>false</li>
                        </ul>
                    </div>
            </div>
            <div className="programList">
                <ul>
                    {/* {dataLoad === false ? <div>Loading....</div> : <div>
                        </div>} */}
                    { PanelList.length > 0 ?
                        PanelList.map((data,key)=>{
                            return(
                                <SpaceInfoComponent data={data} key={key}/>
                            )
                        }) : <div className="no-match">No Matches Found</div>
                    }
                    
                </ul>
            </div>
        </main>
        
        </>
    }
}
export default FilterPanel;