import colors from 'vuetify/es5/util/colors'
import Gifts from '~/components/icons/Gifts'
import FacebookIcon from '~/components/icons/FacebookIcon'
import YoutubeIcon from '~/components/icons/YoutubeIcon'

export default {
  defaultAssets: { icons: 'faSvg' },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#F6BC37',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: '#F6BC37',
        accent: '#0C69DE',
        secondary: '#0C69DE',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    values: {
      gifts: {
        component: Gifts
      },
      facebook: {
        component: FacebookIcon
      },
      youtube: {
        component: YoutubeIcon
      }
      // '~/assets/icons/gifts.svg'
    }
  }
}
