import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
				<div class="col-md-6 item text right-text">
                        <h3>كلية التطوير المهني</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col-sm-6 col-md-3 item right-text">
                        <h3>كورسات</h3>
                        <ul>
                            <li><a href="/buscourse">دورة רכב ציבורי</a></li>
                            <li><a href="/truckcourse">دورة משא כבד</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item right-text">
                        <h3>العنوان</h3>
                        <ul>
                            <li>הרצל 97 קומה 2</li>
                            <li>ליד קפה  GO</li>
                            <li>באר שבע</li>
                        </ul>
                    </div>
                    
                    <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-whatsapp"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                </div>
                <p class="copyright">كلية التطوير المهني © 2022</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer