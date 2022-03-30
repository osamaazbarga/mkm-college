import React from 'react'
import './SendMsg.css'
const SendMsg = () => {
  return (
    <div className="container">
        <div className="right">
            <h1 className="h1css">ליצירת קשר</h1>
            <p className="text-p">
                <div className="title">ליצור קשר/للتواصل:</div>
                <br/>
                    
                    מיטל: 0509922673
                    <br/>
                    אורטל: 0509330863
                    <br/>
                    <b>לדוברי ערבית</b>
                    <br/>
                    אברהים: 0507142338
                </p>

                <br/>
                <br/>
                <p className="text-p">
                <div className="title">כתובת/عنوان:</div>
                <br/>
                    {/* מיטל: 0509922673
                    <br/>
                    אורטל: 0509330863
                    <br/>
                    <b>לדוברי ערבית</b>
                    <br/>
                    אברהים: 0507142338 */}
                </p>
        </div>

        

        
    </div>
  )
}

export default SendMsg