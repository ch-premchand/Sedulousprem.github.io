const sections=document.querySelectorAll('.section');
const secbtns=document.querySelectorAll('.controls');
const secbtn=document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');


function pagetransitions(){
    //button click actions
    for(let i=0 ;i<secbtn.length;i++){
        secbtn[i].addEventListener('click',function(){
            let currrentbtn=document.querySelectorAll('.active-btn');
            currrentbtn[0].className=currrentbtn[0].className.replace('active-btn', '');
            this.className+='active-btn'
        })
    }

    //sections actibe class
    allsections[0].addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            secbtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element=document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pagetransitions();