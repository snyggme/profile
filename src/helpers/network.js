const API_ROOT = 'https://5bc443613e0ce20013533336.mockapi.io'

export const httpGet = async endPoint => {
    try {
        const response = await fetch(`${API_ROOT}/${endPoint}`)
        if (response.ok) {
            const json = await response.json()

            return json.projects
        } else {
            throw new Error(response.status)
        }
    } catch (err) {
        console.log('httpGet error ', err)
    }
}

export const skillsLogos = [
	{
		class: 'icon-javascript-alt',
		name: 'JavaScript'
	},
	{
		class: 'icon-reactjs',
		name: 'React'
	},
	{
		class: 'icon-nodejs',
		name: 'NodeJS'
	},
	{
		class: 'icon-html5-alt',
		name: 'HTML5'
	},
	{
		class: 'icon-css3-alt',
		name: 'CSS3'
	},
	{
		class: 'icon-sass',
		name: 'SCSS'
	},
	{
		class: 'icon-jquery',
		name: 'jQuery'
	},
	{
		class: 'icon-bootstrap',
		name: 'Bootstrap'
	},
	{
		class: 'icon-git',
		name: 'Git'
	}
]