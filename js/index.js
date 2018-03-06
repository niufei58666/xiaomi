window.onload=function(){
    <!-- logo栏开始 -->
    let logo2=document.querySelectorAll('.logo2 li');
    let lgcon1=document.querySelector('.lgcon');
    let lgcon=document.querySelectorAll('.lgcon li');
    logo2.forEach(function(value,index){
        value.onmouseenter=function(){
            lgcon[index].classList.add('active');
            lgcon1.classList.add('active');
        };
        value.onmouseleave=function(){
            lgcon[index].classList.remove('active');
            lgcon1.classList.remove('active');
        }
    });
    // <!-- logo栏结束 -->
    //banner开始
    let n=0;
    let flag=true;
    let bannerImg=document.querySelectorAll('.banna .banna-img a');
    let bannerbox=document.querySelector('.banna');
    let left=document.querySelector('.banna-xiaoyu');
    let right=document.querySelector('.banna-dayu');
    let circles=document.querySelectorAll('.banna-radius li');
    function move() {
        n++;
        if(n>=bannerImg.length){
            n=0;
        }
        bannerImg.forEach(function(val,ind) {
            val.classList.remove('active');
            circles[ind].classList.remove('active');
        });
        bannerImg[n].classList.add('active');
        circles[n].classList.add('active');
    }
    let t=setInterval(move,2000);
    bannerbox.onmouseenter=function(){
        clearInterval(t);
    };
    bannerbox.onmouseleave=function(){
        t=setInterval(move,2000);
    };
    right.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    };
    left.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        n--;
        if(n<0){
            n=bannerImg.length-1;
        }
        bannerImg.forEach(function(val,ind) {
            val.classList.remove('active');
            circles[ind].classList.remove('active');
        });
        bannerImg[n].classList.add('active');
        circles[n].classList.add('active');
    };
    circles.forEach(function(value,index) {
        value.onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            circles.forEach(function(val,ind) {
                val.classList.remove('active');
                bannerImg[ind].classList.remove('active');
            });
            this.classList.add('active');
            bannerImg[index].classList.add('active');
            n=index;
        }
    });
    bannerImg.forEach(function(value) {
        value.addEventListener('transitionend',function () {
            flag=true;
        })
    });

    navleft=document.querySelectorAll('.banna-left li');
    banner_list=document.querySelectorAll('.banner_list li');
    navleft.forEach(function(value,index) {
        value.onmouseover=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
                a.classList.remove('active');
            });
            this.classList.add('active');
            banner_list[index].classList.add('active');
        };
        value.onmouseout=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
                a.classList.remove('active');
            })
        };
        banner_list[index].onmouseover=function() {
            banner_list[index].classList.add('active');
            value.classList.add('active');
        };
        banner_list[index].onmouseout=function() {
            banner_list[index].classList.remove('active');
            value.classList.remove('active');
        }
    });

    //banner结束
    //明星单品开始
    //双下标轮播方法错误，后期修改
    // let mxbtn1=document.querySelector('.mx .jdjd .jdjd1');
    // let mxbtn2=document.querySelector('.mx .jdjd .jdjd2');
    // let mxcon=document.querySelectorAll('.mx .mx-top2');
    // let now1=0;
    // let next1=0;
    // mxbtn2.onclick=function(){
    //     next=now1+1;
    //     if(next1>=mxcon.length){
    //         next1=0;
    //     }
    //     mxcon[next1].style.left='-100%';
    //     mxcon[next1].classList.remove('active');
    //     mxcon[now1].classList.add('active');
    //     animate(mxcon[now1],{left: 1226});
    //     animate(mxcon[next1],{left: 0});
    //     now1=next1;
    // };
    // mxbtn1.onclick=function(){
    //     next1=now1-1;
    //     if(next1<0){
    //         next1=mxcon.length-1;
    //     }
    //     mxcon[next1].style.left='100%';
    //     mxcon[next1].classList.remove('active');
    //     mxcon[now1].classList.add('active');
    //     animate(mxcon[now1],{left: -1226});
    //     animate(mxcon[next1],{left: 0});
    //     now1=next1;
    // };//方法错误，后期修改
    //元素轮播
    function funmx(mx){
        let mxbtn1=mx.querySelector('.mx .jdjd1');
        let mxbtn2=mx.querySelector('.mx .jdjd2');
        let mxcon=mx.querySelector('.mx .mxcon');
        let flar=true;
        let flaa=true;
        function move2(){
            mxbtn1.classList.remove('active');
            mxbtn2.classList.remove('active');
            if(flar){
                animate(mxcon,{left:-1226});
                // mxbtn2.classList.add('active');
                flar=false;
            }else {
                animate(mxcon,{left:0});
                flar=true;
                // mxbtn1.classList.add('active');
            }
        }
        let t1=setInterval(move2,6000);
        mxbtn1.onclick=function(){
            flar=true;
            animate(mxcon,{left:0});
        };
        mxbtn2.onclick=function(){
            animate(mxcon,{left:-1226});

        };
    }
    let mx=document.querySelectorAll('.mx');
    mx.forEach(function(value){
        funmx(value);
    });



    // let mxbtn1=document.querySelector('.mx .jdjd1');
    // let mxbtn2=document.querySelector('.mx .jdjd2');
    // let mxcon=document.querySelector('.mx .mxcon');
    // let flar=true;
    // let flaa=true;
    // function move2(){
    //     mxbtn1.classList.remove('active');
    //     mxbtn2.classList.remove('active');
    //     if(flar){
    //         animate(mxcon,{left:-1226});
    //         // mxbtn2.classList.add('active');
    //         flar=false;
    //     }else {
    //         animate(mxcon,{left:0});
    //         flar=true;
    //         // mxbtn1.classList.add('active');
    //     }
    // }
    // let t1=setInterval(move2,6000);
    // mxbtn1.onclick=function(){
    //     flar=true;
    //     animate(mxcon,{left:0});
    // };
    // mxbtn2.onclick=function(){
    //     animate(mxcon,{left:-1226});
    // };


    //明星单品结束
    //家电开始
    jd_a2=document.querySelectorAll('.jda a');
    jd_content=document.querySelectorAll('.jdb .jd-right');
    function fun(c,d){
        c.forEach(function(value,index) {
            value.onmouseover=function() {
                c.forEach(function(a,b) {
                    a.classList.remove('active');
                    d[b].classList.remove('active');
                });
                value.classList.add('active');
                d[index].classList.add('active');
            }
        });
    }
    fun(jd_a2,jd_content);
    //家电结束

    //智能开始
    zn_a2=document.querySelectorAll('.zna a');
    zn_content=document.querySelectorAll('.znb .jd-right');
    fun(zn_a2,zn_content);
    //智能结束

    //搭配开始
    dp_a2=document.querySelectorAll('.dpa a');
    dp_content=document.querySelectorAll('.dpb .jd-right');
    fun(dp_a2,dp_content);
    //搭配结束
    //配件开始
    pj_a2=document.querySelectorAll('.pja a');
    pj_content=document.querySelectorAll('.pjb .jd-right');
    fun(pj_a2,pj_content);
    //配件结束
    //周边开始
    zb_a2=document.querySelectorAll('.zba a');
    zb_content=document.querySelectorAll('.zbb .jd-right');
    fun(zb_a2,zb_content);
    //周边结束
    //为你推荐开始


    //为你推荐结束
    //内容开始
    function fun1(box1){
        let now=0;
        let next=0;
        let width=box1.offsetWidth;
        let nrbanner=box1.querySelectorAll('.nrbox1 li');
        let nrcircles=box1.querySelectorAll('.circles a');
        function move1(){
            next=now+1;
            if(next>=nrbanner.length){
                next=0;
            }
            nrbanner[next].style.left='100%';
            nrbanner[next].classList.remove('active');
            nrbanner[now].classList.add('active');
            nrcircles[next].classList.add('active');
            nrcircles[now].classList.remove('active');
            animate(nrbanner[next],{left: 0});
            animate(nrbanner[now],{left: -width},function(){
                flag=true;
            });
            now=next;
        }
        let t1=setInterval(move1,2000);
        document.querySelector('.nrbox1').onmouseenter=function(){
            clearInterval(t1);
        };
        document.querySelector('.nrbox1').onmouseleave=function(){
            t1=setInterval(move1,2000);
        };
        document.querySelector('.nrbox1 .right').onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            move1();
            this.classList.add('active');
        };
        document.querySelector('.nrbox1 .left').onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            next=now-1;
            if(next<0){
                next=nrbanner.length-1;
            }
            nrbanner[next].style.left='-100%';
            nrbanner[next].classList.remove('active');
            nrbanner[now].classList.add('active');
            nrcircles[next].classList.add('active');
            nrcircles[now].classList.remove('active');
            animate(nrbanner[next],{left: 0});
            animate(nrbanner[now],{left: width},function(){
                flag=true;
            });
            now=next;
        };
        document.querySelector('.nrbox1 .left').onmouseenter=function(){
            this.classList.add('active');
        };
        box1.querySelector('.nrbox1 .left').onmouseleave=function(){
            this.classList.remove('active');
        };
        box1.querySelector('.nrbox1 .right').onmouseenter=function(){
            this.classList.add('active');
        };
        box1.querySelector('.nrbox1 .right').onmouseleave=function(){
            this.classList.remove('active');
        };
        nrcircles.forEach(function(value,index){
            value.onclick=function(){
                let next=index;
                if(index>now){
                    nrbanner[next].style.left='100%';
                    nrbanner[next].classList.remove('active');
                    nrbanner[now].classList.add('active');
                    nrcircles[next].classList.add('active');
                    nrcircles[now].classList.remove('active');
                    animate(nrbanner[next],{left: 0});
                    animate(nrbanner[now],{left: -width},function(){
                        flag=true;
                    });
                    now=next;
                }else if(index<now){
                    if(!flag){
                        return;
                    }
                    flag=false;
                    next=now-1;
                    nrbanner[next].style.left='-100%';
                    nrbanner[next].classList.remove('active');
                    nrbanner[now].classList.add('active');
                    nrcircles[next].classList.add('active');
                    nrcircles[now].classList.remove('active');
                    animate(nrbanner[next],{left: 0});
                    animate(nrbanner[now],{left: width},function(){
                        flag=true;
                    });
                    now=next;
                }else if(index=now){
                    flag=true;
                }
            }
        })
    }
    let box1=document.querySelectorAll('.rp-bottom .nrbox1');
    box1.forEach(function(value){
        fun1(value);
    })

    //内容结束
}
