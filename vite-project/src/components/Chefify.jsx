import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import list from '../assets/list_filter.png';
import slider from '../assets/slider.png'
import rating5 from '../assets/rating_5.png'
import rating4 from '../assets/rating_4.png'
import rating3 from '../assets/rating_3.png'
import rating2 from '../assets/rating_2.png'
import rating1 from '../assets/rating_1.png'
import nothing from '../assets/nothing.png'
function Chefify() {
  const style={
    JustifyCenter:{
      display:'flex',
      justifyContent:"space-around",
      alignItems:"space-around"
    }
  }

    return (
      <div style={{
          display: 'grid',
          gridTemplateAreas: `
            "Header Header"
            "Menu Content"
            "Footer Footer"`,
          gridTemplateColumns: '2fr 4fr',
            gridTemplateRows: '1fr 15fr 4fr',
          gridGap: '10px',
          width: '1440px',
          height:'953px'
      }}>
          <div className="Header" style={{ backgroundColor: 'white', gridArea: 'Header',display:'flex',justifyContent:"center",alignItems:"center"}}>
              <div style={{display:'flex',flex:4}}>
                <img src={chefify} alt=""/>
                <input type="text" placeholder="cakescasca" style={{backgroundColor:'F3F4F6FF',borderRadius:15,border:0,marginLeft:'20px',width:'100%',paddingLeft:20}}/>
              </div>
              <div style={{flex:4, justifyContent:"space-around", display:"flex"}}>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>What to cook</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Recipes</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Ingredients</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Occassions</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>About us</a>
              </div>
              <div style={{
                display:'flex',
                justifyContent:"space-around",
                alignItems:"center",
                flex:2
              }}>
                <button style={{color:'#F44B87FF',backgroundColor:'#FEF0F5FF'}}>Your Recipe Box</button>
                <img src={avatar} alt=""/>
              </div>
          </div>
          <div className="Menu" style={{gridArea: 'Menu' }}>
            <div style={{border:'1px solid',borderRadius:5,display:'flex',flexDirection:'column',justifyContent:'center',padding:10}}>
              <div style={{display:'flex',alignItems:"center"}}>
                <img src={list}/>
                <p style={{textAlign:'start',fontWeight:'bold',fontSize:20}}>FILTERS</p>
              </div>
              <div style={{display:'flex', justifyContent:'space-between',alignItems:"center"}}>
                <p style={{textAlign:'start',fontWeight:'bold'}}>Types</p>
                <span>icon</span>
              </div>

              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Pan-fried</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Stir-fried</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Grilled</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Roasted</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Sauteed</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Baked</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Steamed</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Stewed</span>
                </div>
              </div>
              <div style={{border:'1px solid',margin:'0 -10px',padding:10}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <p style={{textAlign:'start',fontWeight:'bold'}}>Time</p>
                  <span>icon</span>
                </div>
                <div style={{display:'flex',justifyContent:"space-evenly"}}>
                  <p>30 mins</p>
                  <p>50 mins</p>
                </div>
                <img src={slider} alt=""/>
              </div>
              <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
                <p style={{fontWeight:'bold'}}>Rating</p>
                <span>Icon</span>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating5}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating4}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating3}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating2}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating1}/>
              </div>
              <div style={{margin:'20px -10px 0',border:'1px solid'}}>
              </div>
              <div style={{display:"flex",justifyContent:"center",margin:'10px -10px 0',padding:'20px 0'}}>
                <button style={{backgroundColor:'#F44B87FF',color:'white',border:0,padding:'10px 20px', width:'80%'}}>Apply</button>
              </div>
              
            </div>
          </div>
          <div className="Content" style={{ gridArea: 'Content' }}>
              <p style={{fontWeight:"bolder",fontSize:22}}>Sorry, no results were found for “cakescascsa”</p>
              <img src={nothing} alt=""/>
              <p style={{fontWeight:'bold'}}>We have all your Independence Day sweets covered.</p>
              <div style={{display:'flex', justifyContent:"center",alignItems:"center",gap:10}}>
                <button style={{border:0,borderRadius:20,color:'',backgroundColor:'#FEF0F5FF'}}>Sweet Cake</button>
                <button style={{border:0,borderRadius:20,color:'',backgroundColor:'#F5F0FEFF'}}>Black Cake</button>
                <button style={{border:0,borderRadius:20,color:'',backgroundColor:'#FEF0F5FF'}}>Pozole Verder</button>
                <button style={{border:0,borderRadius:20,color:'',backgroundColor:'#EEFCFFFF'}}>Healthy food</button>
              </div>
          </div>
          <div className="Footer" style={{ backgroundColor: 'black', gridArea: 'Footer',marginTop:50}}>
              <div style={{display:'flex',flex:2,flexDirection:'column'}}>

              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                
              </div>
          </div>
      </div>
    );
  }
  
  export default Chefify;
  