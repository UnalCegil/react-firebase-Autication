import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    <div style={{
              resizeMode: "cover",
              height: 100,
              width: 200
            }}></div>
    <img src={image} alt="wall paper"></img>
  </div>;
}
