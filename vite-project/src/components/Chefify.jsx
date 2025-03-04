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
import chefifywhite from '../assets/chefifywhite.png'
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
          gridGap:0,
          width: '1440px',
          height:'953px'
      }}>
          <div className="Header" style={{ backgroundColor: 'white', gridArea: 'Header',display:'flex',justifyContent:"center",alignItems:"center",border:'3px solid gray',padding:'10px 30px'}}>
              <div style={{display:'flex',flex:4}}>
                <img src={chefify} alt=""/>
                <input type="text" placeholder="cakescasca" style={{backgroundColor:'#F3F4F6FF',borderRadius:15,border:0,marginLeft:'20px',width:'100%',paddingLeft:20}}/>
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
          <div className="Menu" style={{gridArea: 'Menu',padding:'20px 0',display:'flex',justifyContent:'end',borderLeft:'3px solid gray'}}>
            <div style={{border:'1px solid',borderRadius:5,display:'flex',flexDirection:'column',justifyContent:'center',padding:30}}>
              <div style={{display:'flex',alignItems:"center"}}>
                <img src={list}/>
                <p style={{textAlign:'start',fontWeight:'bold',fontSize:20,margin:0}}>FILTERS</p>
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
              <div style={{border:'1px solid',margin:'0 -30px',borderBottom:0}}>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{textAlign:'start',fontWeight:'bold'}}>Time</p>
                <span>icon</span>
              </div>
              <div style={{display:'flex',justifyContent:"space-evenly"}}>
                <p>30 mins</p>
                <p>50 mins</p>
              </div>
              <img src={slider} alt=""/>
              <div style={{border:'1px solid',margin:'40px -30px 0',borderBottom:0}}>
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
              <div style={{margin:'20px -30px 0',border:'1px solid',borderBottom:0,marginTop:30}}>
              </div>
              <div style={{display:"flex",justifyContent:"center",margin:'10px -30px 0',padding:'20px 0'}}>
                <button style={{backgroundColor:'#F44B87FF',color:'white',border:0,padding:'10px 20px', width:'80%'}}>Apply</button>
              </div>
              
            </div>
          </div>
          <div className="Content" style={{ gridArea: 'Content',borderRight:'3px solid gray' }}>
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
          <div className="Footer" style={{ backgroundColor: 'black', gridArea: 'Footer',padding:40,display:'flex',justifyContent:"center",borderTopLeftRadius:10,borderTopRightRadius:10}}>
              <div style={{display:'flex',flex:3,flexDirection:'column',alignItems:'start',justifyContent:"space-between"}}>
                <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'start'}}>
                  <p style={{fontSize:20,fontWeight:"bold",color:'white'}}>About us</p>
                  <p style={{color:"white",textAlign:'start'}}>Welcome to our website, a wonderful place to explore and learn how to cool like a pro</p>
                    <div style={{display:'flex',gap:10,width:'100%'}}>
                      <input type='text' style={{flex:1,border:0,borderRadius:10,backgroundColor:'white',padding:10}} placeholder="Enter your email"/>
                      <button style={{border:0,borderRadius:10, backgroundColor:'#F44B87FF',color:"white"}}>Send</button>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20}}>
                  <img src={chefifywhite}/>
                  <p style={{color:'white'}}>2021 Chefify Company</p>
                  <a href="#" style={{color:'white'}}>Term of Servical Privacy Policy</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Learn More</p>
                  <a href='#' style={{color:'white'}}>Our Cooks</a>
                  <a href='#' style={{color:"white"}}>See Our Features</a>
                  <a style={{color:'white'}}>FAQ</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Shop</p>
                  <a href='#' style={{color:'white'}}>Gift Subscription</a>
                  <a href='#' style={{color:"white"}}>Send US Feedback</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',gap:25,alignItems:"start"}}>
                <p style={{margin:0,fontSize:20,fontWeight:"bold",color:"white"}}>Recipes</p>
                <a href="#" style={{color:'white'}}>What to Cook This Week</a>
                <a href="#" style={{color:'white'}}>Pasta</a>
                <a href="#" style={{color:'white'}}>Dinner</a>
                <a href="#" style={{color:'white'}}>Healthy</a>
                <a href="#" style={{color:'white'}}>Vegetarian</a>
                <a href="#" style={{color:'white'}}>Vegan</a>
                <a href="#" style={{color:'white'}}>Chirtmas</a>
              </div>
          </div>
      </div>
    );
  }
  
  export default Chefify;
  