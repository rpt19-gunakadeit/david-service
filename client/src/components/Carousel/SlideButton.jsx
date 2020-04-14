var SlideButton = (props) => {
    var buttonStyle = props.direction === 'left'
                    ? "pst-a t-0 w-160 h-f b-n l-0" 
                    : "pst-a t-0 w-160 h-f b-n r-0";
    
    var slidePics = (direction) => {
        var slider = document.getElementsByClassName('slider')[0];
        var sliderLeft = slider.style.left;
        var slidePosition = Number(sliderLeft.slice(0, -1));

        
        console.log(Number(sliderLeft.slice(0, -1)));
        
        var newSlidePosition = direction === 'left' 
                               ? slidePosition - 33.3333
                               : slidePosition + 33.3333;
        
        slider.style.left = `${newSlidePosition}%`;
        console.log(slider.style.left);
    }
    
    return (
      <button className={buttonStyle} onClick={() => slidePics(props.direction)}>
          Click
      </button>
    )
}

export default SlideButton;