import React ,{ useState, useEffect } from 'react';
import './Home.css'
import './Home-mobile.css'
import truck from '../Images/truck.png'
import bus from '../Images/bus1.png'
import mkm1 from '../Images/mkm1.jpg'
import mkm2 from '../Images/mkm2.jpeg'
import mkm3 from '../Images/mkm3.jpeg'
import mkm4 from '../Images/mkm4.jpeg'
import mkm5 from '../Images/mkm5.jpeg'
import mkm6 from '../Images/mkm6.jpeg'
import mkm7 from '../Images/mkm7.jpeg'

import { useNavigate } from 'react-router-dom';


// import { useHistory } from 'react-router-dom';


const Home = () => {
//   let history=useHistory();
const navigate = useNavigate();

  //دورة רכב ציבורי/دورة משא כבד
  return <div className="container-fluid">
    <div className="mkm1css">
      <img className="responsive" src={mkm1}/>
    </div>
    {/* دورة רכב ציבורי/دورة משא כבד */}
    <div className="main">
      <div className="half-main">
        <div>
          <div className="img-item">
            <img src={truck}/>
          </div>
   
          <div className="options">
          <h2>دورة משא כבד</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          الدوره عن طريق الزوم
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم 5 ايام 
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم مسائي من الساعه 17:30 حتى 20:45
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 3000 ש"ח
          <br/>
          <button  type="button" onClick={()=>navigate('/truckcourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/>
          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a>

        </div>

        </div>
      </div>
      <div className="half-main">
        <div className="img-item">
          <img src={bus}/>
        </div>
        
        <div className="options">
          <h2>دورة רכב ציבורי</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          الدوره عن طريق الزوم
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم 5 ايام
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم مسائي من الساعه 17:30 حتى 20:45
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 2500 ש"ח
          <br/>
          <button type="button" onClick={()=>navigate('/buscourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/>
          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a>

        </div>
      </div>
      

    </div>




    {/* دورة ادارة حسابات 1+2
    دورة حاضنات اطفال درجة 1 */}
    <div className="main">
      <div className="half-main">
        <div>
          <div className="img-item">
            <img src={mkm2}/>
          </div>
   
          <div className="options">
          <h2>دورة ادارة حسابات 1+2</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          {/* <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم مسائي من الساعه 17:30 حتى 20:45
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 3000 ש"ח */}
          <br/>
          <br/>
          {/* <button  type="button" onClick={()=>history.push('/truckcourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}

          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}
          <b>0502216319</b>

        </div>

        </div>
      </div>
      <div className="half-main">
        <div className="img-item">
          <img src={mkm3}/>
        </div>
        
        <div className="options">
          <h2>دورة حاضنات اطفال درجة 1</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          شهادة اضافية مساعدة بستان <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>مجانا</span>
          <br/>
          {/* <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 2500 ש"ח
          <br/> */}
          {/* <button type="button" onClick={()=>history.push('/buscourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}
          
          <br/>
          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          <b>0508786888</b>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}

        </div>
      </div>
      

    </div>

{/* 
    دورة سكرتاريه عامه
    دورة تصميم ازياء درجة 1 */}
    <div className="main">
      <div className="half-main">
        <div>
          <div className="img-item">
            <img src={mkm4}/>
          </div>
   
          <div className="options">
          <h2>دورة سكرتاريه عامه</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          {/* <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم مسائي من الساعه 17:30 حتى 20:45
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 3000 ש"ח */}
          <br/>
          <br/>
          {/* <button  type="button" onClick={()=>history.push('/truckcourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}

          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}
          <b>0502216319</b>

        </div>

        </div>
      </div>
      <div className="half-main">
        <div className="img-item">
          <img src={mkm5}/>
        </div>
        
        <div className="options">
          <h2>دورة تصميم ازياء درجة 1</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          <br/>
          {/* <i class="fas fa-solid fa-chevron-left"></i>
          شهادة اضافية مساعدة بستان <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>مجانا</span>
          <br/> */}
          {/* <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 2500 ש"ח
          <br/> */}
          {/* <button type="button" onClick={()=>history.push('/buscourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}
          
          <br/>
          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          <b>0502216319</b>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}

        </div>
      </div>
      

    </div>


    
    <div className="main">
      <div className="half-main">
        <div>
          <div className="img-item">
            <img src={mkm6}/>
          </div>
   
          <div className="options">
          <h2>دورة محاسب اجور</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          {/* <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          التعليم مسائي من الساعه 17:30 حتى 20:45
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 3000 ש"ח */}
          <br/>
          <br/>
          {/* <button  type="button" onClick={()=>history.push('/truckcourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}

          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}
          <b>0502216319</b>

        </div>

        </div>
      </div>
      <div className="half-main">
        <div className="img-item">
          <img src={mkm7}/>
        </div>
        
        <div className="options">
          <h2>دورة سكرتاريه طبية</h2>
          <i class="fas fa-solid fa-chevron-left"></i>
          <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>الدوره للنساء فقط</span>
          <br/>
          <i class="fas fa-solid fa-chevron-left"></i>
          منحة من وزارة العمل 
          <br/>
          {/* <i class="fas fa-solid fa-chevron-left"></i>
          شهادة اضافية مساعدة بستان <span style={{color:"red",fontWeight:'bolder',fontSize:'20px'}}>مجانا</span>
          <br/> */}
          {/* <i class="fas fa-solid fa-chevron-left"></i>
          السعر: 2500 ש"ח
          <br/> */}
          {/* <button type="button" onClick={()=>history.push('/buscourse')} class="btn btn-info btn-lg">للتفاصيل</button>
          <br/> */}
          
          <br/>
          للتواصل
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <br/>
          <b>0502216319</b>
          {/* <a className="float-whatsapp" href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a> */}

        </div>
      </div>
      

    </div>




    <a href="https://api.whatsapp.com/send?phone=7920507142338&text=مرحبا%21%20انا مهتم%20للتعلم%20اريد بعض التفاصيل%20شكرا%20." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
        </a>
  </div>;
};

export default Home;
