import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
function Chefify() {
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
          width: '1200px',
          height:'1000px'
      }}>
          <div className="Header" style={{ backgroundColor: 'white', gridArea: 'Header',display:'flex',justifyContent:"center",alignItems:"center"}}>
              <div style={{display:'flex',flex:4}}>
                <img src={chefify} alt=""/>
                <input type="text" placeholder="cakescasca" style={{backgroundColor:'lightgray',borderRadius:15,marginLeft:'20px',width:'100%',paddingLeft:20}}/>
              </div>
              <div style={{flex:4, justifyContent:"space-around", display:"flex"}}>
                <a href="#" style={{fontSize:15}}>What to cook</a>
                <a href="#" style={{fontSize:15}}>Recipes</a>
                <a href="#" style={{fontSize:15}}>Ingredients</a>
                <a href="#" style={{fontSize:15}}>Occassions</a>
                <a href="#" style={{fontSize:15}}>About us</a>
              </div>
              <div style={{flex:2}}>
                <button>Your Recipe Box</button>
                <img src={avatar} alt=""/>
              </div>
          </div>
          <div className="Menu" style={{ backgroundColor: 'yellow', gridArea: 'Menu' }}>
              <p>Menu</p>
          </div>
          <div className="Content" style={{ backgroundColor: 'green', gridArea: 'Content' }}>
              <p> Content</p>
          </div>
          <div className="Footer" style={{ backgroundColor: 'blue', gridArea: 'Footer' }}>
              <p>Footer</p>
          </div>
      </div>
    );
  }
  
  export default Chefify;
  