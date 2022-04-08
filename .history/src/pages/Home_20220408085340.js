import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    
    <img src={image} alt="wall paper" style={{
              flex: 1,alignItems: 'center', justifyContent: 'center'
            }}></img>
  </div>;
}
