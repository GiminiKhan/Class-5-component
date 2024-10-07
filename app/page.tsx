
"use client"
export default function Home(){

function sayHello(){
  console.log("Hello");
}
  return(
    <div className="flex-justify-center items-center h-screen " >
    <button onClick={sayHello}  className="bg-blue-400 hover:bg-yellow-500 text white font-bold py-2 px-4 rounded" >
      <h1 className="text-lg" >
        Click Me 
        </h1>
    </button>
    </div>
  );
}



