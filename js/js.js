//banner轮播图
	{
		const imgs=document.querySelectorAll(".banner_img li");   //不会被修改，常量
		let pagers=document.querySelectorAll(".banner_lunbo li");
		let benner=document.querySelector(".banner_zhong");   //设置banner，鼠标放上去，停止播放，鼠标移开开始播放。
		let prev=document.querySelector(".prev"); 
		let next=document.querySelector(".next"); 

		pagers.forEach(function(ele,index){    //形参：遍历数。
			// console.log(ele);
			ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");   //移除active
				}
				this.classList.add("active");
				imgs[index].classList.add("active");    //添加active
				n=index;     //n从当前位子自加。
			}
		})

		// BOM_window.setInterval();//让代码自动执行   自动轮播
		let n=0;     //访问n，自加
		let t=setInterval(move,3000)

		function move(){
			n++;
			//n超范围判断
			// n=n%5;
			if(n===imgs.length){
				n=0;    //赋值
			}
			//左按钮，点到第一张时跳转到第五章
			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");
		}

		benner.onmouseenter=function(){
			clearInterval(t);
		}
		benner.onmouseleave=function(){
						// 	t=setInterval(function(){
						// 	n++;
						// 	// n=n%5;
						// 	if(n===imgs.length){
						// 		n=0;
						// 	}
						// 	for(let i=0;i<imgs.length;i++){
						// 			imgs[i].classList.remove("active");
						// 			pagers[i].classList.remove("active");
						// 		}
						// 		imgs[n].classList.add("active");
						// 		pagers[n].classList.add("active");
						// },3000)
			t=setInterval(move,3000);
		}

		next.onclick=function(){
			move();
		}
		prev.onclick=function(){
			n-=2;//n=n-2
			move();
		}
	}

//某一位置出现导航栏（上导航、左导航）
	{
		let topBar=document.querySelector(".topBar");
		let leftBar=document.querySelector(".leftBar");
		window.onscroll=function(){
			let st=document.documentElement.scrollTop;
			if(st>1200){
				topBar.style.display="block";
			}else{
				topBar.style.display="none";
			}

			if(st>2300&&st<14500){
				leftBar.style.display="block";
			}else{
				leftBar.style.display="none";
			}
		}

		let leftBar_footer=document.querySelector(".leftBar_footer");
		leftBar_footer.onclick=function(){
			let st=document.documentElement.scrollTop;
			let t=setInterval(function(){
	             st-=200;
	             if(st<0){
	             	st=0;
	             	clearInterval(t);
	             }
	             document.documentElement.scrollTop=st;
			},25)
		}
	}

// 楼层跳转
	{
		let container=document.querySelectorAll(".content_container");
		let tips=document.querySelectorAll(".tips");
		let flag=true;
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				flag=false;
				let ot=container[index].offsetTop-40;
				// document.documentElement.scrollTop=ot;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
						flag=true;
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});
		//给同一内容添加很多不同事件处理事件
		window.addEventListener("scroll",function(){
			if(flag){
				let st=document.documentElement.scrollTop;
				// let obj=tips[0];
				for(let i=0;i<container.length;i++){
					if(st>container[i].offsetTop-300){
						for(let i=0;i<tips.length;i++){
							tips[i].classList.remove("active");
						}
						tips[i].classList.add("active");
					}
				}
			}
		})
	}

