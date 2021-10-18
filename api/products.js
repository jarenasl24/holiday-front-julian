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
  if (filters.priceRange[1] !== 50) {
    paramsArray.push(['price_lt', filters.priceRange[1]])
  }
  return strapi.find('products', paramsArray)
}

export default getProducts
