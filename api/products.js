import { MAX_PRICE, NOMBRE_A_Z, NOMBRE_Z_A, PRECIO_MAYOR_MENOR, PRECIO_MENOR_MAYOR } from '../static/const'

const getProducts = (strapi, filters, limit, start) => {
  const paramsArray = [
    ['price_gt', filters.priceRange[0]],
    ['_limit', limit],
    ['_start', start]
  ]
  if (filters.categories.length > 0) {
    filters.categories.forEach(c => paramsArray.push(['product_category.id', c.id]))
  }
  if (filters.ageGroup) {
    paramsArray.push(['age_groups.id', filters.ageGroup.id])
  }
  if (filters.priceRange[1] !== MAX_PRICE) {
    paramsArray.push(['price_lt', filters.priceRange[1]])
  }
  if (filters.sort) {
    if (filters.sort === PRECIO_MAYOR_MENOR) {
      paramsArray.push(['_sort', 'price:DESC'])
    } else if (filters.sort === PRECIO_MENOR_MAYOR) {
      paramsArray.push(['_sort', 'price:ASC'])
    } else if (filters.sort === NOMBRE_A_Z) {
      paramsArray.push(['_sort', 'name:ASC'])
    } else if (filters.sort === NOMBRE_Z_A) {
      paramsArray.push(['_sort', 'name:DESC'])
    }
  }
  return strapi.find('products', paramsArray)
}

export default getProducts
