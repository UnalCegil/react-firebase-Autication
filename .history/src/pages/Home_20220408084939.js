import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    
    <img src={image} alt="wall paper" style={{
              resizeMode: "no-repeat center center fixed",
              
            }}></img>
  </div>;
}
