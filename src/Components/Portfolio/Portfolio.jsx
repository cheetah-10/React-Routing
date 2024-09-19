import './Port.css'
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'
import { useEffect } from 'react'
import { useState } from 'react'

function Portfolio() {

    const [largeImageSrc, setLargeImageSrc] = useState(null);

    useEffect(() => {
        document.querySelectorAll('img').forEach((image)=>{
            image.addEventListener('click', (e) => {
                let imageSrc = e.target.getAttribute("src");
                setLargeImageSrc(imageSrc);
            })
        })
    }, []) 


    const closeImage = (e) => {
        if(e.target.tagName !== 'IMG'){   //to make sure that user clicked on the div to close the photo
            setLargeImageSrc(null); 
        }
        
    };



    /// عن طريق اني أوقف ال propagation (event bubblibg)
    
    // const closeImage = () => {
    //     setLargeImageSrc(null); // إغلاق الصورة المكبرة
    // };

    // const stopPropagation = (e) => {
    //     e.stopPropagation(); // منع انتشار الحدث إلى العنصر الأب
    // };
    // بس هاجي عند ال img  وهنادي على الفانكشن اللي تحت في اونكليك بتاعت الستوب
    // <img src={largeImageSrc} alt="Large View" onClick={stopPropagation} />
    

    return (<>
        <div className="port">

            <h1 className='text-uppercase text-white'>portfolio component</h1>

            <div className="star position-relative mt-2"> ★ </div>

            <div className="container row">

                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic1} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic2} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic3} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic1} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic2} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="border-radius-2 item position-relative m-3">
                        <img className='w-100' src={pic3} alt="" />
                        {/* <div className="add position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0"><i class="fa-solid fa-plus"></i></div> */}
                    </div>
                </div>
            </div>
        </div>

        {largeImageSrc && (
                <div className="toLarge" onClick={closeImage}>
                    <img src={largeImageSrc} alt="Large View" />
                </div>
            )}

    </>);
}

export default Portfolio;