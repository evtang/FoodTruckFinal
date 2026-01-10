const getFoods = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}
const getMenu = async id => {
	const response = await fetch(`/api/v1/menu/${id}`)
	return await response.json()
}
const getEvent = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
const getSpecificEvent = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}
const showMenuList = foods => {
    const menuList = document.querySelector('.menu-list')
	foods?.forEach(({id, name, description, price, url}) => {
		const menuItem = document.createElement("div")
		menuItem.className = "menu-item"
		menuItem.innerHTML = `
            <br>
            <h2>${name}</h2>
			<img src="${url}" alt="${name}">
			<p><strong>Price:</strong> $${price} | <strong>Description:</strong> ${description}</p>`
            menuList.appendChild(menuItem)
            
	})
}

const showEventList = events => {
    const eventList = document.querySelector('.event-list')
	events?.forEach(({ id, name, location, date, time }) => {
		const eventItem = document.createElement("div")
		eventItem.className = "event-item"
		eventItem.innerHTML = `
			<h3><a href='/event/${id}'>${name}</a></h3>
			<h4><strong>Location:</strong> ${location} | <strong>Date and Time:</strong> ${date},  ${time}</h4>`
            eventList.appendChild(eventItem)
            
	})
}
const EventInfo = async events => {
	const path = window.location.pathname;
	const eventID = path.split('/').pop()
	const number = Number(eventID)
	const eventData = await getSpecificEvent(number)
	const { id, name, location, date, time } = eventData;
	const eventcarry = document.querySelector('.event-info')
	const info = document.createElement("div")
	info.className = "event-description"
	info.innerHTML = `
	<h3>${name}</h3>
	<h4><strong>Location:</strong> ${location} | <strong>Date and Time:</strong> ${date},  ${time}</h4>`
	eventcarry.appendChild(info)
	
}

;(async () => {
  const work = window.location.pathname;
  if (work === '/' || work.endsWith('index.html')) {
    const foods = await getFoods();      
    const events = await getEvent();     
    showMenuList(foods);                
    showEventList(events);               
  } 
  else if (work.includes('/event/')) {
    const split = work.split('/');
    const eventId = Number(split[split.length - 1]);
    const specificEvent = await getSpecificEvent(eventId);
    EventInfo(specificEvent);
  }
})();

