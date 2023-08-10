import './Carrusel.css';
// import banner from '../../images/banner1.png'
// import foto1 from '../../images/foto1.png'
// import { Carousel } from 'antd';


// creo que este es de boostrap y estoy trabajando con el de antd - sino sirve, eliminar

//Puedo hacer aquí que los usuarios puedan editar esta imagen? y el enlace aquí?

function Carrusel({ images }) {
    // const contentStyle = {
    // display: 'flex',
    // flexDirection: 'colum',
    // flexFlow: "row wrap",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: "10px",
    // maxWidth: '100%',
    // maxHeight: '100%',
    // objectFit: 'cover',
    // objectPosition: 'center center',
    // height: "100%",
    // width: "100%",
    // color: "#131313",
    // lineHeight: "160px",
    // textAlign: "center",
    // background: "#364d79",
    // alignItems: "center",
    // border: '5px solid blue',

    // };
    return (
        <div className='container'>
            <button>←</button>
            {images.map((image, index) => {
                return <img key={index} src={image} alt='images' />;
            })}
            <button>→</button>
        </div>


        // < div className='pepe'>
        //     <Carousel autoplay className='carrusel-box'>
        //         <div id='box1'>
        //             <a className='images' href='/'>
        //                 <img className='img1' src={foto1} alt='logo'></img>
        //             </a>
        //         </div>
        //         <div>
        //             <a className='images' href='/'>
        //                 <img style={contentStyle} className='img2' src={banner} alt='logo'></img>
        //             </a>
        //         </div>
        //         <div>
        //             <a className='images' href='/'>
        //                 <img className='img3' src={banner} alt='logo'></img>
        //             </a>
        //         </div>
        //         <div>
        //             <a className='images' href='/'>
        //                 <img className='img4' src={banner} alt='logo'></img>
        //             </a>
        //         </div>
        //     </Carousel>
        // </div>
    );
}

export default Carrusel;