import { BOY_FIRST, GIRL_NAME } from '../config'

export type PhotoItem = {
  id: string
  src: string
  person: 'radhika' | 'pratik'
  title: string
  caption: string
}

export const RADHIKA_PHOTOS: PhotoItem[] = [
  {
    id: 'radhika-1',
    src: '/photos/radhika/radhika-1.png',
    person: 'radhika',
    title: 'Butterfly Mode Activated',
    caption: `Pout + leopard top + butterfly filter = ${GIRL_NAME} breaking the internet softly.`,
  },
  {
    id: 'radhika-2',
    src: '/photos/radhika/radhika-2.png',
    person: 'radhika',
    title: 'Main Character Energy',
    caption: 'Vintage collage. Soft glow. Press PLAY on forever. Cinema vibes only.',
  },
  {
    id: 'radhika-3',
    src: '/photos/radhika/radhika-3.png',
    person: 'radhika',
    title: 'Good Intentions Era',
    caption: 'Pink bow. Soft smile. A girl with good intentions… and dangerous cuteness.',
  },
  {
    id: 'radhika-4',
    src: '/photos/radhika/radhika-4.png',
    person: 'radhika',
    title: 'Cozy Soft Launch',
    caption: 'Claims "I Hate Luv Storys" energy while looking like the whole love story. Irony: 100.',
  },
  {
    id: 'radhika-5',
    src: '/photos/radhika/radhika-5.png',
    person: 'radhika',
    title: 'Wales Adventure Cutie',
    caption: 'Hoodie up. Golden hour. Even the hills said: "okay she\'s pretty." 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  },
]

export const PRATIK_PHOTOS: PhotoItem[] = [
  {
    id: 'pratik-1',
    src: '/photos/pratik/pratik-1.jpg',
    person: 'pratik',
    title: 'Alien Formal King',
    caption: `${BOY_FIRST} in ethnic wear… with alien stickers. Peak boyfriend software.`,
  },
  {
    id: 'pratik-2',
    src: '/photos/pratik/pratik-2.jpg',
    person: 'pratik',
    title: 'Casual Roadside Model',
    caption: 'Hands in pockets. Soft smile. Pretending he is not posing. (He is.)',
  },
  {
    id: 'pratik-3',
    src: '/photos/pratik/pratik-3.jpg',
    person: 'pratik',
    title: 'Black Kurta Boss Fight',
    caption: 'Event lighting. Sharp look. Future husband unlocked mid-pose.',
  },
  {
    id: 'pratik-4',
    src: '/photos/pratik/pratik-4.jpg',
    person: 'pratik',
    title: 'Desert Cool Guy DLC',
    caption: 'Sunglasses. Black fit. Car lean. Main character trying very hard. 😎',
  },
  {
    id: 'pratik-5',
    src: '/photos/pratik/pratik-5.jpg',
    person: 'pratik',
    title: 'Elevator Smoulder™',
    caption: 'Mirror selfie. Serious face. Elevator approved this performance.',
  },
]
