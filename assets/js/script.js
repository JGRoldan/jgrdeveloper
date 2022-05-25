console.log('%c Develop by JGRoldan 2022 👽','font-size:15px;color:#D6FF00;font-weight:bold;background-color:black')

const nav=document.querySelector('.navHidden'),
	icon=document.querySelector('.icono'),
	links=Array.from(document.querySelectorAll('.link'))

icon.addEventListener('click',()=>{
	nav.classList.toggle('showNav')
	icon.classList.toggle('changeIcon')
		
	//Animacion links
	links.forEach((link,index)=>{
		setTimeout(()=>{
			link.classList.add('active');
		}, ((index * 400) + 1000))
		})
})

//Cerrar nav por cada click en enlaces

links.forEach(link=>{
	link.addEventListener('click',e=>{
		nav.classList.toggle('showNav')
		icon.classList.toggle('changeIcon')
	})
})

//cerrar nav cuando haces scroll
document.addEventListener('scroll',e=>{
	nav.classList.remove('showNav')
	icon.classList.remove('changeIcon')
})

