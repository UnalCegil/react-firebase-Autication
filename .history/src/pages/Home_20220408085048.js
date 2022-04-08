import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    
    <img src={image} alt="wall paper" style={{
               position: absolute; 
               top: 0; 
               left: 0; 
               right: 0; 
               bottom: 0; 
               margin: auto; 
               min-width: 50%;
               min-height: 50%;,
              
            }}></img>
  </div>;
}