//banner 侧导航点击出现内容
	{
		let lab=document.querySelectorAll(".banner_ce li");
		let menus=document.querySelectorAll(".piaofu");
		let obj=menus[0];
		lab.forEach(function(ele,index){
			ele.onmouseenter=function(){
				// obj.style.display="none";
				menus[index].style.display="block";
				// obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
	}

// 右侧固定导航底部的返回
	{
		let buy_rightBar=document.querySelector(".right_top");
			buy_rightBar.onclick=function(){
				let st=document.documentElement.scrollTop;
				let t=setInterval(function(){
		             st-=200;
		             if(st<0){
		             	st=0;
		             	clearInterval(t);
		             }
		             document.documentElement.scrollTop=st;
				},25)
			}
	}

//导航栏的下拉效果
// 	{
// 		function daohang_main(parent){
// 			let wenzis=parent.querySelector(".daohang_js");
// 			let daohang_bottom=parent.querySelector(".daohang_bottom");
// 			// const goods=parent.querySelectorAll(".daohang_bottom_goodlist");
// 			// let types=parent.querySelectorAll(".nav_wenzi span");
//
// 			// let obj=goods[0];                   //设置diaplay：none；确保开始不出现。
//
// 			wenzis.onmouseenter=function(){
// 				daohang_bottom.style.height="220px";
// 			}
// 			wenzis.onmouseleave=function(){
// 				daohang_bottom.style.height="0px";
// 			}
// 		}
// 		const contentlist=document.querySelectorAll(".daohang_main");
// 		contentlist.forEach(function(ele){
// 			daohang_main(ele);
// 		})
//
// 		// types.forEach(function(ele,index){
// 		// 	ele.onmouseenter=function(){
// 		// 		for(let i=0;i<types.length;i++){
// 		// 			// types[i].classList.remove("achive");
// 		// 			// goods[i].classList.remove("achive");
// 		// 			obj.style.display="none";
// 		// 			goods[index].style.display="block";
// 		// 			obj=goods[index];
// 		// 		}
// 		// 		// this.classList.add("achive");
// 		// 		// goods[index].classList.add("achive");
// 		// 	}
// 		// })
// 	}

//大聚会
	{
		const prve=document.querySelector(".buy-prev");
		const next=document.querySelector(".buy-next");
		const inner=document.querySelector(".thr_bleft_z");
		let n=1;//n代表往左移动几贫
		let flag=true;
		next.onclick=function(){
			if(flag){
				n++;
				inner.style.transition="all 0.8s";
				prve.classList.remove("disable");
				if(n===2){
					this.classList.add("disable");
				}
				// if(n===3){
				// 	n=2;
				// 	return;
				// }
				inner.style.marginLeft=-1000*n+"px";
			}
		}
		prve.onclick=function(){
			if(flag){
				n--;
				inner.style.transition="all 0.8s";
				next.classList.remove("disable");
				if(n===0){
					prve.classList.add("disable");
				}
				// if(n===-1){
				// 	n=0;
				// 	return;
				// }
				inner.style.marginLeft=-1000*n+"px";
			}
		}
		inner.addEventListener("transitionend",function(){
			flag=true;
		 	if(n===4){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-1000px";
		 		n=1;
		 	}
		 	if(n===0){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-3000px";
		 		n=3;
		 	}
	 	})
	}

//banner右侧 弹出内容
	{
	 	function rightBar_demo(parent){
		 	let demo=parent.querySelector(".rightBar_top_demo");
		 	let news=parent.querySelector(".rightBar_top_news");
		 	news.onmouseenter=function(){
		 		demo.style.width="70px";
		 		demo.style.background="#ffaa01";
		 	}
		 	news.onmouseleave=function(){
		 		demo.style.width="0px";
		 		demo.style.background="#383838";
		 	}
		 }
		const contentlist=document.querySelectorAll(".rightBar_demo");
		contentlist.forEach(function(ele){
			rightBar_demo(ele);
		})
	}

//排行榜
	{
		let prve=document.querySelector(".buy-prev1");
		let next=document.querySelector(".buy-next1");
		let inner=document.querySelector(".four_1b_zong");
		let n=0;//n代表往左移动几贫
		next.onclick=function(){
			n++;
			prve.classList.remove("disable");
			if(n===2){
				this.classList.add("disable");
			}
			if(n===3){
				n=2;
				return;
			}
			inner.style.marginLeft=-390*n+"px";
		}
		prve.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				prve.classList.add("disable");
			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-390*n+"px";
		}
	}

//视频
	//设置内容变化 的
	{
		let container=document.querySelector(".six_rshang3");
		let prev=document.querySelector(".prev2");
		let next=document.querySelector(".next2");
		let inner=document.querySelector(".six_rshang3_long");
		let sixImgs=document.querySelectorAll(".sixImgs");
        let six_rshang31=document.querySelectorAll(".six_rshang31");

		container.onmouseenter=function(){
			prev.style.display="block";
			next.style.display="block";
		}
		container.onmouseleave=function(){
			prev.style.display="none";
			next.style.display="none";
		}
		let n=1;     //n代表往左移动几贫,innerd的margin设置
		let flag=true;    //设置一个开关，点击过快时
		next.onclick=function(){
			if(flag){
				flag=false;		
				n++;
				inner.style.transition="all 0.8s";
				inner.style.marginLeft=-390*n+"px";
			}
		}
		prev.onclick=function(){
			if(flag){
				flag=false;	
				n--;
				//点击时的过度属性
				inner.style.transition="all 0.8s";
				inner.style.marginLeft=-390*n+"px";
			}
		}
		//监测事件结束
		//添加和第一屏相同的内容（第四屏），当n=3时，清除过度值，并且让其回到第一屏的位置
		inner.addEventListener("transitionend",function(){
			flag=true;
			//判断是否到达边界
		 	if(n===3){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-390px";
		 		n=1;
		 	}
		 	if(n===0){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-780px";
		 		n=2;
		 	}
	 	})
        six_rshang31.forEach(function (ele,index) {
			ele.onmouseenter=function () {
				for(var i=0;i<sixImgs.length;i++){
                    sixImgs[i].classList.remove("active");
				}
                sixImgs[index].classList.add("active");
            }
        })
	}

//乐拼购
	{
		let container=document.querySelector(".qindan_big");
		let prev=document.querySelector(".prev_le");
		let next=document.querySelector(".next_le");
		let inner=document.querySelector(".qindan_big_small")

		container.onmouseenter=function(){
			prev.style.display="block";
			next.style.display="block";
		}
		container.onmouseleave=function(){
			prev.style.display="none";
			next.style.display="none";
		}
		let n=1;     //n代表往左移动几贫,innerd的margin设置
		let flag=true;    //设置一个开关，点击过快时
		next.onclick=function(){
			if(flag){
				flag=false;		
				n++;
				inner.style.transition="all 0.8s";
				inner.style.marginLeft=-564*n+"px";
			}
		}
		prev.onclick=function(){
			if(flag){
				flag=false;	
				n--;
				//点击时的过度属性
				inner.style.transition="all 0.8s";
				inner.style.marginLeft=-564*n+"px";
			}
		}
		//监测事件结束
		//添加和第一屏相同的内容（第四屏），当n=3时，清除过度值，并且让其回到第一屏的位置
		inner.addEventListener("transitionend",function(){
			flag=true;
			//判断是否到达边界
		 	if(n===4){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-564px";
		 		n=1;
		 	}
		 	if(n===0){
		 		inner.style.transition="none";
		 		inner.style.marginLeft="-1692px";
		 		n=3;
		 	}
	 	})
	}

//右侧导航弹出文字
	{
		let piaofu1=document.querySelectorAll(".piaofu1");
		let rightBan1=document.querySelectorAll(".rightBan_1");
		rightBan1.forEach(function (ele,index) {
			ele.onmouseenter=function () {
				// for(let i=0;i<piaofu1.length;i++){
				 //    piaofu1[i].style.opacity=0;
				 //    piaofu1[i].style.width=0;
				// }
				piaofu1[index].style.opacity=1;
				piaofu1[index].style.width=70+"px";
				piaofu1[index].style.transition="all 0.5s";
				piaofu1[index].style.background=" #ff6700";
			}
			ele.onmouseleave=function () {
				piaofu1[index].style.opacity=0;
				piaofu1[index].style.width=0;
				piaofu1[index].style.transition="none";
				piaofu1[index].style.background=" #383838";
			}
		})
	}