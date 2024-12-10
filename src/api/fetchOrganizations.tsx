import {Organization} from "@/api/types.ts";

export const fetchOrganizations = (): Organization[] => {
  return [
    {
      id: '9',
      name: 'StellarTech',
      description: 'Innovating beyond the stars with advanced space solutions',
    },
    {
      id: '10',
      name: 'AIverse',
      description: 'Creating intelligent ecosystems for a smarter tomorrow',
    },
    {
      id: '11',
      name: 'GreenDrive',
      description: 'Empowering clean and efficient transportation solutions',
    },
    {
      id: '12',
      name: 'NeuroSphere',
      description: 'Pushing the boundaries of neural technology and AI integration',
    },
    {
      id: '13',
      name: 'BrightGrid',
      description: 'Redefining energy storage and smart grid technologies',
    }
  ]
}
