import image from './img/img.jpg'

export default function Home() {
  return <div className='container'>
    
    <img src={image} alt="wall paper" style={{
              backgroundRepeat: 'no-repeat',
              width:'500px'
            }}></img>
  </div>;
}
