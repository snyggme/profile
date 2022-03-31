export const animStr = (e) => {
	let elem = e.target

	const setChange = (pair, i) => {
		const { a, b } = pair[i]

		setTimeout(() => {
			arr[a] = arr[b]
			arr[b] = str[a]

			elem.textContent = arr.join('')

			i++

			if (i === pair.length) {
				setTimeout(() => {
					elem.textContent = str
					elem.dataset.processing = false
				}, 200)
			} else {
				setChange(pair, i)
			}
		}, 80)
	}

	if (elem.dataset.processing === 'true')
		return

	elem.dataset.processing = true

	const str = elem.textContent
	const arr = [...elem.textContent]

	const len = arr.length - 1

	const nums = []

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    	nums.push({	
	    	a: getRandomNumber(0, Math.floor(len / 2)),
	    	b: getRandomNumber(Math.floor(len / 2), len)
	    })
    }
    
	setChange(nums, 0)
}

const getRandomNumber = (min, max) => 
	Math.floor(Math.random() * (max - min + 1) ) + min


