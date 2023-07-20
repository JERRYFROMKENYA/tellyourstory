import "./write.css";
import {FcAddImage} from "react-icons/fc";
import {useState} from "react";
import {SearchComponent, Texteditor} from "../../components/index.jsx";
import {Avatar, Chip} from "@mui/material";


export default function Write() {
  const [musicAdded,setMusicAdded]=useState([])
  const [mainContent, setMainContent]=useState()
  const removeMusic = (xid) => {
    setMusicAdded(current=> current.filter((music) => music.name !== xid));
    console.log(musicAdded, xid)
  };
    // console.log(musicAdded.length)
  return (
<>
    <div className="writeConatiner write">

      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon"><FcAddImage></FcAddImage></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />

          <input
            className="writeInput title"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
          <div className="writeImg" style={{height:"20px", marginBottom:"12px",zIndex:1}}>
              <div className={""}>
                  <SearchComponent setMusicAdded={setMusicAdded}/>

              </div>
          </div>
        <div className={"musicContainer"}>
          {musicAdded.length!==0 && musicAdded.map((music, id)=>{
            return(
                <div className="musicItem">
                  <Chip  color="success"
                         label={music.name+" by "+music.artist}
                         onDelete={() => {
                           removeMusic(music.name)
                           console.log(music)
                         }}
                         avatar={<Avatar src={music.image} />} />
                </div>


            )
          })}
        </div>
        <div className="writeFormGroup">
          <Texteditor MainContent={mainContent} setMC={setMainContent}></Texteditor>
        </div>


        <button className="writeSubmit" type="submit">
          Publish
        </button>

      </form>
    </div>
    </>
  );
}
