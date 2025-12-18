const menuForm = document.querySelector('#menuForm')
const eventForm = document.querySelector('#eventForm')

menuForm.addEventListener('submit', async fooditem => {
	fooditem.preventDefault()

	const formData = new FormData(menuForm)
	const menuItem = Object.fromEntries(formData)

	const response = await fetch('/api/v1/menu', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(menuItem)
	})

	const result = await response.json()
    window.location.href = '/'
})

eventForm.addEventListener('submit', async eventitem => {
	eventitem.preventDefault()

	const formData = new FormData(eventForm)
	const eventItem = Object.fromEntries(formData)

	const response = await fetch('/api/v1/event', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(eventItem)
	})

	const result = await response.json()
	window.location.href = '/'
})
;(async () => {
  if(path === '/admin'){
	setupAdminForms()
  }
})();

