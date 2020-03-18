import React from 'react';

var ReadMoreModal = (props) => {
    return (
        <div className='modal pt4-sm pb4-sm'>
            <div className='ncss-container'>
                <button onClick={props.toggleModal} className='bg-white'>

                    <img src='https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg' alt={props.productName} className='modal-image d-sm-ib'></img>
                
                    <div className='d-sm-ib'>
                        <p>{props.productName}</p>
                        <p>${props.productPrice}</p>
                    </div>
                </button>
                <button onClick={props.toggleModal} className='bg-white closeBtn'>&times;</button>
            </div>
            
            <div className='text-block' dangerouslySetInnerHTML={{__html: props.textBlock}}></div>
        </div>
    )
}

export default ReadMoreModal;