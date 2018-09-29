export const getAnimationName = (currPath, nextPath) => {
	const newCurrPath = currPath === '/' ? 'home' : currPath.substring(1)
	const newNextPath = nextPath === '/' ? 'home' : nextPath.substring(1)

	return obj[`${newCurrPath}_${newNextPath}`]
}

export const getPathname = (str) => str.substring(str.lastIndexOf('/'))

const obj = {
	home_skills: 'background-100-to-50-right 0.8s forwards',
	home_projects: 'anim-dumb-1 0.1s',
	home_contacts: 'background-100-to-0-right 1.5s forwards',
	skills_home: 'background-50-to-100-left 0.8s forwards', 
	skills_projects: 'background-50-to-100-left 0.8s forwards',
	skills_contacts: 'background-50-to-0-right 0.8s forwards',
	projects_home: 'anim-dumb-2 0.1s',
	projects_skills: 'background-100-to-50-right 0.8s forwards',
	projects_contacts: 'background-100-to-0-right 1.5s forwards',
	contacts_home: 'background-0-to-100-left 1.5s forwards',
	contacts_skills: 'background-0-to-50-left 0.8s forwards',
	contacts_projects: 'background-0-to-100-left 1.5s forwards'
}

/*
home ---> skills : 'background-100-to-50-right' 
	from width 100% to width 50% to right side

home ---> projects : 'no-changes' 
	from width 100% to probably full screen or no changes (background color???)

home ---> contacts : 'background-100-to-0-right' 
	from width 100% to width 0% to right side (white background ?)

skills ---> home : 'background-50-to-100-left'
	from right side width 50% to width 100%

skills ---> projects : 'background-50-to-100-left'
	from right side width 50% to width 100%

skills ---> contacts : 'background-50-to-0-left'
	from right side width 50%  to width 0% to right side

projects ---> home : 'no-changes'
	from width 100% to width 100% (no changes)

projects ---> skills : 'background-100-to-50-right'
	from width 100% to width 50% to right side

projects ---> contacts : 'background-100-to-0-right' 
	from width 100% to width 0% to right side

contacts ---> home : 'background-0-to-100-left' 
	from width 0% to width 100% to left side

contacts ---> skills : 'background-0-to-50-left' 
	from width 0% to width 50% to left side

contacts ---> projects : 'background-0-to-100-left' 
	from width 0% to width 100% to left side
*/