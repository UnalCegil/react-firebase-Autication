import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    
    <img src={image} alt="wall paper" style={{
              resizeMode: "cover",
              height: 662,
              width: 1485,
            }}></img>
  </div>;
}
