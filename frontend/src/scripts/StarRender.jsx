function StarRender() {
  var starsOuterDivs = document.querySelectorAll('.stars-outer');
  starsOuterDivs.forEach(starsOuterDiv => {
    let ratingDiv = starsOuterDiv.previousSibling.previousSibling;
    // let starCount = parseFloat(ratingDiv.innerText);
    let starCount = ratingDiv = (val) => {parseFloat(val)};
    console.log(starCount);
    const starPerc = starCount * 20;
    const starPercRounded = `${Math.round(starPerc)}%`;
    starsOuterDiv.firstChild.nextSibling.style.width = starPercRounded;
  });
}

export default StarRender;