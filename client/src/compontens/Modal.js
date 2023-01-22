import React, { useEffect } from "react";
import  ReactDOM  from "react-dom";

export default function Modal({onClose, children}){

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return ()=>{
            document.body.classList.remove('overflow-hidden');
        }

    }, []);

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="portal-ctn"></div>
            <div className="portal-bd">
                <div className="portail-ch">
                    {children}
                </div>
            </div>  
        </div>,
        document.querySelector('.modal-container')
    );

}

