

const MyEventComp = ()=>{

    const greet = ()=>{
        window.alert("Good Morning Friends");
    }
    const welcome = (comp,emp)=>{
      window.alert(`Welcome You ${emp} In ${comp}`);
    }

    return (<div>
        <h2>This is My Event Component</h2>
       <button type="button" onClick={()=>greet()}>call greet methode</button>
       <h2 onMouseOver={()=>welcome("Opteamix","Pooja")}>Hover on me </h2>
     
    </div>)
}

export default MyEventComp;