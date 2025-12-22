import type { SchemaTypeDefinition } from 'sanity'

import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { postType } from './types/post'
import { explanationType } from './schemaTypes/explanationType' // ← ADD THIS

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    postType,
    categoryType,
    authorType,
    explanationType, // ← AND ADD THIS
  ],
}

export default schema