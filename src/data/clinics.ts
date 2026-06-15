export interface Clinic {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  emergencyAvailable: boolean;
}

export const clinics: Clinic[] = [
  {
    id: 'conakry-yattaya',
    name: 'Clinique Priorité Santé - Conakry',
    city: 'Conakry',
    region: 'Conakry',
    address: 'Yattaya marché, Conakry, Guinée',
    latitude: 9.657558,
    longitude: -13.576852,
    phone: '+224 621-21-41-76',
    email: 'contact@priorite-sante.org',
    hours: 'Lun-Ven: 8h30-20h | Sam-Dim: 9h-18h',
    services: ['Médecine générale', 'Urgences', 'Pédiatrie', 'Maternité'],
    emergencyAvailable: true,
  },
  {
    id: 'labe-centre',
    name: 'Clinique Priorité Santé - Labé',
    city: 'Labé',
    region: 'Moyenne-Guinée',
    address: 'Quartier Pounthioun, Labé, Guinée',
    latitude: 11.3200,
    longitude: -12.2833,
    phone: '+224 621-21-41-77',
    email: 'labe@priorite-sante.org',
    hours: '24h/24 - 7j/7',
    services: ['Médecine générale', 'Chirurgie', 'Maternité'],
    emergencyAvailable: true,
  },
  {
    id: 'kankan-centre',
    name: 'Clinique Priorité Santé - Kankan',
    city: 'Kankan',
    region: 'Haute-Guinée',
    address: 'Quartier Bordeaux, Kankan, Guinée',
    latitude: 10.3858,
    longitude: -9.3057,
    phone: '+224 621-21-41-78',
    email: 'kankan@priorite-sante.org',
    hours: 'Lun-Sam: 8h00-22h | Dim: Urgences uniquement',
    services: ['Médecine générale', 'Pédiatrie', 'Laboratoire'],
    emergencyAvailable: true,
  },
  {
    id: 'kindia-centre',
    name: 'Clinique Priorité Santé - Kindia',
    city: 'Kindia',
    region: 'Basse-Guinée',
    address: 'Quartier Tafory, Kindia, Guinée',
    latitude: 10.0564,
    longitude: -12.8658,
    phone: '+224 621-21-41-79',
    email: 'kindia@priorite-sante.org',
    hours: '24h/24 - 7j/7',
    services: ['Médecine générale', 'Urgences', 'Gynécologie'],
    emergencyAvailable: true,
  },
];
