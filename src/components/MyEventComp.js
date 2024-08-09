import {Button,Card,CardActionArea,CardContent,CardMedia,CardActions}  from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import staticdata from "../shared/constant/constantData";


const MyEventComp = ()=>{

    const greet = ()=>{
        window.alert("Good Morning Friends");
    }
    const welcome = (comp,emp)=>{
      window.alert(`Welcome You ${emp} In ${comp}`);
    }

    return (<div>
        <h2>This is My Event Component</h2>
       {/* <button type="button" onClick={()=>greet()}>call greet methode</button> */}

       <Button variant="contained" onClick={()=>greet()}>call greet methode</Button>{" "}
       <Button variant="outlined" onClick={()=>greet()}>call greet methode</Button>
       <h2 onMouseOver={()=>welcome("Opteamix","Pooja")}>Hover on me </h2>
       <hr />
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={staticdata.dosa}
          alt="green iguana"
        />
        <CardContent>
        
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="success">
          Share
        </Button>
      </CardActions>
    </Card>

    <p> <AccountBalanceIcon></AccountBalanceIcon>  Bank</p>
     
    </div>)
}

export default MyEventComp;