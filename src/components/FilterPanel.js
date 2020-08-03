import React from 'react';
import SpaceInfoComponent from './SpaceInfoComponent';
class FilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PanelList: [],
            dataLoad:true,
            year: null,
            launch: null,
            land:null,
        }   
    }
    componentDidMount() {
        this.spaceXData();
    }
    spaceXData = () => {
        const { year , launch, land } = this.state;
        let url = 'https://api.spacexdata.com/v3/launches?limit=100'
        if(year !== null) {
            url = url + `&launch_year=${year}`
        }
        if(launch !== null){
            url = url + `&launch_success=${launch}`
        } 
        if(land !== null){
            url = url + `&land_success==${land}`
        }
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                PanelList: json,
                dataLoad:false,
        })
        console.log("PanelList",this.state.PanelList);
        })
    }
    clickOnYearButton = (filterType,getValue) => { 
        this.setState({
            [filterType] : getValue,
            dataLoad: true
        }, () => {
            this.spaceXData()
        })
    }
    render() {
        const { PanelList,dataLoad ,year , launch , land } = this.state;
        return<>{
            dataLoad === false ? 
            <main className="main clearfix">
            <div className="filter">
                    <h3>Filters</h3>
                    <div className="filterinnerWrap">
                        <span>Launch Year</span>
                        <ul>
                            <li className={year === 2006 ? "active": ''} onClick={() => this.clickOnYearButton('year',2006)}>2006</li>
                            <li className={year === 2007 ? "active": ''} onClick={() => this.clickOnYearButton('year',2007)}>2007</li>
                            <li className={year === 2008 ? "active": ''} onClick={() => this.clickOnYearButton('year',2008)}>2008</li>
                            <li className={year === 2009 ? "active": ''} onClick={() => this.clickOnYearButton('year',2009)}>2009</li>
                            <li className={year === 2010 ? "active": ''} onClick={() => this.clickOnYearButton('year',2010)}>2010</li>
                            <li className={year === 2011 ? "active": ''} onClick={() => this.clickOnYearButton('year',2011)}>2011</li>
                            <li className={year === 2012 ? "active": ''} onClick={() => this.clickOnYearButton('year',2012)}>2012</li>
                            <li className={year === 2013 ? "active": ''} onClick={() => this.clickOnYearButton('year',2013)}>2013</li>
                            <li className={year === 2014 ? "active": ''} onClick={() => this.clickOnYearButton('year',2014)}>2014</li>
                            <li className={year === 2015 ? "active": ''} onClick={() => this.clickOnYearButton('year',2015)}>2015</li>
                            <li className={year === 2016 ? "active": ''} onClick={() => this.clickOnYearButton('year',2016)}>2016</li>
                            <li className={year === 2017 ? "active": ''} onClick={() => this.clickOnYearButton('year',2017)}>2017</li>
                            <li className={year === 2018 ? "active": ''} onClick={() => this.clickOnYearButton('year',2018)}>2018</li>
                            <li className={year === 2019 ? "active": ''} onClick={() => this.clickOnYearButton('year',2019)}>2019</li>
                            <li className={year === 2020 ? "active": ''} onClick={() => this.clickOnYearButton('year',2020)}>2020</li>
                        </ul>
                    </div>
                    <div className="filterinnerWrap">
                        <span>Successful Launch</span>
                        <ul>
                            <li  className={launch === true ? "active": ''} onClick={() => this.clickOnYearButton('launch',true)}>true</li>
                            <li className={launch === false ? "active": ''} onClick={() => this.clickOnYearButton('launch',false)}>false</li>
                        </ul>
                    </div>
                    <div className="filterinnerWrap">
                        <span>Successful Landing</span>
                        <ul>
                            <li className={land === true ? "active": ''} onClick={() => this.clickOnYearButton('land',true)}>true</li>
                            <li className={land === false ? "active": ''} onClick={() => this.clickOnYearButton('land',false)}>false</li>
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
        </main>: <div className="dataLoading"> Data Loading....</div>
       
        }
         
        </>
    }
}
export default FilterPanel;