import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [length, setlength] = useState(8);
	const [numAllowed, setnumAllowed] = useState(false);
	const [charAllowed, setcharAllowed] = useState(false);
	const [password, setpassword] = useState("");

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
      let pass="";
      let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const special="!@#$%^&*()_-+=[]{}|;:,.<>?/";
      const num="0123456789";

      if(numAllowed)
      str+=num;

      if(charAllowed)
      str+=special;

      for(let i=0;i<length;i++)
      {
        let ind=Math.floor(Math.random()*str.length);
        pass+=str[ind];
      }

      setpassword(pass);
  }, [length,numAllowed,charAllowed,setpassword])


  const copyPasswordToClipboard=()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])

  

	return (
		<>
			<h1 className="text-center m-2 text-bold text-2xl ">
				Password generator
			</h1>

		<div className="h-[20vh] p-4 flex flex-col gap-5 bg-slate-800 rounded-lg text-slate-500 font-semibold">
    <div className="flex justify-center gap-4">
				<input
					className="border-2 border-black rounded px-3 py-1" readOnly
					type="text" value={password} ref={passwordRef}
				/>
				<button className="bg-black p-2 rounded-lg" 
          onClick={copyPasswordToClipboard}
        >Copy</button>
			</div>

			<div className="flex justify-center gap-6">
				<div>
					<input type="range" min="5" max="20" value={length} 
            onChange={(e)=>{
                setlength(e.target.value)
            }}  
          />
					<label className="mx-1">{length}</label>
				</div>
				<div>
					<input type="checkbox" 
            id="charInput"
            defaultChecked={charAllowed}
            onClick={()=>{
              setcharAllowed((flag)=>!flag)
              console.log(charAllowed)
            }}
          />
					<label htmlFor="charInput" className="mx-1">Characters</label>
				</div>
				<div>
					<input type="checkbox" 
            defaultChecked={numAllowed}
            id="numInput"
            onClick={()=>{
              setnumAllowed((flag)=>!flag)
            }}
          />
					<label htmlFor="numInput" className="mx-1">Number</label>
				</div>
			</div>
    </div>
		</>
	);
}

export default App;
