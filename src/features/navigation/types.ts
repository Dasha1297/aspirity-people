export type ServiceT = {
	icon: string
	name: string
	link: string
}

export type ResourceT = {
	name: string
	link: string
}

export type NavigationT = {
	services: ServiceT[]
	resources: ResourceT[]
}
