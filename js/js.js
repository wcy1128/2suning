//banner轮播图
	{
		const imgs=document.querySelectorAll(".banner_img li");   //不会被修改，常量
		let pagers=document.querySelectorAll(".banner_lunbo li");
		let benner=document.querySelector(".banner_zhong");   //设置banner，鼠标放上去，停止播放，鼠标移开开始播放。
		let prev=document.querySelector(".prev"); 
		let next=document.querySelector(".next"); 

		// console.log(imgs);
		// console.log(pagers);
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

		// window.setInterval();//让代码自动执行   自动轮播
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

//某一位置出现导航栏
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

// 选项卡，banner右侧导航
	{
		let container=document.querySelectorAll(".content_container");
		let tips=document.querySelectorAll(".tips");
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=container[index].offsetTop-50;
				// document.documentElement.scrollTop=ot;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});
		//给同一内容添加很多不同事件处理事件
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			// let obj=tips[0];
			for(let i=0;i<container.length;i++){
				if(st>container[i].offsetTop-50){
					// obj.classList.remove("active");
					// tips[i].classList.add("active");
					// obj=tips[i];

					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active");
					}
					tips[i].classList.add("active");
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

	{
		var demo=document.querySelector(".rightBar_top_new");
		demo.onclick=function(){
			this.style.width="50px";
		}
	}

// 右侧固定导航底部的返回
	{
		let buy_rightBar_bottom=document.querySelector(".buy_rightBar_bottom");
			buy_rightBar_bottom.onclick=function(){
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
	{
		function daohang_main(parent){
			let wenzis=parent.querySelector(".daohang_js");
			let daohang_bottom=parent.querySelector(".daohang_bottom");
			// const goods=parent.querySelectorAll(".daohang_bottom_goodlist"); 
			// let types=parent.querySelectorAll(".nav_wenzi span");

			// let obj=goods[0];                   //设置diaplay：none；确保开始不出现。

			wenzis.onmouseenter=function(){
				daohang_bottom.style.height="220px";
			}
			wenzis.onmouseleave=function(){
				daohang_bottom.style.height="0px";
			}
		}
		const contentlist=document.querySelectorAll(".daohang_main");
		contentlist.forEach(function(ele){
			daohang_main(ele);
		})
		
		// types.forEach(function(ele,index){
		// 	ele.onmouseenter=function(){
		// 		for(let i=0;i<types.length;i++){
		// 			// types[i].classList.remove("achive");
		// 			// goods[i].classList.remove("achive");
		// 			obj.style.display="none";
		// 			goods[index].style.display="block";
		// 			obj=goods[index];
		// 		}
		// 		// this.classList.add("achive");
		// 		// goods[index].classList.add("achive"); 
		// 	}
		// })
	}

//banner右侧 内容滚动
	{
		let banner_y2=document.querySelector(".banner_y2");
	}

//大聚会
	{
		const prve=document.querySelector(".buy-prev");
		const next=document.querySelector(".buy-next");
		const inner=document.querySelector(".thr_bleft_z");
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
			inner.style.marginLeft=-1000*n+"px";
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
			inner.style.marginLeft=-1000*n+"px";
		}
	}

//banner右侧 弹出内容
	// {
	// 	let news=document.querySelector(".rightBar_top_new");
	// 	let demo=document.querySelector(".rightBar_top_demo");

	// 	demo.onclick=function(){
	// 		this.style.width="100px";
	// 	}
	// 	// transitionend
	// 	// addEventListener
	// 	// news.addEventListener("transitionend",function(){
	// 	// 	this.style.background="blue";
	// 	// })
	// }