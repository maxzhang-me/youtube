import { db } from '@/db'
import { categories } from '@/db/schema'

const categoryNames = [
  'Travel and events',
  'News and politics',
  'Pets and animals',
  'Cars and vehicles',
  'Gaming',
  'Education',
  'Science and technology',
  'Music',
  'Sports',
  'Comedy',
  'People and blogs',
  'Film and animation',
  'Entertainment',
  'How-to and style',
]

async function main() {
  console.log('Seeding categories...')

  try {
    const values = categoryNames.map(name => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }))

    await db.insert(categories).values(values)
    console.log('Categories seeded successfully!')
  } catch (error) {
    console.error('Error seeding categories: ', error)
    process.exit(1)
  }
}

main()
