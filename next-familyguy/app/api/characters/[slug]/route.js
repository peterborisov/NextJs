/**
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug of the character.
 *
 */

import characters from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const character = characters.data.find(item => item.slug === params.slug)
    if (!character) {
      return new NextResponse('not found', { status: 404 })
    }
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
