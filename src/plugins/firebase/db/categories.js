import { dbService } from './init'
import store from '@/store'

// Категории
const categoriesRef = dbService.ref('categories')

categoriesRef.on('child_added', data => {
  store.commit('categories/CATEGORY_ADD', { id: data.key, ...data.val() })
})

categoriesRef.on('child_changed', data => {
  store.commit('categories/CATEGORY_UPDATE', { id: data.key, ...data.val() })
})

categoriesRef.on('child_removed', data =>
  store.commit('categories/CATEGORY_REMOVE', data.key)
)

export { categoriesRef }
