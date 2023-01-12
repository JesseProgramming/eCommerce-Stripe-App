export function Home(){
    return (
        <>
        <h1 style={{color:"white", fontSize:"4em", display:"flex", justifyContent:"center", textAlign:"center", fontWeight:"bold", marginTop:"7%"}}>Animation Domination</h1>
        <h2 style={{color:"white", fontSize:"1.5em", display:"flex", justifyContent:"center", textAlign:"center", fontWeight:"bold"}}>Your home to stream all things animated and support your favorite creators!</h2>
        <button style={{color:"white", fontSize:"2em", display:"flex", justifyContent:"center", textAlign:"center", fontWeight:"bold", backgroundColor:"transparent", border:"solid white 3px", borderRadius:"45px", padding:"10px 25px", margin:"auto", marginTop:"8%"}}>Stream Now!</button>
        <div className="background-container">
            <img src="../public/imgs/home/home-splash-inside-job.png" style={{width: "100%", height:"100vh", position:"absolute", top:"0", left:"0", zIndex:"-5", filter:"brightness(15%)"}}></img>
        </div>
        </>
    )
}