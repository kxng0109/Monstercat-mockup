const main = document.querySelector('#main');
const more = document.querySelector('#more');
const exit = document.querySelector('#exit');
const menu = document.querySelector('#menu');
const circle = document.querySelector('#moving-circle');
let x, y;
const links = document.querySelectorAll('.link');
const headerPlayBtn = document.querySelector('#header-play-btn');
const headerShareBtn = document.querySelector('#header-share-btn');
const deviceHeight = screen.height;
const middleMenu = document.querySelector('#middle-menu');
const subMenu = document.querySelectorAll('.mmsub');
const expandableSubMenu = document.querySelectorAll('.expand');
const iconInSubMenu = document.querySelectorAll('.more-icon');
let deviceWidth = window.innerWidth;

const showOrHideCircle = () =>{
	deviceWidth = window.innerWidth;
	if (navigator.userAgentData.mobile === false  || deviceWidth >= 1100) {
		function showCoords(event) {
			circle.style.display = 'block';
			x = event.clientX;
			y = event.clientY;
			const Xcoords = x;
			const Ycoords = y;
			circle.style.top = `${Ycoords}px`;
			circle.style.left = `${Xcoords}px`;
			return x, y;
		}
		window.addEventListener('mousemove', showCoords);
	}else {		
		circle.style.display = 'none';
	}
}

setInterval(()=> showOrHideCircle(), 2000);
showOrHideCircle();
window.onresize = () => showOrHideCircle();

expandableSubMenu.forEach((element, index) => {
	expandableSubMenu[index].onclick = () =>{
		switch (subMenu[index].style.display === 'flex') {
			case true:
				subMenu[index].style.display = 'none';
				iconInSubMenu[index].style.transform = 'rotateZ(0deg)';
				break;
			default:
				subMenu[index].style.display = 'flex';
				iconInSubMenu[index].style.transform = 'rotateZ(-90deg)';
				break;
		}
	}
})

more.onclick = ()=>{
	menu.style.animation = "slideIn 0.2s ease-out forwards";
};

exit.onclick = () =>{
	menu.style.animation = "slideOut 0.2s ease-out forwards";
};

main.onclick = () =>{
	if (menu.style.animation !== '0.2s ease-out 0s 1 normal forwards running slideIn') return;
	menu.style.animation = "slideOut 0.2s ease-out forwards";
};

function multiplier(value){
	const result = value * deviceHeight;
	return result;
}

let hoveringLinks = () =>{
	links.forEach((element, index) =>{
    	links[index].onmouseover = () =>{
			circle.classList.add('circle-hovering');
    	}

    	links[index].onmouseleave = () =>{
			circle.classList.remove('circle-hovering');
   		}
	})
};

let hoverIng = (varName) =>{
 	varName.onmouseover = () =>{
	   circle.classList.add('circle-hovering');
	   varName.classList.add('bg-elemnt');
	 }

	varName.onmouseleave = () =>{
		circle.classList.remove('circle-hovering');
		varName.classList.remove('bg-elemnt');
	}
}

hoverIng(headerPlayBtn);
hoverIng(headerShareBtn);
hoveringLinks();