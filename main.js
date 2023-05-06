// let homeBackgroundImge = document.querySelector('.home');
let imgArr = [' url(../images/975ca5_6a1d6bbb762f45df840ad238f4483af9_mv2.jpg)','../images/slidedr1.jpg'];
let getColor = localStorage.getItem('colorOption');
let getImg = localStorage.getItem('aboutImg');
let setColor;
if(getColor!==null){
    document.documentElement.style.setProperty('--color',getColor);
    document.querySelectorAll('.setting_box_list li').forEach(li =>{
        if(li.dataset.color == getColor){
            li.classList.add('active')

        }else {
            li.classList.remove('active')
        }
    })
}
if(getImg !==null){
    // let dataImg = li.getAttribute('data-img');
        document.querySelector('.desc_img img').setAttribute('src',`${getImg}`);
}


// up button
$('#upBtn').click(function(){
    $('html , body').animate({scrollTop :0},1000) ;
});
// end up botton

//start backgroundImages

    // setInterval(()=>{
    //     randomeNum= Math.floor(Math.random()*imgArr.length);
        
    //     $('.home').$(selector).toggle();('background-image' , `${imgArr[randomeNum]}`);
    // },4000); 


// end backgroundImages

// start settingBox
document.getElementById('settingBoxIcon').addEventListener('click', ()=>{
    $('#settingBoxIcon').toggleClass('fa-spin')
    $('#settingBox').toggleClass('open');
})
    // changeColor 
const settingBoxList = document.querySelectorAll('.setting_box_list li');
settingBoxList.forEach(li => {
    li.addEventListener('click', (e)=>{
        let dataImg = li.getAttribute('data-img');
        document.querySelector('.desc_img img').setAttribute('src',`${dataImg}`);
        let saveImg = localStorage.setItem('aboutImg',`${dataImg}`);
        document.documentElement.style.setProperty('--color',e.target.dataset.color);
        setColor = localStorage.setItem('colorOption',e.target.dataset.color);
        activeColor(e);

    })
})
function activeColor(e)
{
    document.querySelectorAll('.setting_box_list li').forEach(li=>{
        li.classList.remove('active');
    })
    e.target.classList.add('active')
}
// end settingBox

// start skills section
function skills(){
    let skills = document.querySelector('.skills');
    let skillsOffset = skills.offsetTop ;
    let skillsOuterHeight = skills.offsetHeight ;
    let windowHeight = this.innerHeight ;
    let windowScrollTop = this.scrollY ;
        if(windowScrollTop > (skillsOffset + skillsOuterHeight - windowHeight)){
            document.querySelectorAll('.skills .progress span').forEach(span => {
            let progressWidth = span.dataset.progress;
            span.style.width= progressWidth ;
            span.style.backgroundColor = span.dataset.backgroundcolor ;
            })
        }
}


window.addEventListener('scroll',skills);
// end skills section
// start window scroll
$('a[href^="#"]').click(function(e){
    let getHref=e.target.getAttribute('href');
    let sectionOffset = $(getHref).offset().top;
    $('html , body').animate({scrollTop : sectionOffset}, 1000)
})
// end window scroll


// start testimonials part
const testimonialArr = [
    {
        id: 1,
        img : '5 (1).jpg',
        name : 'imam',
        review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nostrum.' ,
    },
    {
        id: 2,
        img:'slidedr1.jpg',
        name : 'noha',
        review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    },
    {
        id: 3,
        img:'slider2.jpg' ,
        name : 'khalil',
        review : 'Lorem ipsum  amet, consectetur adipisicing elit. Laboriosam, nostrum.' ,
    }
] ;

const img = document.querySelector('.testimonial_img img');
const namePerson = document.querySelector('.testimonial h3') ;
const review = document.getElementById('review');
const nextReview = document.querySelector('.arrow_next i');
const prevReview = document.querySelector('.arrow_prev i');

let currentReview = 0;

function showReview(){
    img.setAttribute('src',`images/${testimonialArr[currentReview].img}`);
    namePerson.innerHTML= `${testimonialArr[currentReview].name}`;
    review.innerHTML = `${testimonialArr[currentReview].review}`;
};
nextReview.addEventListener('click',()=>{
    currentReview++ ;
    if(currentReview > testimonialArr.length -1){
        currentReview= 0;
    }
    showReview()
});
prevReview.addEventListener('click',()=>{
    currentReview--
    if(currentReview<0){
        currentReview= testimonialArr.length -1 ;
    }
    showReview()
});


// end testimonials part
let hightTop = $('#about').offset().top;
window.addEventListener('scroll',()=>{
    let scr = $(window).scrollTop();
    if(scr > hightTop -500){
        // document.getElementById('upBtn').style.display='block';
        $('#upBtn').fadeIn(500);
    }else{
        // document.getElementById('upBtn').style.display='none';
        $('#upBtn').fadeOut(500);
    }
});



    var typed = new Typed('#element', {
      strings: ['FrontEnd Developer','Freelancer'],
      typeSpeed: 50,
      backSpeed:50,
      loop: true ,
    });




















// let obj={
//     skills : ['html','css'],
//     print1: function(){
//         console.log(this.skills);
//     },
//     print2:function(){
//         return () => {
//             console.log(this.skills);
//         }
//     },
//     print3:function (){
//         return function(){
//             console.log(this.skills);
//         }
//     },
//     print4: ()=>{
//         console.log(this.skills);
//     },
// }
// console.log('helo')
// console.log(obj.print1());
// console.log(obj.print2());
// console.log(obj.print3());
// console.log(obj.print4());